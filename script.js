//your JS code here. If required.
const removeButton = document.getElementById('removeButton');
        const colorSelect = document.getElementById('colorSelect');

        removeButton.addEventListener('click', function() {
            const selectedIndex = colorSelect.selectedIndex;
            if (selectedIndex !== -1) { // Check if an option is selected
                colorSelect.remove(selectedIndex); // Remove the selected option
            }
        });

