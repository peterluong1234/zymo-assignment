function handleSubmit(e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const company = document.getElementById("company").value;
    const role = document.getElementById("role").value;
    const comments = document.getElementById("comments").value;
    const success = document.getElementById("success");

    const formValues = {
        firstName: firstName,
        lastName: lastName,
        company: company,
        role: role,
        comments: comments,
    }
    console.log(formValues)

    // validation for success
    if (firstName && lastName && company && role && comments) {
        success.style.display = "block";
    }

}