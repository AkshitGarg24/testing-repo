export async function sendingEmail(emailContent: any, sender: any) {
    let formatttedEmail = emailContent.trim();
    console.log(formatttedEmail);
    console.log(sender);
    console.log(`Sending ${formatttedEmail} to ${sender}`)
}