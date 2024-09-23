// Replace text by the use of .innerText and .textContent
//.inner text and adding id and styling
function newDay(day){
    const myDay = document.querySelector("h1")
    myDay.innerText = day
    myDay.id = "new header"
    myDay.style.color = "red"
}

newDay("Kris Klein is King");

//.textContent and adding className
function greetings(goodDays){
    const myGreetings = document.querySelector("li")
    myGreetings.textContent = goodDays
    myGreetings.className = goodDays.toLowerCase()
}

greetings("Holy Morning!");

//Add image from the DOM
function addImage(image){
    const newImage = document.querySelector("img");
    newImage.src = image;
}

addImage("https://nairobi.go.ke/wp-content/uploads/Nairobi-City-County-15-2.jpg");

// Use of addEventListener 
document.querySelector("input").addEventListener("mouseover",myInput);

function myInput(){
    console.log("New Owner Detected");
};



document.querySelector("#mainbutton").addEventListener("click", () => alert("I am the New Owner"));

// Delete Event
// function removeButton(e){
//     e.target.remove()
// }

// function deleteEvent(){
//     let buttons = document.getElementsByClassName("btn")
//     for(let btn of buttons){
//         btn.addEventListener("click",removeButton)
//     }
// }

// deleteEvent();

// Form submitting
document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        handleToDo(e.target.new_to_do.value);
        form.reset();
    });
});

function handleToDo(todo) {
    let p = document.createElement('p');
    let btn = document.createElement('button');
    btn.addEventListener("click", (e) => e.target.parentNode.remove());
    btn.textContent = 'x';
    p.textContent = `${todo} `;
    p.appendChild(btn);
    console.log(p);
    document.querySelector("#submitions").appendChild(p);
}
