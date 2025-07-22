var inputFieldEl = document.getElementById ("inputfieldentry");
var inputButtonEl = document.querySelector(".theButton");
var ulEl = document.querySelector(".listoftodo");
var ulListEl = document.querySelector (".ullist");
var ulButtonEl = document.querySelector(".optionbutton");
var addUlEl = document.querySelectorAll("listoftodo")
var liEl = document.querySelectorAll(".todoli");

inputButtonEl.addEventListener ("click", function(){
    var inputFieldValue = inputFieldEl.value.trim();

    if (inputFieldValue === "") {
        return;
    }

    var addUlEl = document.createElement("ul")
    addUlEl.className = "listoftodo"
    ulListEl.appendChild(addUlEl);

    var liEl = document.createElement("li")
    liEl.className = "todoli"
    addUlEl.appendChild(liEl)
    liEl.textContent = inputFieldValue;

    var addButtonEl = document.createElement("button")
    addButtonEl.className = "toggleMenu"
    addUlEl.appendChild(addButtonEl);
    addButtonEl.textContent = "...";

    var addDivEl = document.createElement("div")
    addDivEl.className = "displayMenu"
    addButtonEl.appendChild(addDivEl)

    var addButton2El = document.createElement("button")
    addButton2El.className = "displaybutton"
    addDivEl.appendChild(addButton2El);
    addButton2El.textContent = "Delete";

addButtonEl.addEventListener("click", function (){
    if (addDivEl.style.display === "none") {
        addDivEl.style.display = "block";
    }
    else 
    addDivEl.style.display = "none";
});

    inputFieldEl.value = "";

    addButton2El.addEventListener("click", function(){
        addUlEl.remove();
    });

});
