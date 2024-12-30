export const Verification_Template = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
  <style>
    body { font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #cf731c; color: white; text-align: center; padding: 20px; font-size: 24px; }
    .content { background-color: #f9f9f9; padding: 20px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); }
    .code { font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #e06d1b; text-align: center; margin: 20px 0; }
    .footer { text-align: center; color: #888; font-size: 0.8em; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="header">Verify Your Email</div>
  <div class="content">
    <p>Hello,</p>
    <p>Your verification code is:</p>
    <div class="code">{verificationCode}</div>
    <p>Enter this code on the verification page to complete your registration. This code will expire in 10 minutes.</p>
    <p>If you didn’t create an account, please ignore this email.</p>
  </div>
  <div class="footer">
    <p>This is an automated message, please do not reply.</p>
  </div>
</body>
</html>
`;
