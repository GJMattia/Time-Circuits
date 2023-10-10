//Defines Destination Time Input Field
let destinationMonth = document.getElementById('destinationMonth');
let destinationDay = document.getElementById('destinationDay');
let destinationYear = document.getElementById('destinationYear');
let destinationHour = document.getElementById('destinationHour');
let destinationMin = document.getElementById('destinationMin');

//Defines Present Time Input Field
let presentMonth = document.getElementById('presentMonth');
let presentDay = document.getElementById('presentDay');
let presentYear = document.getElementById('presentYear');
let presentHour = document.getElementById('presentHour');
let presentMin = document.getElementById('presentMin');

//Defines Previous Time Input Field
let previousMonth = document.getElementById('previousMonth');
let previousDay = document.getElementById('previousDay');
let previousYear = document.getElementById('previousYear');
let previousHour = document.getElementById('previousHour');
let previousMin = document.getElementById('previousMin');

//AM AND PM SWITCH
let amPresent = document.getElementById('amPresent');
let pmPresent = document.getElementById('pmPresent');
let amPrevious = document.getElementById('amPrevious');
let pmPrevious = document.getElementById('pmPrevious')

//Changes the month to letters
const monthNames = [
  "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
];

let presentPM = false;

//This function updates the present time
function updatePresentTime() {
  // Defines Current Date
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const day = currentDate.getDate();
  const hour = currentDate.getHours();
  const min = currentDate.getMinutes();
  const sec = currentDate.getSeconds();

  // Changes the hour to 12-hour cycle
  let formatHour = (hour % 12 || 12).toString().padStart(2, '0');
  let formatMin = min.toString().padStart(2, '0');
  let formatDay = day.toString().padStart(2, '0');

  presentMonth.innerHTML = monthNames[month];
  presentDay.innerHTML = formatDay;
  presentYear.innerHTML = year;
  presentHour.innerHTML = formatHour;
  presentMin.innerHTML = formatMin;

  if (formatHour || 12) {
    pmPresent.classList.add("pmPresent");
    presentPM = true;
  } else {
    amPresent.classList.add("amPresent");
  }
}

//  All of these functions will produce a random element in the prevous time section
function getRandomDay() {
  let randomDay = Math.floor(Math.random() * 31) + 1;
  let formatPreviousDay = randomDay.toString().padStart(2, '0');
  previousDay.innerHTML = formatPreviousDay;
}

function getRandomYear() {
  let randomYear = Math.floor(Math.random() * 3000);
  let formattedYear = randomYear.toString().padStart(4, '0');
  previousYear.innerHTML = formattedYear;
}

function getRandomHour() {
  let randomHour = Math.floor(Math.random() * 12) + 1;
  let formattedHour = randomHour.toString().padStart(2, '0');
  previousHour.innerHTML = formattedHour;
}

function getRandomMin() {
  let randomMin = Math.floor(Math.random() * 60);
  let formattedMin = randomMin.toString().padStart(2, '0');
  previousMin.innerHTML = formattedMin;
}

function getRandomAMPM() {
  let randomNum = Math.floor(Math.random() * 2);
  if (randomNum % 2 === 0) {
    pmPrevious.classList.add("pmPrevious")
  } else {
    amPrevious.classList.add("amPrevious")

  }
}

function lastTimeDeparted() {
  previousMonth.innerHTML = 'JUL';
  getRandomDay();
  getRandomYear();
  getRandomHour();
  getRandomMin();
  getRandomAMPM();
}
//  PLACEHOLDER DESTINATION TIME

function destinationTime() {
  //Update Destination Time
  destinationMonth.innerHTML = 'JAN';
  destinationDay.innerHTML = '01';
  destinationYear.innerHTML = '0000';
  destinationHour.innerHTML = '12';
  destinationMin.innerHTML = '00';
}

//This function clears all of the fields in the time circuit box

function clearCircuits() {
  destinationMonth.innerHTML = '';
  destinationDay.innerHTML = '';
  destinationYear.innerHTML = '';
  destinationHour.innerHTML = '';
  destinationMin.innerHTML = '';
  pmDestination.classList.remove("pmDestination");
  amDestination.classList.remove("amDestination");
  presentMonth.innerHTML = '';
  presentDay.innerHTML = '';
  presentYear.innerHTML = '';
  presentHour.innerHTML = '';
  presentMin.innerHTML = '';
  pmPresent.classList.remove("pmPresent");
  amPresent.classList.remove("amPresent");
  previousMonth.innerHTML = '';
  previousDay.innerHTML = '';
  previousYear.innerHTML = '';
  previousHour.innerHTML = '';
  previousMin.innerHTML = '';
  pmPrevious.classList.remove("pmPrevious");
  amPrevious.classList.remove("amPrevious");
}

//Keypad Definitions

const screenDisplay = document.querySelector('.pad')
const buttons = document.querySelectorAll('#button')

function enterDestination(button) {
  if (isLeverUp === false) {
    return;
  }

  let value = button.textContent;
  if (value === '#') {
    return;
  }
  if (value === "C") {
    value = '';
    selectedElement.textContent = '';
    return;
  }

  if (selectedElement) {
    if (
      (selectedElement === destinationMonth && selectedElement.textContent.length >= 2) ||
      (selectedElement === destinationDay && selectedElement.textContent.length >= 2) ||
      (selectedElement === destinationYear && selectedElement.textContent.length >= 4) ||
      (selectedElement === destinationHour && selectedElement.textContent.length >= 2) ||
      (selectedElement === destinationMin && selectedElement.textContent.length >= 2)
    ) {
      return;
    }
    selectedElement.textContent += value;
  }
}


let selectedElement = null;

destinationMonth.addEventListener('click', () => {
  selectedElement = destinationMonth;
});

destinationDay.addEventListener('click', () => {
  selectedElement = destinationDay;
});

destinationYear.addEventListener('click', () => {
  selectedElement = destinationYear;
});

destinationHour.addEventListener('click', () => {
  selectedElement = destinationHour;
});

destinationMin.addEventListener('click', () => {
  selectedElement = destinationMin;
});
buttons.forEach(button => button.addEventListener('click', () => enterDestination(button)));

// AM and PM destination

let amDestination = document.getElementById('amDestination');
let pmDestination = document.getElementById('pmDestination');


amDestination.addEventListener('click', () => {
  if (isLeverUp == false) {
    return;
  } else
    amDestination.classList.add("amDestination");
  pmDestination.classList.remove("pmDestination");
});

pmDestination.addEventListener('click', () => {
  if (isLeverUp == false) {
    return;
  } else
    pmDestination.classList.add("pmDestination");
  amDestination.classList.remove("amDestination");
})

//Going back in time function

function timeTravel() {
  // Update Previous Time
  previousMonth.innerHTML = presentMonth.innerHTML;
  previousDay.innerHTML = presentDay.innerHTML;
  previousYear.innerHTML = presentYear.innerHTML;
  previousHour.innerHTML = presentHour.innerHTML;
  previousMin.innerHTML = presentMin.innerHTML;
  pmPrevious.classList.remove("pmPrevious");
  amPrevious.classList.remove("amPrevious");

  if (presentPM == true) {
    pmPrevious.classList.add("pmPrevious");
  } else {
    amPrevious.classList.add("amPrevious");
  }

  // Update Present Time
  presentMonth.innerHTML = destinationMonth.innerHTML;
  presentDay.innerHTML = destinationDay.innerHTML;
  presentYear.innerHTML = destinationYear.innerHTML;
  presentHour.innerHTML = destinationHour.innerHTML;
  presentMin.innerHTML = destinationMin.innerHTML;
}

//Gas pedal and Spedometer
let speed = document.getElementById('speed');
let pedal = document.getElementById('pedal');

let mph = 0;
let currentMph = null;

function increaseSpeed() {
  mph++;
  speed.textContent = mph;

  if (mph >= 88) {
    clearInterval(currentMph);
    if (trip === true) {
      timetravel.play();
      timeTravel();
      trip = false;
      pLightEmpty();
      plight.classList.remove('plightfull');
      pointer.classList.remove("pointerfull");

    }

  }
}

function decreaseSpeed() {
  mph--;
  speed.textContent = mph;

  if (mph <= 0) {
    clearInterval(currentMph);
  }
}

pedal.addEventListener('mousedown', function () {
  currentMph = setInterval(increaseSpeed, 50);
});

pedal.addEventListener('mouseup', function () {
  clearInterval(currentMph);
  currentMph = setInterval(decreaseSpeed, 50);
});

//Keypad

buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    const sound = button.dataset.sound;
    playSound(sound);
  });
});

function playSound(soundFile) {
  const audio = new Audio(soundFile);
  audio.volume = 0.2;
  audio.play();
}

//  Time Circuits Lever

let lever = document.getElementById('lever');
let isLeverUp = false;

function timeCircuits() {
  if (isLeverUp) {
    lever.src = "images/down.png";
    lever.classList.remove("lever-up");
    lever.classList.add("lever-down");
    stopp.classList.remove("timeoff");
    go.classList.remove("timeon");
    isLeverUp = false;
    circuitsOff.play();
    keypadLightsOff();
    clearCircuits();
    destiny.innerHTML = '';
    plight.classList.remove('plightempty');
    plight.classList.remove("plightfull");

  } else {
    lever.src = "images/up.png";
    lever.classList.remove("lever-down");
    lever.classList.add("lever-up");
    go.classList.add("timeon");
    stopp.classList.add("timeoff");
    keypadLightsOn();
    isLeverUp = true;
    circuitsOn.play();
    lastTimeDeparted();
    updatePresentTime();
    destinationTime();
    pLightEmpty();
  }
}

lever.addEventListener('click', timeCircuits);

//  Destination Confirm Button

function destinationCheck() {
  circuitConfirm.play();
  let daycheck = destinationDay.innerHTML;
  let hourcheck = destinationHour.innerHTML;
  let mincheck = destinationMin.innerHTML;
  let yearcheck = destinationYear.innerHTML;
  let monthcheck = destinationMonth.innerHTML;

  const selectedIndex = parseInt(monthcheck) - 1;
  if (selectedIndex >= 0 && selectedIndex < monthNames.length) {
    destinationMonth.innerHTML = monthNames[selectedIndex];
  }
  else if (monthcheck > 12) {
    destinationMonth.innerHTML = 'JAN'
  };

  destinationYear.innerHTML = yearcheck.toString().padStart(4, '0');

  if (parseInt(daycheck) > 31) {
    destinationDay.innerHTML = '25';
  } else {
    destinationDay.innerHTML = daycheck.toString().padStart(2, '0');

  }

  if (parseInt(hourcheck) > 60) {
    destinationHour.innerHTML = '12';
  } else {
    destinationHour.innerHTML = hourcheck.toString().padStart(2, '0');
  }

  if (parseInt(mincheck) > 60) {
    destinationMin.innerHTML = '00';
  } else {
    destinationMin.innerHTML = mincheck.toString().padStart(2, '0');
  }
}

let confirm = document.getElementById('confirm');
confirm.addEventListener('click', destinationCheck);

//Audio Declarations
let circuitsOn = new Audio("audio/TimeCircuitsON.mp3");
let circuitsOff = new Audio("audio/TimeCircuitsOff.mp3");
let circuitConfirm = new Audio("audio/TimeConfirm.mp3");
let insert = new Audio("audio/Load.mp3");
let timetravel = new Audio("audio/timetravel.mp3");
let destinysound = new Audio('audio/destiny.mp3');

let plutoniumEmpty = new Audio('audio/PlutoniumEmpty.mp3');
plutoniumEmpty.volume = 0.3;

//  Keypad lights

let redlight = document.getElementById('redlight');
let yellowlight = document.getElementById('yellowlight');
let greenlight = document.getElementById('greenlight');
let bluelight = document.getElementById('bluelight');

function keypadLightsOn() {
  redlight.classList.add("redlight");
  yellowlight.classList.add("yellowlight");
  greenlight.classList.add("greenlight");
  bluelight.classList.add("bluelight");
}

function keypadLightsOff() {
  redlight.classList.remove("redlight");
  yellowlight.classList.remove("yellowlight");
  greenlight.classList.remove("greenlight");
  bluelight.classList.remove("bluelight");
}

//Plutonium loading

let load = document.getElementById('load');
let pointer = document.getElementById('pointer');

function pLightEmpty() {
  let plight = document.getElementById('plight');
  let intervalCount = 0;

  let interval = setInterval(function () {
    if (trip === true) {
      return;
    }
    if (intervalCount < 3) {
      plight.classList.toggle('plightempty'); // Toggle the 'red' class to make it flash

      setTimeout(function () {
        plight.classList.toggle('plightempty');
      }, 300); // Flash for 300 milliseconds
      plutoniumEmpty.play();
      intervalCount++;

    } else {
      plight.classList.add('plightempty');
      clearInterval(interval);
    }
  }, 1000);
}

let trip = false;

function loadPlutonium() {
  trip = true;
  pointer.classList.add("pointerfull");
  plight.classList.add('plightfull');
  insert.play();

}

load.addEventListener('click', loadPlutonium);