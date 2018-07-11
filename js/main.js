import fetchJsonp from 'fetch-jsonp';

const petForm = document.querySelector('#pet-form');

petForm.addEventListener('submit', fetchAnimals);

//Fetch pets from API
function (fetchAnimals(e) {
  e.preventDefault();

  // Get user input
  const animal = document.querySelector('#animal').value;
  const zip = document.querySelector('#zip').value;

  // Fetch pets
  fetchJsonp(`http://api.petfinder.com/pet.find?format=json&
  key=8e5813d664432c1fc0440e2eb8d8edef&animal=${animal}&location=${zip}&callback=callback`)
}