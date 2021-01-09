// ***** GLOBAL CONTENT ***** //
const upgrades = {
    // Base Model
    cpu: 'Ryzen 5 4600H 6-cores/12-threads 3.0Ghz',
    ram: '8GB Ram',
    storage: '512GB SSD'
};

// Global = Get base model/specs from div 'specs' (line 75) from HTML file
let productHardware = document.querySelectorAll('[data-js="product-upgrades"]');
// ***** GLOBAL CONTENT ***** //

// -=-=-=- Get FINAL PRICE(line 180) $$$ -=-=-=-
// Starting price: $999.00
let finalPrice = document.querySelector('[data-js="final-price"]');
let finalPriceInteger = parseInt(finalPrice.innerText, 10);

// Get installment price(line 150) and convert to FLOAT value
let installmentPrice = document.querySelector('[data-js="installments-price"]');

// ***** END GLOBAL CONTENT ***** //

// =-=-=-= UPGRADE OPTION 1 - CPU/PROCESSOR =-=-=-= //
// Get all CPU/PROCESSOR boxes
let cpuList = document.querySelectorAll('[data-js="cpuList"]');

// **** CPU UPGRADE selection when user chooses an option ****
cpuList.forEach(item => {
    item.addEventListener('click', () => {
        if (item.childNodes[1].innerText != upgrades.cpu) {

            // Object 'upgrades' receives new cpu upgrade selected
            upgrades.cpu = item.childNodes[1].innerText;

            // All CPU Prices
            const cpuPrices = 300;

            // Convert current CPU selected PRICE to INTEGER
            let priceConvertedToInt = parseInt(item.lastElementChild.innerText.replace(/^\D+/g, ''), 10);

            cpuList.forEach(function(item2) {
                // Removes the 'active' class of all upgrade boxes
                item2.classList.remove('active');
                // Removes the 'off' class of all span/data-js='cpu-price'
                item2.lastElementChild.classList.remove('off');
            })

            if (upgrades.cpu == 'Ryzen 7 4800H 8-cores/16-threads 2.9Ghz') {
                
                finalPriceInteger += priceConvertedToInt;

                // Ryzen 5 = '- $300'
                cpuList[0].childNodes[3].innerText = `- $${cpuPrices}`;
            } else {

                finalPriceInteger -= priceConvertedToInt;

                // Ryzen 7 = '+ $300'
                cpuList[0].childNodes[3].innerText = `+ $${cpuPrices}`;
            }

            // 'Specs' div (line 75) receives new selected CPU/PROCESSOR
            productHardware[0].innerHTML = upgrades.cpu;
            // Add the 'active' class to the selected box
            item.classList.add('active');
            // Add the 'off' class to the span tag to remove current box price
            item.lastElementChild.classList.add('off');

            // FINAL PRICE $$$
            finalPrice.innerText = `${finalPriceInteger}.00`;
            installmentPrice.innerText = `${(finalPriceInteger/12).toFixed(2)}`;
        }
    })
})

// =-=-=-= UPGRADE OPTION 2 - RAM MEMORY =-=-=-= //
// Get all RAM MEMORY boxes
let RAMList = document.querySelectorAll('[data-js="RAMList"]');

// **** RAM MEMORY upgrade selection when user chooses an option ****
RAMList.forEach(item => {
    item.addEventListener('click', () => {
        if (item.childNodes[1].innerText != upgrades.ram) {
        
            // Object 'upgrades' receives new RAM upgrade selected
            upgrades.ram = item.childNodes[1].innerText;

            // All RAM Memory prices
            const ramPrices = [100, 100, 200];

            // Convert current RAM selected PRICE to INTEGER
            let priceConvertedToInt = parseInt(item.lastElementChild.innerText.replace(/^\D+/g, ''), 10);

            RAMList.forEach(function(item2) {
                // Removes the 'active' class of all upgrade boxes
                item2.classList.remove('active');
                // Removes the 'off' class of all span/data-js="RAMList"
                item2.lastElementChild.classList.remove('off');
            })

            // The code below is to adjust the FINAL PRICE according to price selected
            if (upgrades.ram == '16 GB DDR4 Memory') {

                    if (RAMList[1].childNodes[3].innerText[0] == '-') {
                        finalPriceInteger -= priceConvertedToInt;
                    } else {
                        finalPriceInteger += priceConvertedToInt;
                    }

                    // 8GB Memory = `-$100`
                    RAMList[0].childNodes[3].innerText = `- $${ramPrices[1]}`;

                    // 32GB Memory = `+ $100`
                    RAMList[2].childNodes[3].innerText = `+ $${Math.abs(ramPrices[2] - ramPrices[1])}`;
                } else if (upgrades.ram == '32 GB DDR4 Memory') {

                    // FINAL PRICE receives 32GB Memory price because it will never be positive since there is no higher upgrade option
                    finalPriceInteger += priceConvertedToInt;

                    // 8GB Memory = `- $200`
                    RAMList[0].childNodes[3].innerText = `- $${ramPrices[2]}`

                    // 16GB Memory = `- $100`
                    RAMList[1].childNodes[3].innerText = `- $${ramPrices[2] - ramPrices[1]}`;
                } else {

                    // else if `upgrades.ram` == `8 GB DDR4 Memory`
                    finalPriceInteger -= priceConvertedToInt;
                    
                    // 16GB Memory = `+ $100`
                    RAMList[1].childNodes[3].innerText = `+ $${ramPrices[1]}`;

                    // 32GB Memory = `+ $200`
                    RAMList[2].childNodes[3].innerText = `+ $${ramPrices[2]}`;
                };

                // 'Specs' div (line 75) receives new selected RAM Memory
                productHardware[1].innerHTML = upgrades.ram;
                // Add the 'active' class to the selected box
                item.classList.add('active');
                // Add the 'off' class to the span tag to remove current box price
                item.lastElementChild.classList.add('off');

                // FINAL PRICE $$$
                finalPrice.innerText = `${finalPriceInteger}.00`;
                installmentPrice.innerText = `${(finalPriceInteger/12).toFixed(2)}`;
        }
    })
})

 // =-=-=-= UPGRADE OPTION 3 - STORAGE =-=-=-= //
// Get all STORAGE CARD boxes
let SSDList = document.querySelectorAll('[data-js="SSDList"]');

// **** STORAGE UPGRADE selection when user chooses an option ****
SSDList.forEach(item => {
    item.addEventListener('click', () => {
        if (item.childNodes[1].innerText != upgrades.storage) {

            // Object 'upgrades' receives new STORAGE upgrade selected
            upgrades.storage = item.childNodes[1].innerText;

            // All STORAGE prices
            const SSDPrices = 150;

            // Convert current STORAGE selected PRICE to INTEGER
            let priceConvertedToInt = parseInt(item.lastElementChild.innerText.replace(/^\D+/g, ''), 10);

            SSDList.forEach(function(item2) {
                // Removes the 'active' class of all upgrade boxes
                item2.classList.remove('active');
                // Removes the 'off' class of all span/data-js="SSDList"
                item2.lastElementChild.classList.remove('off');
            });

            if (upgrades.storage == '1TB SSD') {
                
                finalPriceInteger += priceConvertedToInt;

                // 512GB= '- $150'
                SSDList[0].childNodes[3].innerText = `- $${SSDPrices}`;
            } else {

                finalPriceInteger -= priceConvertedToInt;

                // 1TB = '+ $150'
                SSDList[0].childNodes[3].innerText = `+ $${SSDPrices}`;
            }

            // 'Specs' div (line 75) receives new selected STORAGE option
            productHardware[2].innerText = upgrades.storage;
            // Add the 'active' class to the selected box
            item.classList.add('active');
            // Add the 'off' class to the span tag to remove current box price
            item.lastElementChild.classList.add('off');

            // FINAL PRICE $$$
            finalPrice.innerText = `${finalPriceInteger}.00`;
            installmentPrice.innerText = `${(finalPriceInteger/12).toFixed(2)}`;
        }
    })
})