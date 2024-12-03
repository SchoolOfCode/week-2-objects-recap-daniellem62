const myCat = {
    color: "black",
    name: "Tony",
    lovesCuddles: true,
  };

const myHouse = {
    numberOfStories: 2,
    parking: false,
    numberOfBedrooms: 2,
    garden: true,
    energyRating: "D",
};

const myCar = {
    color: "red",
    numberOfWheels: 4,
    powerSteering: true,
    numberOfSeats: 2,
    fuelConsumption: "20mpg",
};

const myFavouriteFilm = {
    filmTitle: "The Dark Knight",
    released: 2008,
    leadActor: "Christian Bale",
};

  //Create an object called myHouse:

//My house has 2 stories, no parking, 2 bedrooms, a garden and an energy efficiency rating of D. done
//Create an object called myCar:
//My car is red, has 4 wheels, power steering, and 2 seats, and does 20 miles per gallon.
//Create an object called myFavouriteFilm:
//My favourite film's title is The Dark Knight, it was released in 2008, and the lead actor is Christian Bale.

let person = {
    name: "Ben",
    likesChocolate: false,
  };

if (person.likesChocolate) {
    console.log(person.name + " loves chocolate")
} else {console.log(person.name + " hates chocolate")};


// Below that, use dot notation to console.log the value of the likesChocolate property.
//Then write an if statement that will console.log "Ben loves chocolate" if likesChocolate has a value of true else console.log "Ben hates chocolate".
// The condition for the if, and the name Ben should both be read from the object using dot notation.
// Change the object's values and re-run your code. The name and the boolean should affect how your program runs.

let desiredPleasantry = "smallTalk";

let bensPhrases = {
  greeting: "Well hello there!",
  farewell: "See you in another life, brother",
  smallTalk: "Warm today, isn't it...",
};

console.log(bensPhrases[desiredPleasantry])
//Use bracket notation and the smallTalk property to console.log Ben's smalltalk phrase.
// Use bracket notation and the desiredPleasantry variable to console.log Ben's greeting phrase.
// Change what is console logged by changing the value of desiredPleasantry.

let me = {
    firstName: "Danielle",
    lastName: "Mcloughlin",
    isBootcamper: false,
  };

me.isBootcamper = true;

let communication = {
    success: true,
    payload: {
      message: {
        text: "Please send biscuits!",
        priority: "URGENT",
      },
    },
  };

  let variable = communication.payload.message.text;

  if (communication.payload.message.priority === "URGENT") {
    console.log(variable)
  };

//  Using dot notation, read the text from the communication object and store it in a variable.
//If the priority is urgent, then console.log the variable, else do nothing.

