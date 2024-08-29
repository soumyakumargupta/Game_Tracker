document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log("Feedback submitted:", { name, email, message });
    
    this.reset();
    alert("Thank you for your feedback!");
});