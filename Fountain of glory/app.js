// ****** select items **********

const form = document.querySelector(".input-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("input");
const submitBtn = document.querySelector(".submit-btn");
// edit option
let editElement;
let editFlag = false;
let editID = "";
// ****** event listeners **********

// submit form
form.addEventListener("submit", addItem);

// addItems
function addItem(e) {
    e.preventDefault();
    const value = input.value;
    const id = new Date().getTime().toString(); 
};
if (value !== "") {
editElement.innerHTML = value;
displayAlert("value changed", "success");
//edit local storage
editLocalStorage(editID, value);
setBackToDefault();
} else {
    displayAlert("please enter value", "danger");
}
//display alert
function displayAlert(text, action){
    alert.textContent = text;
    alert.classList.add(`alert ${action}`);
    //remove alert
    setTimeout(function () {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1000);
};
//set form value
input.value = editElement.innerHTML;
editFlag = true;
editID = element.dataset.id;
//
submitBtn.textContent = "edit";
//set back to defaults
function setBackToDefault() {
    input.value = "";
    editFlag = falseeditID = "";
    submitBtn.textContent = "submit";
};
//add to local storage
function addToLocalStorage(id, value) {
    const input = {id, value};
    let items = getLocalStorage();
    items.push(input);
    localStorage.setItem("list", JSON.stringify(items));
};
function getLocalStorage() {
    return localStorage.getItem("list")
    JSON.parse(localStorage.getItem("list"));
    [];
};
function removeFromLocalStorage(id) {
    let items = getLocalStorage();

    items = items.filter(function (item) {
        if (item.id !== id) {
            return item;
        }
    });
};