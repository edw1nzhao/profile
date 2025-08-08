import { RESEND_API_KEY, TURNSTILE_SECRET_KEY } from '$env/static/private';
import { Resend } from 'resend';
import { fail } from '@sveltejs/kit';

const resend = new Resend(RESEND_API_KEY);

export const actions = {
	default: async ({ request }: { request: Request }) => {
		const formData = await request.formData();
		const name = formData.get('name');
		const email = formData.get('email');
		const subject = formData.get('subject');
		const message = formData.get('message');
		const honeypot = formData.get('website');
		const turnstileToken = formData.get('cf-turnstile-response');

		// Check honeypot field - if it's filled, it's likely a bot
		if (honeypot) {
			// Return success to the bot without sending an email
			// This prevents the bot from knowing it was detected
			return {
				success: true
			};
		}

		if (!name || !email || !subject || !message) {
			return fail(400, {
				error: 'All fields are required',
				name,
				email,
				subject,
				message
			});
		}

		// Verify Turnstile token
		if (!turnstileToken) {
			return fail(400, {
				error: 'Please complete the CAPTCHA',
				name,
				email,
				subject,
				message
			});
		}

		try {
			const verifyResponse = await fetch(
				'https://challenges.cloudflare.com/turnstile/v0/siteverify',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					body: new URLSearchParams({
						secret: TURNSTILE_SECRET_KEY,
						response: turnstileToken as string,
						remoteip:
							request.headers.get('CF-Connecting-IP') ||
							request.headers.get('X-Forwarded-For') ||
							''
					})
				}
			);

			const verifyData = await verifyResponse.json();

			if (!verifyData.success) {
				return fail(400, {
					error: 'CAPTCHA verification failed. Please try again.',
					name,
					email,
					subject,
					message
				});
			}
		} catch (error) {
			console.error('Turnstile verification error:', error);
			return fail(500, {
				error: 'CAPTCHA verification error. Please try again.',
				name,
				email,
				subject,
				message
			});
		}

		try {
			await resend.emails.send({
				from: 'contact@edwinzhao.com',
				to: 'contact@edwinzhao.com',
				subject: `Contact Form: ${subject}`,
				html: `
					<h2>New Contact Form Submission</h2>
					<p><strong>Name:</strong> ${name}</p>
					<p><strong>Email:</strong> ${email}</p>
					<p><strong>Subject:</strong> ${subject}</p>
					<p><strong>Message:</strong></p>
					<p>${message}</p>
				`
			});

			return {
				success: true
			};
		} catch (error) {
			console.error('Email sending failed:', error);
			return fail(500, {
				error: 'Failed to send email. Please try again later.',
				name,
				email,
				subject,
				message
			});
		}
	}
};
