// --- CONFIGURATION for General Contact Form (Using previous config for consistency) ---
const CONTACT_whatsappNumber = '94777844536'; 
const CONTACT_websiteDomain = 'https://www.alhimasrilanka.org'; 

// Function to generate the WhatsApp message from form data
function generateWhatsAppMessage() {
    // 1. Get the values from the form inputs
    // Note: The IDs here match the IDs in the corrected index.html below
    const name = document.getElementById('ul-contact-name').value;
    const email = document.getElementById('ul-contact-email').value;
    const phone = document.getElementById('ul-contact-phone').value;
    const subject = document.getElementById('ul-contact-subject').value;
    const message = document.getElementById('ul-contact-msg').value;

    // 2. Construct the message content
    const messageLines = [
        `✉️ *New Contact Form Submission* ✉️`,
        '',
        `Hello Al Hima Sri Lanka Team,`,
        '',
        `A user has submitted a general inquiry via the contact form.`,
        '',
        `*--- Submission Details ---*`,
        `👤 *Name:* ${name || 'N/A'}`,
        `📧 *Email:* ${email || 'N/A'}`,
        `📞 *Phone:* ${phone || 'N/A'}`,
        `🎯 *Subject:* ${subject || 'N/A'}`,
        '',
        `*--- Message Content ---*`,
        message || 'No message provided.',
        '',
        `---`,
        `View our page: ${CONTACT_websiteDomain}`
    ];

    // 3. Encode and Join lines
    const encodedLines = messageLines.map(line => encodeURIComponent(line));
    const encodedMessage = encodedLines.join('%0A');

    // 4. Construct the final WhatsApp URL
    return `https://wa.me/${CONTACT_whatsappNumber}?text=${encodedMessage}`;
}

// Function to handle the button click
function handleContactFormSubmit(event) {
    // Prevent default form submission which reloads the page
    if (event) {
        event.preventDefault(); 
    }
    
    const whatsappURL = generateWhatsAppMessage();
    // Open the generated WhatsApp link in a new window/tab
    window.open(whatsappURL, '_blank');
}

// Attach the event listener to the "Send Message" button after the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Ensure this ID matches the button ID in index.html
    const sendButton = document.getElementById('sendWhatsappButton');

    if (sendButton) {
        // Attach the function to the click event
        sendButton.addEventListener('click', handleContactFormSubmit);
        console.log("WhatsApp button listener attached successfully.");
    } else {
        console.error("WhatsApp button element (ID: sendWhatsappButton) not found.");
    }
});