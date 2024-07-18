// Function to toggle visibility of elements
function hide(checkbox) {
    var targetId = checkbox.getAttribute('data-target');
    var targetElement = document.getElementById(targetId);

    var imgslotID = checkbox.getAttribute('data-img');
    var imgslot = document.getElementById(imgslotID)

    if (targetElement.classList.contains('hidden')) {
        targetElement.classList.remove('hidden');
    } else {
        targetElement.classList.add('hidden');
    }

    if (imgslot.classList.contains('hidden')){
        imgslot.classList.remove('hidden');
    }
    else{
        imgslot.classList.add('hidden')
    }
}

// Function to select/deselect all checkboxes in a group
function selectAll(groupClass, selectAllCheckbox) {
    const checkboxes = document.querySelectorAll('.' + groupClass);
    
    checkboxes.forEach(checkbox => {
        checkbox.checked = selectAllCheckbox.checked;
    });

    if(selectAllCheckbox.checked){
        checkboxes.forEach(checkbox => {
            var targetId = checkbox.getAttribute('data-target');
            var targetElement = document.getElementById(targetId);
            targetElement.classList.remove('hidden');
        })
    }
    else{
        checkboxes.forEach(checkbox => {
            var targetId = checkbox.getAttribute('data-target');
            var targetElement = document.getElementById(targetId);
            targetElement.classList.add('hidden');
        })
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            if (!checkbox.checked) {
                selectAllCheckbox.checked = false;
            } else if (Array.from(checkboxes).every(cb => cb.checked)) {
                selectAllCheckbox.checked = true;
            }
        });
    });
}
