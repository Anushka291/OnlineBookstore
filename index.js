function loadContent(page) {
    const contentDiv = document.getElementById("main-content");
    
    if (page === "home") {
        contentDiv.innerHTML = "<h2>Welcome to the Bookstore</h2><p>This is the home page content.</p>";
    } else if (page === "catalogue") {
        contentDiv.innerHTML = "<h2>Book Catalogue</h2><p>Here is a list of books available.</p>";
    } else if (page === "registration") {
        contentDiv.innerHTML = "<h2>Registration</h2><p>Register here to access more features.</p>";
    } else if (page === "login") {
        contentDiv.innerHTML = "<h2>Login</h2><p>Login to your account.</p>";
    } else if (page === "suggestions") {
        contentDiv.innerHTML = "<h2>Suggestions</h2><p>Provide your book recommendations.</p>";
    }
}