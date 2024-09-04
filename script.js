document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const submitButton = document.querySelector("button[type='submit']");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default form submission

        const feel = document.querySelector("input[name='feel']:checked");
        const taught = document.querySelector("input[name='taught']:checked");
        const explained = document.querySelector("input[name='explained']:checked");
        const heard = document.getElementById("heard").value.trim();
        const improve = document.getElementById("improve").value.trim();
        const rating = document.querySelector("input[name='rating']:checked");
        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();

        if (!feel || !taught || !explained || !rating) {
            alert("Please fill in all required fields.");
            return;
        }
        if (email && !validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Optionally, add more form validations here (e.g., phone format validation)

        // Here you can handle the form data as needed (e.g., send to a server)
        console.log({
            feel: feel.value,
            taught: taught.value,
            explained: explained.value,
            heard: heard,
            improve: improve,
            rating: rating.value,
            name: name,
            phone: phone,
            email: email
        });

        alert("Form submitted successfully!");
        form.reset(); // Clear the form after submission
    });
});
