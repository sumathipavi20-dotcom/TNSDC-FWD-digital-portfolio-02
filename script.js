// Form Submit Handling

document.getElementById("contactForm").addEventListener("submit", function(e) {

    e.preventDefault(); // prevent page refresh

    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let message = document.getElementById("message").value.trim();

    if(name && email && message) {

        document.getElementById("successMsg").classList.remove("hidden");

        document.getElementById("contactForm").reset();

    } else {

        alert("⚠️ Please fill out all fields!");

    }

});