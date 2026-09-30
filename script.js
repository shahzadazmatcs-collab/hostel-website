function bookRoom(roomName) {

    alert("You selected: " + roomName);

    const name = prompt("Please enter your name:");

    if (!name) {
        return;
    }

    const phone = prompt("Please enter your phone number:");

    if (!phone) {
        return;
    }

    alert(
        "Booking Request\n\n" +
        "Name: " + name + "\n" +
        "Phone: " + phone + "\n" +
        "Room: " + roomName + "\n\n" +
        "Thank you! We will contact you soon."
    );
}
 // ========================================
// CONTACT FORM
// ========================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        // Prevent the page from refreshing
        event.preventDefault();

        // Get form information
        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const message =
            document.getElementById("message").value.trim();


        // Check that everything is filled
        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            message === ""
        ) {

            alert(
                "Please fill in all the fields."
            );

            return;
        }


        // Show success message
        alert(
            "Thank you, " +
            name +
            "!\n\n" +
            "Your message has been submitted successfully.\n\n" +
            "We will contact you soon."
        );


        // Clear the form
        contactForm.reset();

    });
}


// ========================================
// WELCOME MESSAGE
// ========================================

window.addEventListener("load", function() {

    console.log(
        "Welcome to My Hostel website!"
    );

});