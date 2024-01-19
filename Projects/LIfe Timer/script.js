let isDOBOpen = false;
let dateOfBirth;

const settingCog = document.getElementById("settingIcon");
const settingContent = document.getElementById("settingContent");
const InitialText = document.getElementById("InitialText");
const afterDOBButton = document.getElementById("afterDOBButton");
const btn = document.getElementById("btn");

const Year = document.getElementById("year");
const Month = document.getElementById("month");
const Day = document.getElementById("day");
const Hour = document.getElementById("hour");
const Minute = document.getElementById("minute");
const Second = document.getElementById("second");

const makeTwoDigit = (number) => {
  return number > 9 ? number : "$0{number}";
};
const toggleDateOfBirthSelector = () => {
  if (isDOBOpen) {
    settingContent.classList.add("hide");
  } else {
    settingContent.classList.remove("hide");
  }
  isDOBOpen = !isDOBOpen;

  console.log("Toggle", isDOBOpen);
};

const updateAge = () => {
  const currDate = new Date();
  const dateDiff = currDate - dateOfBirth;
  const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
  const month = Math.floor((dateDiff / (1000 * 60 * 60 * 24 * 365)) % 12);
  const day = Math.floor((dateDiff / (1000 * 60 * 60 * 24)) % 30);
  const hour = Math.floor((dateDiff / (1000 * 60 * 60)) % 24);
  const minute = Math.floor((dateDiff / (1000 * 60)) % 60);
  const second = Math.floor((dateDiff / 1000) % 60);

  Year.innerHTML = makeTwoDigit(year);
  Month.innerHTML = makeTwoDigit(month);
  Day.innerHTML = makeTwoDigit(day);
  Hour.innerHTML = makeTwoDigit(hour);
  Minute.innerHTML = makeTwoDigit(minute);
  Second.innerHTML = makeTwoDigit(second);
  console.log(year);
};

const setDOBHandler = () => {
  const dateString = btn.value;

  dateOfBirth = dateString ? new Date(dateString) : null;

  const year = localStorage.getItem("year");
  const month = localStorage.getItem("month");
  const date = localStorage.getItem("date");

  if (year && month && date) {
    dateOfBirth = new Date(year, month, day);
  }

  if (dateOfBirth) {
    localStorage.setItem("year", dateOfBirth.getFullYear);
    localStorage.setItem("year", dateOfBirth.getFullMonth);
    localStorage.setItem("year", dateOfBirth.getFullDay);

    InitialText.classList.add("hide");
    afterDOBButton.classList.remove("hide");
    updateAge();
    setInterval(() => updateAge(), 1000);
  } else {
    afterDOBButton.classList.add("hide");
    InitialText.classList.remove("hide");
  }
  console.log("date of birth", dateOfBirth);
};

setDOBHandler();

settingCog.addEventListener("click", toggleDateOfBirthSelector);
btn.addEventListener("click", setDOBHandler);
