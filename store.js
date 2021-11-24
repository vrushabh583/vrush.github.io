let btn = document.querySelector('button');
let heading = document.querySelector('h1');

function setUserName() {
    let myName = prompt("please enter your name");

    if (!myName) {
        alert("enter name");
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        heading.textContent = "mozilla is cool, " + myName;
    }


}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storeName = localStorage.getItem('name');
    heading.textContent = "mozilla is cool, " + storeName;
}

btn.onclick = function () {
    setUserName();
}