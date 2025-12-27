// lib/mailer.ts

export async function sendWelcomeEmail(email: string, subject: string) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 200));
  
  console.log(`[MAILER] Sending email to ${email} with subject: "${subject}"`);
  
  // Return true to simulate success
  return true;
}