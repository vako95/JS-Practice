const Cliker = document.querySelectorAll(".btn")


Cliker.forEach(button => {
    button.addEventListener('click', function() {
        console.log("hello")
    })
});

