const bday = document.querySelector("#person-bday");
const button = document.querySelector("#add-button");
const input = document.querySelectorAll(".input");

//Data structures
class Person {
    constructor(name, birthddate, age) {
        this.name = name;
        this.birthdate = birthddate;
        this.age = age; 
    }
}

let birthdaysArr = [];

//UI for form
const today = new Date();
const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
};


//UI for current data 
document.querySelector("#date").innerHTML = `Today is ${today.toLocaleDateString("en-US", options)}`;


const addToCard = (i) => {
    let bdayCard = document.createElement('div');
    bdayCard.classList.add('cardd');
    bdayCard.setAttribute('data-index', `${i}`);

    const name = document.getElementById("name").value;
    let nameNode = document.createElement('h3');
    nameNode.textContent = `${name}`

    const birthdate = document.getElementById(bdate).value;
    let bdayNote = document.createElement('h2')
    bdayNote.textContent = `${birthdate}`

}
