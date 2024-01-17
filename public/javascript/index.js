window.addEventListener("load", function() {
    let projectsElement = document.getElementById("projects");

    for (let project of projectsElement.children) {
        project.addEventListener("click", function() {
            const url = project.getAttribute("url");
            const newTab = window.open(url, "_blank");
            newTab.focus();
        });
    }
})
