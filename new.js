const fortune = ["Look in the mirror without admiring your reflection.", 
"Travel is in your future.", "Do your job to the best of your ability.", "An exciting adventure awaits you.",
"Pursue your dreams with vigor.", "True love is on its way. Make room!", "Things may seem much worse than they are."];


const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getRandomName = () => 
  `${fortune[getRandomNumber(fortune.length)]}`;

const setRandomName = () => {
  document.getElementById('random').innerText = getRandomName();
}

document.getElementById('generate')
  .addEventListener('click', setRandomName);

setRandomName();