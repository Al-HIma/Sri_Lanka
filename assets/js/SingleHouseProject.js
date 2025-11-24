// ----------------------------------------------------------------------
// --- SINGLE FAMILY SHELTER PROJECT SPONSORSHIP WIDGET LOGIC ---
// ----------------------------------------------------------------------

// --- CONFIGURATION (Single House Project Sponsorship English) ---
const SHP_EN_whatsappNumber = '94777844536'; 
const SHP_EN_websiteDomain = 'https://www.alhimasrilanka.org';
// ஒரு வீட்டிற்கு ஆகும் மொத்தச் செலவு (KWD)
const SHP_EN_totalProjectCostKWD = 1850.00; // Fixed cost for one house (KWD)
const SHP_EN_KWD_to_USD_Rate = 3.26; // Approximate exchange rate

// --- ID REFERENCES (Single House Project Sponsorship English) ---
// இந்த திட்டத்தில் 'share' இல்லை, அதனால் 'fullUnitSelect' மட்டுமே தேவை.
const SHP_EN_fullUnitSelectId = 'fullUnitCountSelectSingleHouseEN'; // Selecting number of houses
const SHP_EN_totalDisplayId = 'totalAmountDisplaySingleHouseEN'; // KWD Total Display
const SHP_EN_totalDisplayUSDId = 'totalAmountDisplaySingleHouseUSDEN'; // USD Total Display
const SHP_EN_totalInputId = 'totalCalculatedInputSingleHouseEN'; // Hidden input for KWD total
const SHP_EN_whatsappLinkId = 'whatsappSponsorLinkSingleHouseEN';


// 1. Function to create the reliable WhatsApp link
function generateWhatsAppLinkSHP_EN(houseCount, totalAmountKWD, totalAmountUSD) {

    const formattedCostKWD = SHP_EN_totalProjectCostKWD.toFixed(2);
    const formattedTotalKWD = totalAmountKWD.toFixed(2);
    const formattedTotalUSD = totalAmountUSD.toFixed(2);
    
    // Message tailored for Single House Sponsorship
    const messageLines = [
        `🏡 *Sponsorship Request for Single Family Home Project* 🏡`,
        '',
        `Hello Al Hima Sri Lanka Team,`,
        '',
        `I would like to sponsor the construction of ${houseCount} permanent home(s) for a needy family.`,
        '',
        `*--- My Sponsorship Details ---*`,
        `🏗️ *Cost per House:* KWD ${formattedCostKWD}`,
        `🔢 *Number of Houses:* ${houseCount} House(s)`,
        `💰 *Total Sponsorship (KWD):* KWD ${formattedTotalKWD}`,
        `💵 *Total Sponsorship (USD Approx):* USD ${formattedTotalUSD}`,
        '',
        `Please share the payment details to finalize this sponsorship immediately.`,
        '',
        `Thank you for providing this essential shelter.`,
        `View our page: ${SHP_EN_websiteDomain}`
    ];

    // Encode and Join lines
    const encodedLines = messageLines.map(line => encodeURIComponent(line));
    const encodedMessage = encodedLines.join('%0A');

    const whatsappURL = `https://wa.me/${SHP_EN_whatsappNumber}?text=${encodedMessage}`;

    const whatsappLinkElement = document.getElementById(SHP_EN_whatsappLinkId);
    if (whatsappLinkElement) {
        whatsappLinkElement.href = whatsappURL;
    }
}

// 2. MAIN FUNCTION: Calculates total amount and updates the link
function calculateTotalDonationSHP_EN() {
    const houseCountSelect = document.getElementById(SHP_EN_fullUnitSelectId);

    if (!houseCountSelect) {
        console.error('Single House Project Count dropdown element not found.');
        return;
    }

    // Number of houses selected (1, 2, 3, etc.)
    const houseCount = parseInt(houseCountSelect.value) || 0;
    
    // Calculation in KWD (Total cost * Number of houses)
    const totalAmountKWD = SHP_EN_totalProjectCostKWD * houseCount;
    // Calculation in USD (approximate)
    const totalAmountUSD = totalAmountKWD * SHP_EN_KWD_to_USD_Rate;


    // Update display and hidden input
    const totalDisplayKWD = document.getElementById(SHP_EN_totalDisplayId);
    const totalDisplayUSD = document.getElementById(SHP_EN_totalDisplayUSDId);
    const totalInput = document.getElementById(SHP_EN_totalInputId);

    if (totalDisplayKWD) {
        totalDisplayKWD.textContent = 'KWD ' + totalAmountKWD.toFixed(2);
    }
    if (totalDisplayUSD) {
        totalDisplayUSD.textContent = 'USD ' + totalAmountUSD.toFixed(2);
    }
    if (totalInput) {
        totalInput.value = totalAmountKWD;
    }

    // Generate and update the WhatsApp link
    generateWhatsAppLinkSHP_EN(houseCount, totalAmountKWD, totalAmountUSD);
}

// 3. Initialization (Slim Select and Event Listeners)
document.addEventListener('DOMContentLoaded', () => {

    const houseCountDropdown = document.getElementById(SHP_EN_fullUnitSelectId);

    // Slim Select Initialization for House Project dropdown
    if (houseCountDropdown && typeof SlimSelect !== 'undefined') {
        new SlimSelect({
            select: houseCountDropdown,
            settings: { placeholderText: 'Select Houses', allowDeselect: false, showSearch: false, listMaxHeight: '200px' }
        });
    }

    // Attach listeners
    if (houseCountDropdown) {
        houseCountDropdown.addEventListener('change', calculateTotalDonationSHP_EN);
    }

    // Initial calculation on page load 
    setTimeout(calculateTotalDonationSHP_EN, 300);
});