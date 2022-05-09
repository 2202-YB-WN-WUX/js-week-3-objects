// let person = {
//   name: "dom",
//   stars: 5,
//   isVaccinated: true,
//   description: "an awesome person",
//   imageURL:"https://resources.stuff.co.nz/content/dam/images/1/k/t/l/h/9/image.related.StuffLandscapeSixteenByNine.1240x700.1ktlc6.png/1519804985947.jpg?format=pjpg&optimize=medium"
// }
//
// const result = document.getElementById('result');
// result.innerHTML = `
//   <img src="${person.imageURL}" alt="picture of dom & jayjay">
//   <h1>${person.name}</h1>
//   <h2>${person.stars}/5</h2>
//   <p>Are they vaccinated? ${person.isVaccinated}</p>
//   <p><strong>Description:</strong> ${person.description}</p>
// `

// let studentsNumber = 3;
//
// let students = [
//   "Tim",
//   "Jared",
//   "Dom"
// ]
//
// let grades = [
//   1,
//   50,
//   100
// ]
//
// for (var i = 0; i < studentsNumber; i++) {
//   console.log(students[i]);
//   console.log(grades[i]);
// }

const result = document.getElementById("result");

let studentsArray = [
  {
    name: "Tim",
    grade: 50,
    vaccinated: true
  },
  {
    name: "Pheobe",
    grade: 90,
    vaccinated: true
  },
  {
    name: "Molly",
    grade: 10,
    vaccinated: false
  }
];

// result.innerHTML = `
//   <p>Name: ${studentsArray[0].name}</p>
//   <p>Grade: ${studentsArray[0].grade}</p>
//   <p>Vaccination? ${studentsArray[0].vaccinated}</p>
// `;

// for (let i = 0; i < studentsArray.length; i++) {
//   result.innerHTML += `
//     <p>Name: ${studentsArray[i].name}</p>
//     <p>Grade: ${studentsArray[i].grade}</p>
//     <p>Vaccination? ${studentsArray[i].vaccinated}</p>
//     <hr>
//   `;
// }

//
// Activity: create an array called "flowers"
//
// Fill the array with objects. Each object will have the
// properties "name" (string), "price" (number), "trendy" (boolean),
// and "imageURL" (string). Fill the array with 3 flowers.
//
// Show the full list of flowers on the screen using a loop and innerHTML.
// If trendy = "true" show a "trendy!" label on the flower, otherwise show nothing.
//
// Extension: add inputs to the screen so you can add new flowers to the array.
// When you submit a new flower, refresh the list of flowers.

const input = document.getElementById('flower-input');
const button = document.getElementById('id')

let flowerArray = [
  {
  name: "Agapantha",
  price: 12,
  trendy: false,
  imageURL: "https://cdn.pixabay.com/photo/2015/08/13/20/06/flower-887443_960_720.jpg"
  },
  {
  name: "Rose",
  price: 40,
  trendy: true,
  imageURL: "https://cdn.pixabay.com/photo/2022/04/09/18/06/cape-marguerite-7121992_960_720.jpg"
  },
  {
  name: "Sunflower",
  price: 150,
  trendy: true,
  imageURL: "https://cdn.pixabay.com/photo/2017/06/18/21/37/rose-2417334_960_720.jpg"
  }
];

const flowerNameInput = document.getElementById('flower-name');
const flowerPriceInput = document.getElementById('flower-price');
const flowerImageInput = document.getElementById('flower-image');
const submitBtn = document.getElementById('submit');

submitBtn.onclick = function() {
  let newFlower = {
    name: flowerNameInput.value,
    price: flowerPriceInput.value,
    imageURL: flowerImageInput.value
  }
  flowerArray.push(newFlower);
  renderFlowers();
}

function renderFlowers(){
  // clear the inside of the element
  result.innerHTML = "";
  // loop through the flowers
  // shows them on screen
  for (let i = 0; i < flowerArray.length; i++) {
    let trendyMessage;
    if (flowerArray[i].trendy == true){
      trendyMessage = `<div class="trendy-message">Trendy</div>`;
    } else {
      trendyMessage = "";
    }
    result.innerHTML += `
      ${trendyMessage}
      <p>Name: ${flowerArray[i].name}</p>
      <p>price: ${flowerArray[i].price}</p>
      <img src="${flowerArray[i].imageURL}" alt="${flowerArray[i].name}">
      <hr>
    `;
  }
}

renderFlowers();
