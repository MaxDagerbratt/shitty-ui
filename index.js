

const nameInput = document.getElementById('name')

nameInput.addEventListener('input', updateValue);
// nameInput.addEventListener('change', onChange);

/* function onChange(){
    nameInput.value = ''
    alert('Please insert your name')
} */

function updateValue(e) {
    nameInput.setSelectionRange(0, 0)
    nameInput.focus()
    nameInput.value = e.target.value
}


const phoneSelect = document.getElementById('phone')

function randomNumbers() {
    return [1,2,3,4,5,6,7,8,9,0].sort(() => Math.random() < 0.5 ? 1 : -1)
}
phoneSelect.innerHTML = randomNumbers().map(num => `<option value="${num}">${num}</option>`).join('')


phoneSelect.addEventListener('change', (e) => {
    const phoneNumberElement = document.getElementById('phoneNumber')
    phoneNumberElement.innerText+= e.target.value
    
})

const slider = document.getElementById('slider')

slider.addEventListener('input', (e) => {
    const value = e.target.valueAsNumber
    document.getElementById('age').innerText = Math.round(10**value)
})


slider.addEventListener('blur', (e) => {
    let value = document.getElementById('age').innerText

    value = parseFloat(value) - 1
    document.getElementById('age').innerText = value
})


const button = document.getElementById('button')

function onClick() {

    const name = document.getElementById('name').value
    const phone = document.getElementById('phoneNumber').innerText
    const age = document.getElementById('age').innerText

    alert(`Hello ${name}, your phone number is ${phone} and you are ${age} years old`)
}


function move(e) {
    var position = $(e).position();
    
    var width = $(".container").width();
    var height = $(".container").height();
  
  width = width - (width * 0.04);
  height = height - (height * 0.1);
    
    var newPos = new function() {
      this.left;
      this.top;
    };
  
    newPos.left = chooseSide(position.left, width);
    newPos.top = chooseSide(position.top, height);
    $(e).animate({
      "top": newPos.top + "px",
      "left": newPos.left + "px"
    }, 500);
  }
  
  function chooseSide(pos, size) {
    do {
      var random = (Math.random() * size);
    } while ((Math.abs(pos - random)) <= (size * 0.1));
  
    return random;
  }