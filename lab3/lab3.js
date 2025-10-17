document.addEventListener('DOMContentLoaded', function() {
    // Find the form and the table
    const profileForm = document.querySelector('.form-container form');
    const profileTable = document.querySelector('.profile-table tbody');

    // Add an event listener for the form submission
    profileForm.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the values from the form fields
        const firstName = document.getElementById('fname').value;
        const lastName = document.getElementById('lname').value;
        const month = document.getElementById('month').value;
        const day = document.getElementById('day').value;
        const year = document.getElementById('year').value;
        const genderRadio = document.querySelector('input[name="gender"]:checked');

        // --- Validation ---
        if (!firstName || !lastName) {
            alert('First Name and Last Name cannot be empty.');
            return; // Stop the function if validation fails
        }
        
        if (!genderRadio) {
            alert('Please select a gender.');
            return; // Stop the function if validation fails
        }
        
        const dateOfBirth = `${month}/${day}/${year}`;
        const gender = genderRadio.value === 'male' ? 'Male' : 'Female';

        // Create a new row (tr) and cells (td) for the table
        const newRow = document.createElement('tr');

        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = firstName;
        newRow.appendChild(firstNameCell);

        const lastNameCell = document.createElement('td');
        lastNameCell.textContent = lastName;
        newRow.appendChild(lastNameCell);

        const dobCell = document.createElement('td');
        dobCell.textContent = dateOfBirth;
        newRow.appendChild(dobCell);

        const genderCell = document.createElement('td');
        genderCell.textContent = gender;
        newRow.appendChild(genderCell);

        // Add the new row to the table body
        profileTable.appendChild(newRow);

        // Clear the form fields for the next entry
        profileForm.reset();
        document.getElementById('fname').value = '';
        document.getElementById('lname').value = '';
    });
});