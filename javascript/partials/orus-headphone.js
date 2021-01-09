// ***** GLOBAL CONTENT ***** //
const upgrades = {
    // Base Model
    color: 'White',
};

// Global = Get base model/specs from div 'specs' (line 78) from HTML file
let productHardware = document.querySelectorAll('[data-js="product-upgrades"]');
// ***** END GLOBAL CONTENT ***** //

// =-=-=-= UPGRADE OPTION - COLOR =-=-=-= //
// Get all COLOR boxes
let colorList = document.querySelectorAll('[data-js="colorList"]');
console.log(colorList[1])

colorList.forEach(item => {
    item.addEventListener('click', () => {
        if (item.childNodes[1].innerText != upgrades.color) {

            // Object 'upgrades' receives new COLOR upgrade selected
            upgrades.color = item.childNodes[1].innerText;

            colorList.forEach(function(item) {
                // Removes the 'active' class of all upgrade boxes
                item.classList.remove('active');

                // Removes the 'off' class of all span/data-js='storage-price'
                item.lastElementChild.classList.remove('off');
            });

            // 'Specs' div (line 75) receives new selected STORAGE option
            productHardware[0].innerHTML = upgrades.color;
            // Add the 'active' class to the selected box
            item.classList.add('active');
        }
    })
});