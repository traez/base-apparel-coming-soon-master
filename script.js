/*
Regex confirm email (input holder)
*/

(function(){
    let button = document.querySelector("button");
    let input = document.querySelector("input");
    let exclamation = document.querySelector(".exclamation");
    let feedback = document.querySelector(".feedback");
    let form = document.querySelector("form");

    button.addEventListener("click", () => {
        let email = input.value;
        let emaillc = email.toLowerCase();
        let valid = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        feedback.classList.remove("hide");

        if (input.value === "") {
            exclamation.classList.remove("hide");
            feedback.classList.add("bad");
            feedback.innerText = "Input field empty";
            form.classList.add("badbor");
            input.value = "";
        } else if (emaillc.match(valid)) {
            feedback.classList.add("good");
            feedback.innerText = "Thanks for adding your email";
            form.classList.add("goodbor");
            input.value = "";
        } else {
            exclamation.classList.remove("hide");
            feedback.classList.add("bad");
            feedback.innerText = "Please provide a valid email";
            form.classList.add("badbor");
            input.value = "";
        }
    })
})();