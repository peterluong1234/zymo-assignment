// on firstName input field click, set success div display to "none" 
// to reset success message
const firstName = document.getElementById("firstName");
const success = document.getElementById("success");

const resetSuccessMessage = () => {
    success.style.display = "none";
}

firstName.addEventListener("click", resetSuccessMessage);


// handles form submit
function handleSubmit(e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const company = document.getElementById("company").value;
    const role = document.getElementById("role").value;
    const comments = document.getElementById("comments").value;
    const success = document.getElementById("success");
    const form = document.getElementById("contactForm");

    // validation for success
    if (firstName && lastName && company && role && comments) {
        success.style.display = "block";
    }
    
    // reset form upon submission
    form.reset();
}
