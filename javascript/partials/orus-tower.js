// ***** GLOBAL CONTENT ***** //
const upgrades = {
    // Base Model
    cpu: 'Ryzen 5 3600x 6-cores/12-threads 3.8Ghz',
    ram: '8GB Ram',
    gpu: 'GTX 1660 Super',
    storage: '512GB SSD'
};

// Global = Get base model/specs from div 'specs' (line 75) from HTML file
let productHardware = document.querySelectorAll('[data-js="product-upgrades"]');

// -=-=-=- Get FINAL PRICE(line 180) $$$ -=-=-=-
// Starting price: $599.00
let finalPrice = document.querySelector('[data-js="final-price"]');
let finalPriceInteger = parseInt(finalPrice.innerText, 10);

// Get installment price(line 181) and convert to FLOAT value
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

            // ALL CPU prices
            const cpuPrices = [300, 300, 600];

             // Convert current CPU selected PRICE to INTEGER
            let priceConvertedToInt = parseInt(item.lastElementChild.innerText.replace( /^\D+/g, ''), 10);

            cpuList.forEach(function(item2) {
                // Removes the 'active' class of all upgrade boxes 
                item2.classList.remove('active');
                // Removes the 'off' class of all span/data-js='cpu-price'
                item2.lastElementChild.classList.remove('off');
            });

            // The code below is to adjust the FINAL PRICE according to price selected
            if (upgrades.cpu == 'Ryzen 7 3700x 8-cores/16-threads 3.5Ghz') {

                    // If Ryzen 7 price is negative then decrease final value
                    if (cpuList[1].childNodes[3].innerText[0] == '-') {
                        finalPriceInteger -= priceConvertedToInt;
                    } else {
                        finalPriceInteger += priceConvertedToInt;
                    }
                    
                    // Ryzen 5 = `- $300`
                    cpuList[0].childNodes[3].innerText = `- $${cpuPrices[1]}`;

                    // Ryzen 9 = `+ $300`
                    cpuList[2].childNodes[3].innerText = `+ $${Math.abs(cpuPrices[2] - cpuPrices[1])}`;

            } else if (upgrades.cpu == 'Ryzen 9 3900x 12-cores/24-threads 3.8Ghz') {

                    // FINAL PRICE receives Ryzen 9 price because it will never be positive since there is no higher upgrade option
                    finalPriceInteger += priceConvertedToInt;

                    // Ryzen 5 = `- $600`
                    cpuList[0].childNodes[3].innerText = `- $${cpuPrices[2]}`

                    // Ryzen 7 = `- $300`
                    cpuList[1].childNodes[3].innerText = `- $${cpuPrices[2] - cpuPrices[1]}`;
            } else {
                    // Else if `upgrades.cpu` == `Ryzen 5 3600x 6-cores/12-threads 3.8Ghz`
                    finalPriceInteger -= priceConvertedToInt;
                    
                    // Ryzen 7 = `+ $300`
                    cpuList[1].childNodes[3].innerText = `+ $${cpuPrices[1]}`

                    // Ryzen 9 = `+ $600`
                    cpuList[2].childNodes[3].innerText = `+ $${cpuPrices[2]}`
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
});

// =-=-=-= UPGRADE OPTION 2 - RAM MEMORY =-=-=-= //
// Get all RAM MEMORY boxes
let RAMList = document.querySelectorAll('[data-js="RAMList"]');

// **** RAM MEMORY selection when user chooses an option ***
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

                    // Removes the 'off' class of all span/data-js='RAMList'
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
 });

 // =-=-=-= UPGRADE OPTION 3 - GRAPHICS/GPU =-=-=-= //
// Get all GPU/GRAPHICS CARD boxes
let GPUList = document.querySelectorAll('[data-js="GPUList"]');

// **** GPU UPGRADE selection when user chooses an option ***
GPUList.forEach(item => {
    item.addEventListener('click', () => {
        if (item.childNodes[1].innerText != upgrades.gpu) {

            // Object 'upgrades' receives new GPU upgrade selected
            upgrades.gpu = item.childNodes[1].innerText;

            // All GPU Memory prices
            const gpuPrices = [250, 250, 500];

            // Convert current GPU selected PRICE to INTEGER
            let priceConvertedToInt = parseInt(item.lastElementChild.innerText.replace(/^\D+/g, ''), 10);

            GPUList.forEach(function(item2) {
                // Removes the 'active' class of all upgrade boxes
                item2.classList.remove('active');
                // Removes the 'off' class of all span/data-js='GPUList'
                item2.lastElementChild.classList.remove('off');
            })

            // The code below is to adjust the FINAL PRICE according to price selected
            if (upgrades.gpu == 'RTX 2060 Super') {

                if (GPUList[1].childNodes[3].innerText[0] == '-') {
                    finalPriceInteger -= priceConvertedToInt;
                } else {
                    finalPriceInteger += priceConvertedToInt;
                }

                // GTX 1660 SUPER = `- $250`
                GPUList[0].childNodes[3].innerText = `- $${gpuPrices[1]}`;

                // RTX 2080 TI = `+ $250 = (RTX 2080 TI(250) - GTX 1660 Super(250))`
                GPUList[2].childNodes[3].innerText = `+ $${Math.abs(gpuPrices[2] - gpuPrices[1])}`;

            } else if (upgrades.gpu == 'RTX 2080 TI') {

                // FINAL PRICE receives RTX 2080 TI price because it will never be positive since there is no higher upgrade option
                finalPriceInteger += priceConvertedToInt;

                    // GTX 1660 Super = `- $500`
                    GPUList[0].childNodes[3].innerText = `- $${gpuPrices[2]}`

                    // RTX 2060 Super = `- $250`
                    GPUList[1].childNodes[3].innerText = `- $${gpuPrices[2] - gpuPrices[1]}`;
            } else {

                // else if `upgrades.ram` == `8 GB DDR4 Memory`
                finalPriceInteger -= priceConvertedToInt;
                    
                    // RTX 2060 Super = `+ $250 (standard price)`
                    GPUList[1].childNodes[3].innerText = `+ $${gpuPrices[1]}`;

                    // RTX 2080 TI = `+ $500 (standard price)`
                    GPUList[2].childNodes[3].innerText = `+ $${gpuPrices[2]}`;
            };

                // 'Specs' div (line 75) receives new selected RAM Memory
                productHardware[2].innerHTML = upgrades.gpu;
                // Add the 'active' class to the selected box
                item.classList.add('active');
                // Add the 'off' class to the span tag to remove current box price
                item.lastElementChild.classList.add('off');

                // FINAL PRICE $$$
                finalPrice.innerText = `${finalPriceInteger}.00`;
                installmentPrice.innerText = `${(finalPriceInteger/12).toFixed(2)}`;
        }
     })
});

 // =-=-=-= UPGRADE OPTION 4 - STORAGE =-=-=-= //
// Get all STORAGE CARD boxes
let SSDList = document.querySelectorAll('[data-js="SSDList"]');

// **** STORAGE UPGRADE selection when user chooses an option ****
 SSDList.forEach(item => {
     item.addEventListener('click', () => {
         if (item.childNodes[1].innerText != upgrades.storage) {

            // Object 'upgrades' receives new STORAGE upgrade selected
            upgrades.storage = item.childNodes[1].innerText;

            // All STORAGE prices
            const SSDPrices = [150, 150, 300];

            // Convert current STORAGE selected PRICE to INTEGER
            let priceConvertedToInt = parseInt(item.lastElementChild.innerText.replace(/^\D+/g, ''), 10);

            SSDList.forEach(function(item2) {
                // Removes the 'active' class of all upgrade boxes
                item2.classList.remove('active');
                // Removes the 'off' class of all span/data-js='SSDList'
                item2.lastElementChild.classList.remove('off');
            });

            // The code below is to adjust the FINAL PRICE according to price selected
            if (upgrades.storage == '1TB SSD') {

                if (SSDList[1].childNodes[3].innerText[0] == '-') {
                    finalPriceInteger -= priceConvertedToInt;
                } else {
                    finalPriceInteger += priceConvertedToInt;
                }

                // 512GB SSD = `- $150`
                SSDList[0].childNodes[3].innerText = `- $${SSDPrices[1]}`;

                // 2TB = `+ $150` = (2TB SSD ($300) - 1TB ($150))`
                SSDList[2].childNodes[3].innerText = `+ $${Math.abs(SSDPrices[2] - SSDPrices[1])}`;

            } else if (upgrades.storage == '2TB SSD') {

            // FINAL PRICE receives 2TB SSD price because it will never be positive since there is no higher upgrade option
                finalPriceInteger += priceConvertedToInt;

                // 512GB SSD = `- $300`;
                SSDList[0].childNodes[3].innerText = `- $${SSDPrices[2]}`

                // 1TB SSD = `- $150`
                SSDList[1].childNodes[3].innerText = `- $${SSDPrices[2] - SSDPrices[1]}`;
            } else {

                // else if `upgrades.storage` == `512GB SSD`
                finalPriceInteger -= priceConvertedToInt;
                    
                // 1TB SSD = `+ $150 (standard price)`
                SSDList[1].childNodes[3].innerText = `+ $${SSDPrices[1]}`;

                // 2TB SSD = `+ $300 (standard price)`
                SSDList[2].childNodes[3].innerText = `+ $${SSDPrices[2]}`;
            };

            // 'Specs' div (line 75) receives new selected RAM Memory
            productHardware[3].innerHTML = upgrades.storage;
            // Add the 'active' class to the selected box
            item.classList.add('active');
            // Add the 'off' class to the span tag to remove current box price
            item.lastElementChild.classList.add('off');

            // FINAL PRICE $$$
            finalPrice.innerText = `${finalPriceInteger}.00`;
            installmentPrice.innerText = `${(finalPriceInteger/12).toFixed(2)}`;
         }
      });
 });