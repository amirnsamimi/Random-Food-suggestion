const listOfFoods = [
  {
    name: "ghorme sabzi",
    ingr: [
      {
        name: "sabzi",
        amount: 200,
        unit: "g",
      },
      { name: "roghan", amount: 50, unit: "ml" },
    ],
    cookTime: 90,
  },
  {
    name: "gheime",
    ingr: [
      {
        name: "berenj",
        amount: 200,
        unit: "g",
      },
      { name: "roghan", amount: 50, unit: "ml" },
    ],
    cookTime: 240,
  },
  {
    name: "kashk bademjan",
    ingr: [
      {
        name: "kashk",
        amount: 200,
        unit: "g",
      },
      { name: "roghan", amount: 50, unit: "ml" },
    ],
    cookTime: 10,
  },
  {
    name: "mirza ghasemi",
    ingr: [
      {
        name: "bademjan",
        amount: 200,
        unit: "g",
      },
      { name: "roghan", amount: 50, unit: "ml" },
    ],
    cookTime: 120,
  },
  {
    name: "kubide",
    ingr: [
      {
        name: "goosht",
        amount: 200,
        unit: "g",
      },
      { name: "roghan", amount: 50, unit: "ml" },
    ],
    cookTime: 45,
  }
];
const getRandomFood = () => {
  const randomNumber = Math.floor(Math.random() * listOfFoods.length);
  return listOfFoods[randomNumber];
};
const updateDisplay = (foodName,ingr) => {
  if (!!document) {
        document.getElementById('display').innerText = foodName
        document.getElementById('ingr').innerText = ingr.map(i=>i.name+": "+i.amount+i.unit).join(" - ")
  }else {
    console.log(foodName);
  }
};


const search = () => {
  const suggestedFood = getRandomFood();
  updateDisplay(suggestedFood.name,suggestedFood.ingr);
  console.log(suggestedFood);
};

search();
