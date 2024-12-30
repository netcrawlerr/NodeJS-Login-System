export const VERIFICATION_EMAIL_TEMPLATE = `
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

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
  <style>
    body { font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #d3531d; color: white; text-align: center; padding: 20px; font-size: 24px; }
    .content { background-color: #f9f9f9; padding: 20px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); }
    .icon { background-color: #cf6717; color: white; width: 50px; height: 50px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 30px; margin: 20px auto; }
    .footer { text-align: center; color: #888; font-size: 0.8em; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="header">Password Reset Successful</div>
  <div class="content">
    <p>Hello,</p>
    <p>Your password has been successfully reset.</p>
    <div class="icon">✓</div>
    <p>If you did not initiate this, contact support immediately.</p>
    <p>For better security:</p>
    <ul>
      <li>Use strong, unique passwords</li>
      <li>Enable two-factor authentication</li>
      <li>Avoid using the same password across sites</li>
    </ul>
  </div>
  <div class="footer">
    <p>This is an automated message, please do not reply.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
  <style>
    body { font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #cf6717; color: white; text-align: center; padding: 20px; font-size: 24px; }
    .content { background-color: #f9f9f9; padding: 20px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); }
    .button { background-color: #cf6717; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block; margin: 20px auto; text-align: center; }
    .footer { text-align: center; color: #888; font-size: 0.8em; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="header">Password Reset</div>
  <div class="content">
    <p>Hello,</p>
    <p>We received a request to reset your password. If this wasn’t you, ignore this email.</p>
    <p>Click the button below to reset your password:</p>
    <a href="{resetURL}" class="button">Reset Password</a>
    <p>This link will expire in 1 hour.</p>
  </div>
  <div class="footer">
    <p>This is an automated message, please do not reply.</p>
  </div>
</body>
</html>
`;
