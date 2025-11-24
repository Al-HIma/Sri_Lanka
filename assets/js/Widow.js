// ----------------------------------------------------------------------
// --- WIDOW SPONSORSHIP WIDGET LOGIC (ENGLISH VERSION) ---
// ----------------------------------------------------------------------

// --- CONFIGURATION (Widow Sponsorship English) ---
const WS_EN_whatsappNumber = '94777844536';
const WS_EN_websiteDomain = 'https://www.alhimasrilanka.org';

// --- ID REFERENCES (Widow Sponsorship English) ---
const WS_EN_monthlyAmountSelectId = 'monthlyAmountSelectWidowEN';
const WS_EN_durationSelectId = 'durationSelectWidowEN';
const WS_EN_totalDisplayId = 'totalAmountDisplayWidowEN';
const WS_EN_totalInputId = 'totalCalculatedInputWidowEN';
const WS_EN_whatsappLinkId = 'whatsappSponsorLinkWidowEN';

// 1. Function to create the reliable WhatsApp link for Widow Sponsorship (English)
function generateWhatsAppLinkWidowEN(monthlyAmount, durationMonths, totalAmountValue) {

    const formattedMonthlyAmount = monthlyAmount.toFixed(2);
    const formattedTotalAmount = totalAmountValue.toFixed(2);

    // Message tailored for Widow Sponsorship in English
    const messageLines = [
        `🤝 *Sponsorship Request for Widows and Divorcees* 🤝`,
        '',
        `Hello Al Hima Sri Lanka Team,`,
        '',
        `I would like to sponsor the Widows/Divorcees program with the following commitment.`,
        '',
        `*--- My Sponsorship Details ---*`,
        `💖 *Monthly Amount:* USD $${formattedMonthlyAmount}`,
        `🗓️ *Total Duration:* ${durationMonths} Months`,
        `💰 *Total Sponsorship:* USD $${formattedTotalAmount}`,
        '',
        `Please share the payment details (Bank details / Payment link) to finalize this sponsorship immediately.`,
        '',
        `Thank you for providing this essential support.`,
        `View our page: ${WS_EN_websiteDomain}`
    ];

    // Encode and Join lines to ensure correct line breaks (%0A)
    const encodedLines = messageLines.map(line => encodeURIComponent(line));
    const encodedMessage = encodedLines.join('%0A');

    const whatsappURL = `https://wa.me/${WS_EN_whatsappNumber}?text=${encodedMessage}`;

    const whatsappLinkElement = document.getElementById(WS_EN_whatsappLinkId);
    if (whatsappLinkElement) {
        whatsappLinkElement.href = whatsappURL;
    }
}

// 2. MAIN FUNCTION: Calculates total amount and updates the link for Widow Sponsorship (English)
function calculateTotalDonationWidowEN() {
    const amountSelect = document.getElementById(WS_EN_monthlyAmountSelectId);
    const durationSelect = document.getElementById(WS_EN_durationSelectId);

    const monthlyAmount = parseFloat(amountSelect.value) || 0;
    const durationMonths = parseInt(durationSelect.value) || 0;

    const totalAmountValue = monthlyAmount * durationMonths;

    document.getElementById(WS_EN_totalDisplayId).textContent = '$' + totalAmountValue.toFixed(2);
    document.getElementById(WS_EN_totalInputId).value = totalAmountValue;

    generateWhatsAppLinkWidowEN(monthlyAmount, durationMonths, totalAmountValue);
}

// 3. Initialization (Slim Select and Event Listeners for English Page)
document.addEventListener('DOMContentLoaded', () => {

    const amountDropdown = document.getElementById(WS_EN_monthlyAmountSelectId);
    const durationDropdown = document.getElementById(WS_EN_durationSelectId);

    // Slim Select Initialization for Widow Sponsorship dropdowns (English)
    if (amountDropdown) {
        new SlimSelect({
            select: amountDropdown,
            settings: { placeholderText: 'Select Amount', allowDeselect: false, showSearch: false, listMaxHeight: '200px' }
        });
    }

    if (durationDropdown) {
        new SlimSelect({
            select: durationDropdown,
            settings: { placeholderText: 'Select Duration', allowDeselect: false, showSearch: false, listMaxHeight: '200px' }
        });
    }

    // Attach listeners
    if (amountDropdown && durationDropdown) {
        amountDropdown.addEventListener('change', calculateTotalDonationWidowEN);
        durationDropdown.addEventListener('change', calculateTotalDonationWidowEN);
    }

    // Initial calculation on page load 
    // If the dropdowns are loaded, call the calculation function after a short delay
    setTimeout(calculateTotalDonationWidowEN, 300);
});