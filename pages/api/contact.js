import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // jo form me fill hua vo yahan hai
      to: process.env.CONTACT_TO_EMAIL, // aapki Gmail
      subject: `New message from portfolio: ${name}`,
      html: `
        <h3>You have a new message from your portfolio website</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br/>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return res.status(200).json({ message: 'Message sent!' });
  } catch (err) {
    console.error("Email send error:", err);
    return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
}
