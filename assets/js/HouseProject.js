// ----------------------------------------------------------------------
// --- HOUSE PROJECT SPONSORSHIP WIDGET LOGIC (ENGLISH VERSION) ---
// --- Adapted from Orphan.js for Fixed Unit Cost Calculation ---
// ----------------------------------------------------------------------

// --- CONFIGURATION (House Project Sponsorship English) ---
const HP_EN_whatsappNumber = '94777844536'; 
const HP_EN_websiteDomain = 'https://www.alhimasrilanka.org';
const HP_EN_unitCostKWD = 1850.00; // Fixed cost per house unit (KWD)
const HP_EN_KWD_to_USD_Rate = 3.26; // Approximate exchange rate

// --- ID REFERENCES (House Project Sponsorship English) ---
const HP_EN_unitCountSelectId = 'unitCountSelectHouseEN'; // New ID for selecting share/full unit
const HP_EN_fullUnitCountSelectId = 'fullUnitCountSelectHouseEN'; // NEW: ID for selecting multiple full units
const HP_EN_multiUnitWrapperId = 'multiUnitSelectionWrapper'; // NEW: Wrapper for the new dropdown
const HP_EN_totalDisplayId = 'totalAmountDisplayHouseEN'; // KWD Total Display
const HP_EN_totalDisplayUSDId = 'totalAmountDisplayHouseUSDEN'; // USD Total Display
const HP_EN_totalInputId = 'totalCalculatedInputHouseEN'; // Hidden input for KWD total
const HP_EN_whatsappLinkId = 'whatsappSponsorLinkHouseEN';


// 1. Function to create the reliable WhatsApp link for House Project Sponsorship (English)
// (Function remains the same, but 'unitCount' now represents the final calculated number of houses)
function generateWhatsAppLinkHouseEN(unitCount, totalAmountKWD, totalAmountUSD) {
    // ... (rest of the function is the same)
    
    const formattedUnitCostKWD = HP_EN_unitCostKWD.toFixed(2);
    const formattedTotalKWD = totalAmountKWD.toFixed(2);
    const formattedTotalUSD = totalAmountUSD.toFixed(2);

    // Message tailored for House Project Sponsorship in English
    const messageLines = [
        `🏠 *Sponsorship Request for Permanent Home Project* 🏠`,
        '',
        `Hello Al Hima Sri Lanka Team,`,
        '',
        `I would like to sponsor the Permanent Home Project with the following commitment.`,
        '',
        `*--- My Sponsorship Details ---*`,
        `🏗️ *Cost per Unit:* KWD ${formattedUnitCostKWD}`,
        `🔢 *Number of Units:* ${unitCount} Unit(s)`, // Use final unitCount here
        `💰 *Total Sponsorship (KWD):* KWD ${formattedTotalKWD}`,
        `💵 *Total Sponsorship (USD Approx):* USD ${formattedTotalUSD}`,
        '',
        `Please share the payment details (Bank details / Payment link) to finalize this sponsorship immediately.`,
        '',
        `Thank you for providing this essential shelter.`,
        `View our page: ${HP_EN_websiteDomain}`
    ];

    // Encode and Join lines to ensure correct line breaks (%0A)
    const encodedLines = messageLines.map(line => encodeURIComponent(line));
    const encodedMessage = encodedLines.join('%0A');

    const whatsappURL = `https://wa.me/${HP_EN_whatsappNumber}?text=${encodedMessage}`;

    const whatsappLinkElement = document.getElementById(HP_EN_whatsappLinkId);
    if (whatsappLinkElement) {
        whatsappLinkElement.href = whatsappURL;
    }
}


// 2. MAIN FUNCTION: Calculates total amount and updates the link for House Project Sponsorship (English)
function calculateTotalDonationHouseEN() {
    const unitCountSelect = document.getElementById(HP_EN_unitCountSelectId);
    const fullUnitCountSelect = document.getElementById(HP_EN_fullUnitCountSelectId); // NEW
    const multiUnitWrapper = document.getElementById(HP_EN_multiUnitWrapperId); // NEW

    // Ensure element exists before proceeding
    if (!unitCountSelect || !multiUnitWrapper || !fullUnitCountSelect) {
        // If not found, log error and stop, but don't break the app
        console.error('One or more House Project dropdown elements not found.');
        return;
    }
    
    // Get the value from the main dropdown (e.g., "1", "0.5", "0.25")
    const selectedUnitShare = parseFloat(unitCountSelect.value) || 0;
    
    // Determine the final number of units/shares to calculate the cost
    let finalUnitCount = selectedUnitShare;
    
    // -------------------------------------------------------
    // NEW LOGIC: Conditional Display and Calculation
    // -------------------------------------------------------
    if (selectedUnitShare === 1) {
        // If '1 Unit (Full Sponsorship)' is selected:
        
        // A. Show the new dropdown for multiple houses
        multiUnitWrapper.style.display = 'block'; 
        
        // B. Get the quantity from the new dropdown (1, 2, 3, 4...)
        const multipleFullUnits = parseInt(fullUnitCountSelect.value) || 1; 
        
        // C. Update the final unit count for calculation
        finalUnitCount = multipleFullUnits;
        
    } else {
        // If any share (0.5, 0.25, etc.) or no selection is made:
        
        // A. Hide the new dropdown
        multiUnitWrapper.style.display = 'none';
        
        // B. Reset the new dropdown's value (optional, but good practice)
        // Note: The main dropdown's value (finalUnitCount) is already set to the share amount.
    }
    // -------------------------------------------------------


    // Calculation in KWD
    const totalAmountKWD = HP_EN_unitCostKWD * finalUnitCount;
    // Calculation in USD (approximate)
    const totalAmountUSD = totalAmountKWD * HP_EN_KWD_to_USD_Rate;


    // Update display and hidden input
    const totalDisplayKWD = document.getElementById(HP_EN_totalDisplayId);
    const totalDisplayUSD = document.getElementById(HP_EN_totalDisplayUSDId);
    const totalInput = document.getElementById(HP_EN_totalInputId);

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
    generateWhatsAppLinkHouseEN(finalUnitCount, totalAmountKWD, totalAmountUSD);
}

// 3. Initialization (Slim Select and Event Listeners for English Page)
document.addEventListener('DOMContentLoaded', () => {

    const unitCountDropdown = document.getElementById(HP_EN_unitCountSelectId);
    const fullUnitCountDropdown = document.getElementById(HP_EN_fullUnitCountSelectId); // NEW
    
    // Slim Select Initialization for House Project dropdown (English)
    if (unitCountDropdown && typeof SlimSelect !== 'undefined') {
        new SlimSelect({
            select: unitCountDropdown,
            settings: { placeholderText: 'Select Units', allowDeselect: false, showSearch: false, listMaxHeight: '200px' }
        });
    }
    
    // NEW: Slim Select Initialization for the new dropdown
    if (fullUnitCountDropdown && typeof SlimSelect !== 'undefined') {
        new SlimSelect({
            select: fullUnitCountDropdown,
            settings: { placeholderText: 'Select Quantity', allowDeselect: false, showSearch: false, listMaxHeight: '200px' }
        });
    }
    

    // Attach listeners
    if (unitCountDropdown) {
        // Main dropdown changes the visibility AND recalculates
        unitCountDropdown.addEventListener('change', calculateTotalDonationHouseEN);
    }
    
    // NEW: Listener for the new dropdown only needs to recalculate
    if (fullUnitCountDropdown) {
        fullUnitCountDropdown.addEventListener('change', calculateTotalDonationHouseEN);
    }

    // Initial calculation on page load 
    setTimeout(calculateTotalDonationHouseEN, 300);
});