// ***** GLOBAL CONTENT ***** //
const upgrades = {
    // Base Model
    color: 'White',
    storage: '128GB Storage',
};

// Global = Get base model/specs from div 'specs' (line 78) from HTML file
let productHardware = document.querySelectorAll('[data-js="product-upgrades"]');

// -=-=-=- Get FINAL PRICE(line 127) $$$ -=-=-=-
// Starting price: $699.00
let finalPrice = document.querySelector('[data-js="final-price"]');
let finalPriceInteger = parseInt(finalPrice.innerText, 10);

// Get installment price(line 181) and convert to FLOAT value
let installmentPrice = document.querySelector('[data-js="installments-price"]');
// ***** END GLOBAL CONTENT ***** //

// =-=-=-= UPGRADE OPTION 2 - STORAGE =-=-=-= //
// Get all STORAGE boxes
let storageList = document.querySelectorAll('[data-js="storageList"]');

// **** STORAGE UPGRADE selection when user chooses an option ***
storageList.forEach(item => {
    item.addEventListener('click', () => {
        if (item.childNodes[1].innerText != upgrades.storage) {

            // Object 'upgrades' receives new storage upgrade selected
            upgrades.storage = item.childNodes[1].innerText;

            // All STORAGE prices
            const storagePrices = [150, 150, 300];

            // Convert current STORAGE option selected PRICE to INTEGER
            let priceConvertedToInt = parseInt(item.lastElementChild.innerText.replace(/^\D+/g, ''), 10);

            storageList.forEach(function(item) {
                // Removes the 'active' class of all upgrade boxes
                item.classList.remove('active');

                // Removes the 'off' class of all span/data-js='storage-price'
                item.lastElementChild.classList.remove('off');
            });

            // The code below is to adjust the FINAL PRICE according to price selected
            if (upgrades.storage == '256GB Storage') {

                // If 256GB price is negative then decrease final price
                if (storageList[1].childNodes[3].innerText[0] == '-') {
                    finalPriceInteger -= priceConvertedToInt;
                } else {
                    finalPriceInteger += priceConvertedToInt;
                }

                // 128GB Storage = `- $150`
                storageList[0].childNodes[3].innerText = `- $${storagePrices[1]}`;

                // 512GB Storage = `+ $150` (256GB price - 512GB price)
                storageList[2].childNodes[3].innerText = `+ $${Math.abs(storagePrices[2] - storagePrices[1])}`;

            } else if (upgrades.storage == '512GB Storage') {

                // FINAL PRICE receives 512GB price because it will never positive since there is no higher upgrade option
                finalPriceInteger += priceConvertedToInt;

                // 128GB Storage = `- $300`
                storageList[0].childNodes[3].innerText = `- $${storagePrices[2]}`;

                // 256GB Storage = `- $150`
                storageList[1].childNodes[3].innerText = `- $${storagePrices[2] - storagePrices[1]}`;
            } else {

                // Else if `upgrades.storage` == `128GB Storage`
                finalPriceInteger -= priceConvertedToInt;

                // 256GB Storage = `+ $150` (standard price)
                storageList[1].childNodes[3].innerText = `+ $${storagePrices[1]}`;

                // 512GB Storage = `+ $300` (standard price)
                storageList[2].childNodes[3].innerText = `+ $${storagePrices[2]}`;
            }

            // 'Specs' div (line 75) receives new selected STORAGE option
            productHardware[1].innerHTML = upgrades.storage;
            // Add the 'active' class to the selected box
            item.classList.add('active');
            // Add the 'off' class to the span tag to remove current BOX PRICE
            item.lastElementChild.classList.add('off');

            // FINAL PRICE $$$
            finalPrice.innerText = `${finalPriceInteger}.00`;
            installmentPrice.innerText = `${(finalPriceInteger/12).toFixed(2)}`;
        }
    })
});
