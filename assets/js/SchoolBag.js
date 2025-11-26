// ----------------------------------------------------------------------
// --- SCHOOL BAG SPONSORSHIP WIDGET LOGIC (ENGLISH VERSION) ---
// ----------------------------------------------------------------------

// --- CONFIGURATION ---
const SB_EN_whatsappNumber = '94777844536'; 
const SB_EN_websiteDomain = 'https://al-hima.github.io/Sri_Lanka/'; 
const SB_EN_bagCost = 30; // Cost of one school bag kit in USD ($30)

// --- ID REFERENCES ---
const SB_EN_quantitySelectId = 'quantitySelectSchoolBagEN';
const SB_EN_totalDisplayId = 'totalAmountDisplaySchoolBagEN';
const SB_EN_totalInputId = 'totalCalculatedInputSchoolBagEN';
const SB_EN_whatsappLinkId = 'whatsappSponsorLinkSchoolBagEN';

// 1. Function to create the reliable WhatsApp link
function generateWhatsAppLinkSchoolBagEN(quantity, totalAmountValue) {

    const formattedTotalAmount = totalAmountValue.toFixed(2);

    // Message tailored for School Bag Sponsorship
    const messageLines = [
        `🎒 *Donation Request for School Bag Project 2025* 🎒`,
        '',
        `Hello Al Hima Sri Lanka Team,`,
        '',
        `I would like to sponsor School Bag kits with the following details:`,
        '',
        `*--- My Sponsorship Details ---*`,
        `🔢 *Quantity:* ${quantity} School Bags`,
        `💵 *Cost per Bag:* USD $${SB_EN_bagCost.toFixed(2)}`,
        `💰 *Total Donation:* USD $${formattedTotalAmount}`,
        '',
        `Please share the payment details (Bank details / Payment link) to finalize this donation immediately.`,
        '',
        `Thank you for supporting needy students in Sri Lanka!`,
        `View our page: ${SB_EN_websiteDomain}`
    ];

    // Encode and Join lines to ensure correct line breaks (%0A)
    const encodedLines = messageLines.map(line => encodeURIComponent(line));
    const encodedMessage = encodedLines.join('%0A');

    const whatsappURL = `https://wa.me/${SB_EN_whatsappNumber}?text=${encodedMessage}`;

    const whatsappLinkElement = document.getElementById(SB_EN_whatsappLinkId);
    if (whatsappLinkElement) {
        whatsappLinkElement.href = whatsappURL;
    }
}

// 2. MAIN FUNCTION: Calculates total amount and updates the link
function calculateTotalDonationSchoolBagEN() {
    const quantitySelect = document.getElementById(SB_EN_quantitySelectId);

    if (!quantitySelect) {
        console.error('School Bag quantity selection element not found.');
        return;
    }

    const quantity = parseInt(quantitySelect.value) || 0;
    
    // Calculation: Quantity * Cost per Bag
    const totalAmountValue = quantity * SB_EN_bagCost;

    // Update display and hidden input
    const totalDisplay = document.getElementById(SB_EN_totalDisplayId);
    const totalInput = document.getElementById(SB_EN_totalInputId);

    if (totalDisplay) {
        totalDisplay.textContent = '$' + totalAmountValue.toFixed(2);
    }
    if (totalInput) {
        totalInput.value = totalAmountValue;
    }

    // Generate and update the WhatsApp link
    generateWhatsAppLinkSchoolBagEN(quantity, totalAmountValue);
}

// 3. Initialization (Slim Select and Event Listeners)
document.addEventListener('DOMContentLoaded', () => {

    const quantityDropdown = document.getElementById(SB_EN_quantitySelectId);

    // Slim Select Initialization (assumes SlimSelect library is available)
    if (quantityDropdown && typeof SlimSelect !== 'undefined') {
        new SlimSelect({
            select: quantityDropdown,
            settings: { placeholderText: 'Select Quantity', allowDeselect: false, showSearch: false, listMaxHeight: '200px' }
        });
    }

    // Attach listener
    if (quantityDropdown) {
        quantityDropdown.addEventListener('change', calculateTotalDonationSchoolBagEN);
    }

    // Initial calculation on page load 
    // Wait for dropdown to render before calculating
    setTimeout(calculateTotalDonationSchoolBagEN, 300);
});