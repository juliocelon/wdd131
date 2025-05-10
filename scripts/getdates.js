const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentyear.innerHTML = `${today.getFullYear()}`;

let lastModification = new Date(document.lastModified);

const month = String(lastModification.getMonth() + 1).padStart(2, '0');
const day = String(lastModification.getDate()).padStart(2, '0');

const hours = String(lastModification.getHours()).padStart(2, '0');
const minutes = String(lastModification.getMinutes()).padStart(2, '0');
const seconds = String(lastModification.getSeconds()).padStart(2, '0');

lastModified.innerHTML = `Last modification:${day}/${month}/${lastModification.getFullYear()} ${hours}:${minutes}:${seconds}`;