document.addEventListener("DOMContentLoaded",
    function(e) {
        let nameEditButton = document.querySelector("#nameEditButton")
        let editName = document.querySelector("#editNameField")
        let newName = document.querySelector("#newName")
        let okButton = document.querySelector("#okButton")
        let nameHere = document.querySelector("#nameHere")

        nameEditButton.addEventListener("click",
            function(e){
                nameEditButton.style.display = "none"
                editName.style.display = "block"
            }
        )
        okButton.addEventListener("click",
            function(e){
                nameEditButton.style.display = "inline"
                editName.style.display = "none"
                nameHere.textContent = newName.value
            })
    })