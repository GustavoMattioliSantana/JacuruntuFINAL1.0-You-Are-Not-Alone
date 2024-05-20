const petImg = document.getElementById("pet-img");
const foodStatus = document.getElementById("food-status");
const funStatus = document.getElementById("fun-status");
const sleepStatus = document.getElementById("sleep-status");

let pet = {
  food: 100,
  fun: 100,
  sleep: 100,
};

/*função comer*/
document.getElementById("feed").addEventListener("click", function() {
  pet.food += 25;
  if (pet.food > 100) pet.food = 100;
  foodStatus.textContent = pet.food;
  pet.fun -= 10;
  if (pet.fun < 0) pet.fun = 0;
  funStatus.textContent = pet.fun;
});


/*função diversão*/
document.getElementById("play").addEventListener("click", function() {
  pet.fun += 30;
  if (pet.fun > 100) pet.fun = 100;
  funStatus.textContent = pet.fun;
  pet.sleep -= 10;
  if (pet.sleep < 0) pet.sleep = 0;
  sleepStatus.textContent = pet.sleep;
});

/*função dormir*/
document.getElementById("sleep").addEventListener("click", function() {
  pet.sleep += 50;
  if (pet.sleep > 100) pet.sleep = 100;
  sleepStatus.textContent = pet.sleep;
  pet.fun -= 10;
  if (pet.fun < 0) pet.fun = 0;
  funStatus.textContent = pet.fun;
});

/*decaimento de cada status a cada 10 seg*/
setInterval(function() {
  pet.food -= 7;
  pet.fun -= 10;
  pet.sleep -= 3;
  foodStatus.textContent = pet.food;
  funStatus.textContent = pet.fun;
  sleepStatus.textContent = pet.sleep;
  if (pet.food <= 0 || pet.fun <= 0 || pet.sleep <= 0) {
    petImg.src = "Imgs/morte.png";
    alert("Your pet has died!");
  }
}, 10000);

document.getElementById('submit-name').addEventListener('click', function() {
  var petName = document.getElementById('pet-name').value;
  document.title = petName + ' - Jacuruntu';
  document.getElementById('pet-img').alt = petName + ' Image';
});

document.getElementById('submit-name').addEventListener('click', function() {
  var petName = document.getElementById('pet-name').value;
  document.title = petName + ' - Jacuruntu';
  document.getElementById('pet-img').alt = petName + ' Image';
  document.getElementById('name-container').style.display = 'none';
});

const petNameInput = document.getElementById('pet-name'); /*fazer o nome colocado aparecer na tela*/
const petNameDisplay = document.createElement('div');
petNameDisplay.id = 'pet-name-display';
petNameDisplay.textContent = 'Pet Name';
document.getElementById('pet-container').appendChild(petNameDisplay);

petNameInput.addEventListener('input', () => {
  petNameDisplay.textContent = petNameInput.value;
});

