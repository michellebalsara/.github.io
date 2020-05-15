let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/wingstop-god.png') {
      myImage.setAttribute ('src','images/bonelesswings.jpg');
    } else {
      myImage.setAttribute ('src','images/wingstop-god.png');
    }

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Wingstop is delicious, ' + myName;
    }
}
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Wingstop is delicious, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
}
