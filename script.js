const bday = document.querySelector("#person-bday");
const button = document.querySelector("#add-button");
const input = document.querySelectorAll(".input");

const today = new Date();
const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
};

function Person(name, birthdate, age){
    this.name = name;
    this.birthdate = birthdate;
    this.age = age;
}

document.getElementById("heading").innerHTML = today.toLocaleDateString("en-US", options);

bday.addEventListener("submit", event =>{
    event.preventDefault();
    console.log("submitted?")
})

button.addEventListener("click", event =>{
    return input.values;
    console.log(input.value);
})

