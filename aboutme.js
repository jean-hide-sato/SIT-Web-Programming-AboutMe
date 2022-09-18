function myFunction() {
    if (confirm("This will take you out from this page. Are you sure you want to continue?")) {
        window.location = "https://br.linkedin.com/in/jean-hideyuki-sato/";
    }
    else {
        window.preventDefault();
    }
}