var items = document.querySelectorAll('.item');

console.log(items);

items.forEach(item => {
    item.addEventListener("click", function (e) {
        // Remove the 'selectedSection' class from all items and hide all tables
        items.forEach(i => {
            i.classList.remove("selectedSection");
            var nearestTable = i.querySelector('table');
            if (nearestTable) {
                nearestTable.classList.add('d-none');
            }
            // Uncheck radio buttons for all items except the clicked one
            var radioButton = i.querySelector('input[type="radio"]');
            if (radioButton) {
                radioButton.checked = false;
            }
        });

        // Add the 'selectedSection' class to the clicked item
        item.classList.add("selectedSection");
        var radioButton = item.querySelector('input[type="radio"]');
        if (radioButton) {
            radioButton.checked = true;
        }
        
        // Find the nearest table within the clicked item and remove the 'd-none' class
        var nearestTable = item.querySelector('table');
        if (nearestTable) {
            nearestTable.classList.remove('d-none');
            console.log(nearestTable);
        }
    });
});
