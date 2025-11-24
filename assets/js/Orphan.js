// ----------------------------------------------------------------------
// --- ORPHAN SPONSORSHIP WIDGET LOGIC (ENGLISH VERSION) ---
// ----------------------------------------------------------------------

// --- CONFIGURATION (Orphan Sponsorship English) ---
const OS_EN_whatsappNumber = '94777844536'; 
const OS_EN_websiteDomain = 'https://www.alhimasrilanka.org';

// --- ID REFERENCES (Orphan Sponsorship English) ---
// Note: Ensure these IDs match your Sponsorship_Orphan.html file exactly
const OS_EN_monthlyAmountSelectId = 'monthlyAmountSelectOrphanEN';
const OS_EN_durationSelectId = 'durationSelectOrphanEN';
const OS_EN_totalDisplayId = 'totalAmountDisplayOrphanEN';
const OS_EN_totalInputId = 'totalCalculatedInputOrphanEN';
const OS_EN_whatsappLinkId = 'whatsappSponsorLinkOrphanEN';

// 1. Function to create the reliable WhatsApp link for Orphan Sponsorship (English)
function generateWhatsAppLinkOrphanEN(monthlyAmount, durationMonths, totalAmountValue) {

    const formattedMonthlyAmount = monthlyAmount.toFixed(2);
    const formattedTotalAmount = totalAmountValue.toFixed(2);

    // Message tailored for Orphan Sponsorship in English
    const messageLines = [
        `⭐ *Sponsorship Request for Orphans* ⭐`,
        '',
        `Hello Al Hima Sri Lanka Team,`,
        '',
        `I would like to sponsor the Orphan program with the following commitment.`,
        '',
        `*--- My Sponsorship Details ---*`,
        `👶 *Monthly Amount:* USD $${formattedMonthlyAmount}`,
        `🗓️ *Total Duration:* ${durationMonths} Months`,
        `💰 *Total Sponsorship:* USD $${formattedTotalAmount}`,
        '',
        `Please share the payment details (Bank details / Payment link) to finalize this sponsorship immediately.`,
        '',
        `Thank you for providing this essential support.`,
        `View our page: ${OS_EN_websiteDomain}`
    ];

    // Encode and Join lines to ensure correct line breaks (%0A)
    const encodedLines = messageLines.map(line => encodeURIComponent(line));
    const encodedMessage = encodedLines.join('%0A');

    const whatsappURL = `https://wa.me/${OS_EN_whatsappNumber}?text=${encodedMessage}`;

    const whatsappLinkElement = document.getElementById(OS_EN_whatsappLinkId);
    if (whatsappLinkElement) {
        whatsappLinkElement.href = whatsappURL;
    }
}

// 2. MAIN FUNCTION: Calculates total amount and updates the link for Orphan Sponsorship (English)
function calculateTotalDonationOrphanEN() {
    const amountSelect = document.getElementById(OS_EN_monthlyAmountSelectId);
    const durationSelect = document.getElementById(OS_EN_durationSelectId);

    // Ensure elements exist before proceeding
    if (!amountSelect || !durationSelect) {
        console.error('Orphan Sponsorship dropdown elements not found.');
        return;
    }

    const monthlyAmount = parseFloat(amountSelect.value) || 0;
    const durationMonths = parseInt(durationSelect.value) || 0;

    const totalAmountValue = monthlyAmount * durationMonths;

    // Update display and hidden input
    const totalDisplay = document.getElementById(OS_EN_totalDisplayId);
    const totalInput = document.getElementById(OS_EN_totalInputId);

    if (totalDisplay) {
        totalDisplay.textContent = '$' + totalAmountValue.toFixed(2);
    }
    if (totalInput) {
        totalInput.value = totalAmountValue;
    }

    // Generate and update the WhatsApp link
    generateWhatsAppLinkOrphanEN(monthlyAmount, durationMonths, totalAmountValue);
}

// 3. Initialization (Slim Select and Event Listeners for English Page)
document.addEventListener('DOMContentLoaded', () => {

    const amountDropdown = document.getElementById(OS_EN_monthlyAmountSelectId);
    const durationDropdown = document.getElementById(OS_EN_durationSelectId);

    // Slim Select Initialization for Orphan Sponsorship dropdowns (English)
    if (amountDropdown && typeof SlimSelect !== 'undefined') {
        new SlimSelect({
            select: amountDropdown,
            settings: { placeholderText: 'Select Amount', allowDeselect: false, showSearch: false, listMaxHeight: '200px' }
        });
    }

    if (durationDropdown && typeof SlimSelect !== 'undefined') {
        new SlimSelect({
            select: durationDropdown,
            settings: { placeholderText: 'Select Duration', allowDeselect: false, showSearch: false, listMaxHeight: '200px' }
        });
    }

    // Attach listeners
    if (amountDropdown && durationDropdown) {
        // NOTE: Function name is calculateTotalDonationOrphanEN
        amountDropdown.addEventListener('change', calculateTotalDonationOrphanEN);
        durationDropdown.addEventListener('change', calculateTotalDonationOrphanEN);
    }

    // Initial calculation on page load 
    // If the dropdowns are loaded, call the calculation function after a short delay
    setTimeout(calculateTotalDonationOrphanEN, 300);
});