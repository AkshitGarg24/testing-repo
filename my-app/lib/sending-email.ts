export async function sendingEmail(emailContent: any, seneder: any) {
    let formatttedEmail = emailContent.trim();
    console.log(formatttedEmail);
    console.log(seneder);
    console.log(`Sending ${formatttedEmail} to ${seneder}`)
}