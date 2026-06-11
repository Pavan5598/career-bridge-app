
export const userTemplate = ({ name, course }) => `
<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <h2>Hello ${name},</h2>

  <p>
    Thank you for contacting <strong>Career Bridge Institute</strong>.
    We have successfully received your enquiry and appreciate your interest in our programs.
  </p>

  <p><strong>Your Enquiry Details</strong></p>

  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Course of Interest:</strong> ${course}</p>

  <p>
    Our team will review your enquiry and get back to you within
    <strong>1–2 business days</strong>.
  </p>

  <p>
    If you have any urgent questions, simply reply to this email and we'll be happy to assist you.
  </p>

  <p>Thank you for choosing Career Bridge Institute.</p>

  <br/>

  <p>Best regards,</p>
  <p>
    <strong>Career Bridge Team</strong><br/>
    Career Bridge Institute
  </p>
</div>
`;

export const adminTemplate = ({
  name,
  email,
  course,
  message,
}) => `
<div>
  <h2>New Course Enquiry Received</h2>

  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Course:</strong> ${course}</p>
  <p><strong>Message:</strong> ${message}</p>

  <br/>

   <p>Regards,</p>
   <p>Career Bridge Team</p>
</div>
`;