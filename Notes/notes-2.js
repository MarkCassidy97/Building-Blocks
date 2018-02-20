/*Notes for JS*/

Methods:

class Dog {
    constructor(name) {
      this._name = name;
      this._behavior = 0;
    }
  
    get name() {
      return this._name;
    }
  
    get behavior() {
      return this._behavior;
    }   
  
    incrementBehavior() {
      this._behavior++;
    }
  }
  
  const halley = new Dog('Halley');


  //In the example above, we create the Dog class, then create an instance, and save it to a variable named halley.
  
  //The syntax for calling methods and getters on an instance is the same as calling them on an object — append the instance with a period, then the property or
   //method name. For methods, you must also include opening and closing parentheses.
  
  //Let's take a moment to create two Dog instances and call our .incrementBehavior() method on one of them.


  let nikko = new Dog('Nikko'); // Create dog named Nikko
  nikko.incrementBehavior(); // Add 1 to nikko instance's behavior
  let bradford = new Dog('Bradford'); // Create dog name Bradford
  console.log(nikko.behavior); // Logs 1 to the console
  console.log(bradford.behavior); // Logs 0 to the console


  //
  //In the example above, we create two new Dog instances, nikko and bradford. 
  //Because we increment the behavior of our nikko instance, but not bradford, accessing nikko.behavior returns 1 and accessing bradford.behavior returns 0.

  
  
  
  
  
  
  
  ///////////// Method Calling ///////////////
  
  
  class Surgeon {
    constructor(name, department) {
      this._name = name;
      this._department = department;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get department() {
      return this._department;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  }
  
  const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');

  //Calling this:
  
  console.log(surgeonCurry.name);
  
  surgeonCurry.takeVacationDays(3);
  console.log(surgeonCurry.remainingVacationDays);

  //Will return "Curry" as you are calling the surgeonCurry instance of it's name - so it will be Curry
  //The " surgeonCurry.takeVacationDays(3);" calls the takeVacationDays method which is used to subtract the taken vacation days against the value added in the parameter.
  //In this case it would return 17 as you are subtracting 3 from the 20 initial days. 







  ///////////Inheretence//////////////////


 // If we have a cat and dog daycare, they will use the same properties like "name" and "behavior", instead of writing the same class, use a master class.
 // In this case it would be "Animal"

  class Animal {
    constructor(name) {
      this._name = name;
      this._behavior = 0;
    }
  
    get name() {
      return this._name;
    }
  
    get behavior() {
      return this._behavior;
    }   
  
    incrementBehavior() {
      this._behavior++;
    }
  }


 // To inherit the Animal class in the Cat class, you would need to extend it by writing:

  class Cat extends Animal {
    constructor(name, usesLitter) {
      super(name);
      this._usesLitter = usesLitter;
    }
  }

  //The extends keyword makes the methods of the animal class available inside the cat class.

 // The super keyword calls the constructor of the parent class. In this case, super(name) passes the name argument of the Cat class to the constructor 
 // of the Animal class. When the Animal constructor runs, it sets this._name = name; for new Cat instances.
 // _usesLitter is a new property that is unique to the Cat class, so we set it in the Cat constructor.

 // You must call the super() in the first line of the constructor, then set the usesLitter property underneath, otherwise you can't use the "this" keyword
 // It is BEST PRACTICE to call super on the first line of subclasses

 // In the example above, our Cat class extends Animal. As a result, the Cat class has access to the Animal getters and the .incrementBehavior() method.

 // so if you write:

  const bryceCat = new Cat('Bryce', false); 
  console.log(bryceCat._name); // output: Bryce

 // It makes a new instance of the Cat class, you can pass in the name and it outputs "Bryce"

  //// EXAMPLE OF ANOTHER INSTANCE OF THIS \\\\

  class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  }
  
  class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
      super(name);
      this._certifications = certifications;
    }
  }
  
  const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);




  //////////// STATIC METHODS \\\\\\\\\\\\\\

 // Sometimes you will want a class to have methods that aren't available in individual instances, but that you can call directly from the class.
  
 // Take the Date class, for example — you can both create Date instances to represent whatever date you want, 
 // and call static methods, like Date.now() which returns the current date, directly from the class. 
 // The .now() method is static, so you can call it directly from the class, but not from an instance of the class.

  class Animal {
    constructor(name) {
      this._name = name;
      this._behavior = 0;
    }
  
    static generateName() {
      const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
      const randomNumber = Math.floor(Math.random()*5);
      return names[randomNumber];
    }
  }


//In the example above, we create a static method called .generateName() that returns a random name when it's called. 
//Because of the static keyword, we can only access .generateName() by appending it to the Animal class.
  
// We call the .generateName() method with the following syntax:

console.log(Animal.generateName()); // returns a name

//You cannot access the .generateName() method from instances of the Animal class or instances of its subclasses (See below).

const tyson = new Animal('Tyson'); 
tyson.generateName(); // TypeError

// The example above will result in an error, because you cannot call static methods (.generateName()) on an instance (tyson).

//Inside of the Hospital Employee Class (Below) I wrote a static method that returned a random number from 0 - 10000...


class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
    
    static generatePassword () {
      return Math.floor(Math.random() * 1000);        // Here
    }
  }
  

  console.log(HospitalEmployee.generatePassword()) //Will call it and generate the number at random.

  // Review: Classes
  // Way to go! Let's review what you learned.
  
  //Classes are templates for objects.
  //Javascript calls a constructor method when we create a new instance of a class.
  //Inheritance is when we create a parent class with properties and methods that we can extend to child classes.
  //We use the extends keyword to create a subclass.
  //The super keyword calls the constructor() of a parent class.
  //Static methods are called on the class, but not on instances of the class.









  ////////////BROWSER COMPATIBILITY\\\\\\\\\\\\\\\\

  //When updating to newer version of browsers, older ones dont support the older ES6 syntax, so you can use Babel (js library) to transform it!

//I did a babel command using NPM and run it so it translates the ES6 to ES5 - but didn't take note of it


  Important info read this below

  //npm init !!!
  //In the last exercise, you wrote one command in your terminal to transpile ES6 code to ES5.
  // In the next five exercises you will learn how to setup a JavaScript project that transpiles
  // code when you run npm run build from the root directory of a JavaScript project.


  //Before we install Babel, we need to setup our project to use the node package manager (npm).
  // Developers use npm to access and manage Node packages. Node packages are directories that contain JavaScript code written by other developers.
  // You can use these packages to reduce duplication of work and avoid bugs.

  //Before we can add Babel to our project directory, we need to run npm init. The npm init command creates a package.json file in the root directory.
  // A package.json file contains information about the current JavaScript project. Some of this information includes:

  //Metadata — This includes a project title, description, authors, and more.
  //A list of node packages required for the project — If another developer wants to run your project, npm looks inside package.json and downloads the packages in this list.
  //Key-value pairs for command line scripts — You can use npm to run these shorthand scripts to perform some process. In a later exercise, we will add a script that runs Babel and transpiles ES6 to ES5.

  //Install Node Packages
  //We use the npm install command to install new Node packages locally. 
  //The install command creates a folder called node_modules and copies the package files to it. 
  //The install command also installs all of the dependencies for the given package.

  We install Babel with the following two commands:
  
  $ npm install babel-cli -D
  $ npm install babel-preset-env -D

  //The babel-cli package includes command line Babel tools, and the babel-preset-env package has the code that maps any JavaScript feature, 
  //ES6 and above (ES6+), to ES5.

  More interesting stuff!

  //The -D flag (on the babel installs above) instructs npm to add each package to a property called devDependencies in package.json. 
  //Once the project's dependencies are listed in devDependencies, other developers can run your project without installing each package separately. 
  //Instead, they can simply run npm install — it instructs npm to look inside package.json and download all of the packages listed in devDependencies.

  //Next you need to tell babel that you are trying to convert ES6 to ES5.
  //Inside the package.json file, you need to add the following in for it to understand that's what it needs to do

  /* 
    {
        "presets": ["env"]
    }
  */

  //When you run Babel, it looks in .babelrc to determine the version of the initial JavaScript file.
  // In this case, ["env"] instructs Babel to transpile any code from versions ES6 and later.

  Babel Source Lib
    //There's one last step before we can transpile our code. We need to specify a script in package.json that initiates the ES6+ to ES5 transpilation.
    //Inside of the package.json file, there is a property named "scripts" that holds an object for specifying command line shortcuts. It looks like this:

    /*  ...
        "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
        }, ...
    
    */

    //In the code above, the "scripts" property contains an object with one property called "test". Below the "test" property, we will add a script that
    // runs Babel like this:


     /*  ...
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "build": "babel src -d lib"
        }, ...
    
    */

    //In the "scripts" object above, we add a property called "build". The property's value, "babel src -d lib", is a command line method that transpiles ES6+
    // code to ES5. Let's consider each argument in the method call:

// ----- babel — The Babel command call responsible for transpiling code.
// ----- src — Instructs Babel to transpile all JavaScript code inside the src directory.
// ----- -d — Instructs Babel to write the transpiled code to a directory.
// ----- lib — Babel writes the transpiled code to a directory called lib.


Build
//We're ready to transpile our code! In the last exercise, we wrote the following script in package.json:

"build": "babel src -d lib"

//Now, we need to call "build" from the command line to transpile and write ES5 code to a directory called lib.

//From the command line, we type:

npm run build

//The command above runs the build script in package.json.
//Babel writes the ES5 code to a file named main.js (it's always the same name as the original file), inside of a folder called lib


FOR FUTURE REFERENCE: Here is the steps to setting up a project for the transpilation

// 1. Initialize your project using npm init and create a directory called src
// 2. Install babel dependencies by running
// 3. npm install babel-cli -D
// 4. npm install babel-preset-env -D
// 5. Create a .babelrc file inside your project and add the following code inside it:

{
  "presets": ["env"]
}

// 6. Add the following script to your scripts object in package.json:
"build": "babel src -d lib"

//7. Run npm run build whenever you want to transpile your code from your src to lib directories.











////// Modules //////////


//JavaScript modules are reusable pieces of code that can be exported from one program and imported for use in another program.

//Modules are particularly useful for a number of reasons. By separating code with similar logic into files called modules, we can:

//find, fix, and debug code more easily;
//reuse and recycle defined logic in different parts of our application;
//keep information private and protected from other modules;
//and, importantly, prevent pollution of the global namespace and potential naming collisions, by cautiously selecting variables and behavior we load into a program.


//We can get started with modules by defining a module in one file, and making the module available for use in another file. 
//Below is an example of how to define a module, and how to export it using the statement module.exports.

let Menu = {};
Menu.specialty = "Roasted Beet Burger with Mint Sauce";

module.exports = Menu;


let Menu = {}; 
//creates the object that represents the module Menu. The statement contains an uppercase variable named Menu which is set equal to an object.

Menu.specialty
// is defined as a property of the 
Menu module. 
//We add data to the Menu object by setting properties on that object, and giving the properties a value

//"Roasted Beet Burger with Mint Sauce"; is the value stored in the 
Menu.specialty //property.

module.exports = Menu; 
// exports the Menu object as a module. module is a variable that represents the module, and exports exposes the module as an object.

//The pattern we use to export modules is this:
//Define an object to represent the module.
//Add data or behavior to the module.
//Export the module.


//To make use of the exported module and the behavior we define within it, we import the module. A common way to do this is with the require() function.

//For instance, say we want the module to control the menu's data and behavior, and we want a separate file to handle placing an order. 
//We would create a separate file order.js (the main file) and import the Menu module from menu.js (where the menu module is) to order.js using 
require()

//In order.js we would write:

const Menu = require('./menu.js');

function placeOrder() {
  console.log('My order is: ' + Menu.specialty);
}

placeOrder();

//In order.js we import the module by creating a variable with const called Menu and setting it equal to the value of the require() function. 
//We can set this variable to any variable name we like, such as menuItems.
//require() is a JavaScript function that enables a module to load by passing in the module's filepath as a parameter.
//'./menu.js' is the argument we pass to the require() function.
//The placeOrder() function then uses the Menu module in its function definition. By calling Menu.specialty, we access the property specialty defined in the Menu module.
//We can then invoke the function using placeOrder()
//Taking a closer look, the pattern to import a module is:

//Import the module
//Use the module and its properties within a program.

//We can also wrap any collection of data and functions in an object, and export the object using module.exports. In menu.js, we could write:

let Menu = {};

module.exports = {
  specialty: "Roasted Beet Burger with Mint Sauce",
  getSpecialty: function() {
    return this.specialty;
  } 
};

//***Notice in modules, you write a comma after each property not a ;***

//In the above code, notice:

module.exports //exposes the current module as an object.
specialty and getSpecialty //are properties on the object.
//Then in order.js, we write:

const Menu = require('./menu.js');

console.log(Menu.getSpecialty());
//Here we can still access the behavior in the Menu module.

//We use empty object - the Menu = {} as the module call in another file, so when you call the Menu.getSpeciality, that is how you get the value....



//ES6 NEW SYNTAX

//As of ES6, JavaScript has implemented a new more readable and flexible syntax for exporting modules. 
//These are usually broken down into one of two techniques, default export and named exports.

//We'll begin with the first syntax, default export. The default export syntax works similarly to the module.exports syntax, 
//allowing us to export one module per file.

//Let's look at an example below

let Menu = {};

export default Menu;

//export default uses the JavaScript export statement to export JavaScript objects, functions, and primitive data types.
//Menu refers to the name of the Menu object, the object that we are setting the properties on within our modules.
//When using ES6 syntax, we use export default in place of module.exports. <-----------------------------

//Codecademy instructions, using array and objects inside, new and need to know!

//In the availableAirplanes array, add two array elements that are both of type object.

//The first object should contain a property name with a value 'AeroJet' and a property fuelCapacity with a value of 800.

//The second object should have a property name with a value of SkyJet and a property fuelCapacity with a value of 500.

//Use export default to export the Airplane module.

let Airplane = {
  availableAirplanes: [
    {
      name: "AeroJet",
      fuelCapacity: 800
    },
    {
      name: "SkyJet",
      fuelCapacity: 500
    }
  ]
}

export default Airplane;

//Nice work! We added a property that lists the availableAirplanes to the Airplane module.



//ES6 module syntax also introduces the import keyword for importing objects. In our order.js example, we import an object like this:

import Menu from './menu';

//The import keyword begins the statement.
//The keyword Menu here specifies the name of the variable to store the default export in.
//from specifies where to load the module from.
//'./menu' is the name of the module to load. When dealing with local files, it specifically refers to the name of the file without the extension of the file (without.js).


//Here is the codecademy steps for this section, it used a forEach to iterate over the array which i got confused with. So below is how you would do it.


//In missionControl.js we'll use the module Airplane to display the fuel capacity of both our airplanes.

//Use the import keyword to import the Airplane module.

import Airplane from './airplane';

//Define a function displayFuelCapacity().

function displayFuelCapacity() {

}

//Within the body of the displayFuelCapacity function, use forEach() to iterate over the Airplane.availableAirplanes array.
//The forEach() should take an anonymous function as a parameter. We'll add more in the next step.
//Pass the anonymous function you created in the last step a parameter of element.

function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(element){

  });
}

//Within the displayFuelCapacity function, use console.log() to output the element's name and its fuel capacity. The output should look like this:

'Fuel Capacity of + (element name) : + (element fuelCapacity)'

//Call the displayFuelCapacity function.

//THE FINAL OUTPUT WAS:

import Airplane from './airplane';

function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(element){
  console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();

//THIS WILL LOOP THROUGH THE availableAirplanes object and return the values stored, so when you write the 
console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
//It returns:

Fuel Capacity of AeroJet: 800
Fuel Capacity of SkyJet: 500


let Airplane = {
  availableAirplanes: [
    {
      name: "AeroJet",
      fuelCapacity: 800
    },
    {
      name: "SkyJet",
      fuelCapacity: 500
    }
  ]
}

//Named exports part

//ES6 introduced a second common approach to export modules. In addition to default export, named exports allow us to export data through the use of variables.

//Let's see how this works. In menu.js we would be sure to give each piece of data a distinct variable name:

let specialty = '';
function isVegetarian() {
}; 
function isLowSodium() {
}; 

export { specialty, isVegetarian };


//Notice that, when we use named exports, we are not setting the properties on an object. Each export is stored in its own variable.
//specialty is a string object, while isVegetarian and isLowSodium are objects in the form of functions. Recall that in JavaScript, every function is in fact a function object.
//export { specialty, isVegetarian }; exports objects by their variable names. Notice the keyword export is the prefix.
//specialty and isVegetarian are exported, while isLowSodium is not exported, since it is not specified.




//To import objects stored in a variable, we use the import keyword and include the variables in a set of {}.

//In the order.js file, for example, we would write:

import { specialty, isVegetarian } from './menu';

console.log(specialty);

//Here specialty and isVegetarian are imported.
//If we did not want to import either of these variables, we could omit them from the import statement.
//We can then use these objects as in within our code. For example, we would use specialty instead of Menu.specialty.

****Instructions take note of this****

import Airplane from './airplane';

function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
  });
}

displayFuelCapacity();


//Let's remove any reference to Airplane in our code since we are no longer exporting this module.
//For example, Airplane.availableAirplanes should be modified to availableAirplanes.
//Again, you will see a ReferenceError in the console for now, but we will fix that in our next step.

import Airplane from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
  });
}

displayFuelCapacity();

//Change the import statement such that it imports the availableAirplanes, flightRequirements, and meetsStaffRequirements variables.
//Now, modify any instance of the Airplane.availableAirplanes variable, so that you only use availableAirplanes.

import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
  });
}

displayFuelCapacity();


//Define a function displayStaffStatus().
//Within the body of the displayStaffStatus() function, use the forEach to iterate over the availableAirplanes array.
//Specifically, the forEach() should take a function as a parameter. The function should in turn take element as a parameter.

import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
  });
}

displayFuelCapacity();


function displayStaffStatus () {
  availableAirplanes.forEach(function(element){
    
  });
}

//Just modifying the same function that is above so don't keep copying:

//Within the displayStaffStatus() function, use console.log() to output the element's name. We'll add more in the next step.

function displayStaffStatus () {
  availableAirplanes.forEach(function(element){
    console.log(element.name);
  });
}

//Continuing within the displayStaffStatus() function, modify the console.log() statement to output

(element name) + ' meets staff requirements: ' + (true/false)

//To do this, we can call the meetsStaffRequirements method, passing in two parameters element.availableStaff and flightRequirements.requiredStaff.

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
  });
}

displayStaffStatus();

//Output:
AeroJet meets staff requirements: true
SkyJet meets staff requirements: false

//Named Exports - you can export them without the export at the bottom of the file read below!!!


//Named exports are also distinct in that they can be exported as soon as they are declared, by placing the keyword export in front of variable declarations.


export let specialty = '';

export function isVegetarian() {

}; 

function isLowSodium() {

};

//The export keyword allows us to export objects upon declaration, as shown in export let specialty and export function isVegetarian() {}.
//We no longer need an export statement at the bottom of our file, since this behavior is handled above.

//Updated file, no point copying the steps - will explain it below:

export let availableAirplanes = [{
  name: 'AeroJet',
  fuelCapacity: 800,
  availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
   maxSpeed: 1200,
   minSpeed: 300
 },
                           
 {name: 'SkyJet',
  fuelCapacity: 500,
  availableStaff: ['pilots', 'flightAttendants'],
  maxSpeed: 800,
  minSpeed: 200
 }];
 
 export let flightRequirements = {
   requiredStaff: 4,
   requiredSpeedRange: 700
 };
 
 export function meetsStaffRequirements(availableStaff, requiredStaff) {
   if (availableStaff.length >= requiredStaff) {
     return true;
   } else {
     return false;
   }
 };
 
 export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
   const range = maxSpeed - minSpeed;
   
   if(range > requiredSpeedRange) {
     return true;
   }
   
   else {
     return false;
   }
   
 }

 
//What happened here is i have created a new function - meetsSpeedRangeRequirements, which takes the 3 parameters which you can see above.
//I created a variable const range, which takes maxSpeed from minSpeed
//I then wrote an if statement to check if range is > requiredSpeedRange
//I then put export infront of all of the let and functions so you don't need to specify it at the bottom of the file


//Import Named Imports

//To import variables that are declared, we simply use the original syntax that describes the variable name. 
//In other words, exporting upon declaration does NOT! have an impact on how we import the variables.

import { specialty, isVegetarian } from 'menu'; //Menu is there example page, but we are working in aeroplane


//Import the meetsSpeedRangeRequirements at the top of your file: so it will look like this now:

import {availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirements} from './airplane';

//Again i would forEach over the availableAirplanes inside the displaySpeedRangeStatus() function.

//I then return a console log, with the name, and then pass in the meetSpeedRangeRequirements function, passing in element.maxSpeed, element.minSpeed, flightRequirements.requriedSpeedRange

function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function(element){
    console.log(element.name + 'meets speed range requirements: ' +   meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
}

//Output would be:

SkyJetmeets speed range requirements: false
AeroJet meets staff requirements: true
SkyJet meets staff requirements: false

//EXPORT AS

//Named exports also conveniently offer a way to change the name of variables when we export or import them. We can do this with the as keyword.
//Let's see how this works. In our menu.js example

let specialty = '';
let isVegetarian = function() {
}; 
let isLowSodium = function() {
}; 

export { specialty as chefsSpecial, isVegetarian as isVeg, isLowSodium };

//In the above example, take a look at the export statement at the bottom of the of the file.

//The as keyword allows us to give a variable name an alias as demonstrated in specialty as chefsSpecial and isVegetarian as isVeg.
//Since we did not give isLowSodium an alias, it will maintain its original name.



///////Import as ///////

import * as Carte from './menu';

Carte.chefsSpecial;
Carte.isVeg();
Carte.isLowSodium();

//This allows us to import an entire module from menu.js as an alias Carte.
//In this example, whatever name we exported would be available to us as properties of that module. 
//For example if we exported the aliases chefsSpecial and isVeg, these would be available to us. 
//If we did not give an alias to isLowSodium we would call it as defined on the Carte module.


/////Combining Export Statements //////

//We can also use named exports and default exports together:
let specialty = '';
function isVegetarian() {
}; 
function isLowSodium() {
}; 
function isGlutenFree() {
};

export { specialty as chefsSpecial, isVegetarian as isVeg };
export default isGlutenFree;

//Here we use the keyword export to export the named exports at the bottom of the file. 
//Meanwhile, we export the isGlutenFree variable using the export default syntax.

//This would also work if we exported most of the variables as declared and exported others with the export default syntax.

export let Menu = {};

export let specialty = '';
export let isVegetarian = function() {
}; 
export let isLowSodium = function() {
}; 
let isGlutenFree = function() {
};

export default isGlutenFree;

//Here we use the export keyword to export the variables upon declaration, and again export the isGlutenFree variable using the export default syntax
//While it's better to avoid combining two methods of exporting, it is useful on occasion. 
//For example, if you suspect developers may only be interested in importing a specific function and won't need to import the entire default export.


////Combining Import Statements////

//We can import the collection of objects and functions with the same data.
//We can use an import keyword to import both types of variables as such:

import { specialty, isVegetarian, isLowSodium } from './menu';

import GlutenFree from './menu';

//Basically that is just a way of importing the variables ^^^



//REVIEW IMPORTANT:::!!!!!!///

//We just learned how to use JavaScript modules. Let's review what we learned:

//Modules in JavaScript are reusable pieces of code that can be exported from one program and imported for use in another program.

//module.exports_exports the module for use in another program.
//require() imports the module for use in the current program.
//ES6 introduced a more flexible, easier syntax to export modules:

//default exports use export default to export JavaScript objects, functions, and primitive data types.
//named exports use the export keyword to export data in variables.
//named exports can be aliased with the as keyword.
//import is a keyword that imports any object, function, or data type.






/////////////////////////////////AJAX REQUESTS!!!! \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//HTTP Requests
//AJAX involves requesting data over the web, which is done using HTTP Requests. 
//There are four commonly used types of HTTP requests - GET, POST, PUT, and DELETE.

//GET requests receive information from other sites by sending a query. 
//POST requests can change information on another site and will receive information or data in response.

//There are several differences between the way GET and POST requests are made. A GET request is like a search. 
//If you navigate to Google and search for something, you might notice that all of your search terms are added to the URL, like this:

//https://www.google.com/#q=pizza+near+union+square

//This URL is saying "Google, please retrieve a list of pizza near Union Square." It is not introducing any new information to Google.

//POST requests, on the other hand, introduce new information to another website. 
//Instead of sending this information in the URL of the request, it is sent as part of the body of the request. 
//You will see what this looks like in later exercises.


//Introduction starts here:

//When AJAX was first formalized, it required the use of an XMLHttpRequest object, a JavaScript object that is used to retrieve data. 
//There are several steps to creating an AJAX request using an XMLHttpRequest, or XHR, object.

//AJAX GET REQUESTS:

Here is a boilerplate AJAX request that i just finished doing on the course, will add the steps in below.

const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';

xhr.responseType = 'json';
xhr.onreadystatechange = function() {
  if(xhr.readyState === XMLHttpRequest.DONE) {
    console.log(xhr.response);
  }
}

xhr.open('GET', url);
xhr.send();

//1: Create the XMLHttpRequest object using the new operator. Save this object in a const called xhr.
//*** Note: While the code will work regardless of how you name your variables, it is a common practice to name this object xhr.

//2: Next, save the following URL to a const called url. Make sure the URL is wrapped in quotes so that it is a string.
//https://api-to-call.com/endpoint

//3: Set the responseType property of the xhr object to equal 'json'. (on line 975)

//4: Set the xhr.onreadystatechange event handler equal to an anonymous function. Inside the function write the if statement on line 977
//Then console log the response inside it

//5: Below the function you created in the previous two steps, call the .open() method on the xhr object and pass it 'GET' and url as arguments.

//6: On the following line, call the .send() method on the xhr object. Do not pass it any arguments.

//7: Nice work! You've written the boilerplate code for an AJAX GET request using an XMLHttpRequest object. 
//In the next few exercises, you'll put this knowledge to use to utilize the Google URL Shortener API.


//Above we just wrote you wrote the boilerplate code for an AJAX request using an XMLHttpRequest object. 
//In this exercise, we're going to use that boilerplate code with some modifications to expand a URL that has been shortened using the 
Google URL Shortener API.


const apiKey = 'AIzaSyBS9jNkgrPc_nr58glOJy9EZfPDhc5VjgM';
const url = 'https://www.googleapis.com/urlshortener/v1/url';


function expandUrl() {
  const urlToExpand = url + '?key=' + apiKey + '&shortUrl=' + $inputField.val();
  const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    
    xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      $responseField.append('<p>Your expanded url is: </p><p>' + xhr.response.longUrl + '</p>');
    }
  }
    
    xhr.open('GET', urlToExpand);
    xhr.send();
    
  }
  
  
//Inside of the code block of the expandUrl() function, create a const called urlToExpand. Set it equal to the code below:

url + '?key=' + apiKey + '&shortUrl=' + $inputField.val();

//The code above adds two query parameters to the API URL. We need to tell Google which short URL we want to expand and we need to provide our API key,
// which is how we get permission from Google to use this service.



// -------------XHR POST Requests I -----------------

//In the previous exercise, you successfully wrote a GET request using AJAX to expand a URL that had been shortened using the Google URL Shortener API. 
//This is a big deal!
//Now, you're going to learn how to construct POST requests and, in a few exercises, you'll shorten a URL using the Google URL Shortener API!
//Recall that in a GET request, the query information (what you're asking the server to return) is generally sent as part of the URL whereas in a POST request, 
//the information is sent to the server as part of the body of the request.
//This information is created and saved in the data constant and sent to the API as an argument passed to the .send() method.
//The first two lines of this request are identical to the first two lines of the GET request. The third line is new. 
//The data that we want to send to our API must be formatted properly. The particular properties and values sent will depend on the API you're using and the information you wish to send and retrieve.
//The object containing this data is passed to the JSON.stringify() method, which will format the object as a string. This is saved to a const called data.
//Everything else remains the same until the final two lines. When we call the .open() method on the xhr object, we pass the argument 'POST' instead of 'GET'. 
//Finally, we pass the data string to the .send() method.



//XHR POST Requests II
//We are going to reconstruct the code from the previous exercise step-by-step until we have written a complete AJAX POST request.

//Instructions

//1. Create a new XMLHttpRequest object using the new operator and save it in a const called xhr.

//2. Create a new const called url and save this url to it:
https://api-to-call.com/endpoint

//3.Create a new const called data and save this line of code to it:
//JSON.stringify({id: '200'});
//This turns the data that we want to send to the API into a JSON string that is readable by the API.

//4.Set the responseType property of the xhr object to be 'json'.

//5.Set the onreadystatechange event handler of the xhr object equal to an anonymous function. Leave the function empty for now.

//6.Inside the code block of the function you created in the previous step, add a conditional statement that checks if the readyState of the xhr object is equal to XMLHttpRequest.DONE.

//7.In the code block of the conditional statement, log the response of the xhr object to the console.

//8.Below the function you created in the previous two steps, call the .open() method on the xhr object and pass it two arguments, 'POST', and url.

//9.Call the .send() method on the xhr object and pass it one argument, data. Congratulations! You have created the boilerplate for an AJAX POST request using an XMLHttpRequest object!.


Here is the output of the instructions above

const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
const data = JSON.stringify({
  id: '200'
});

xhr.responseType = 'json';
xhr.onreadystatechange = function () {
  if(xhr.readyState === XMLHttpRequest.DONE) {
    console.log(xhr.response)
  }
}

xhr.open('POST', url);
xhr.send(data)




ABOVE WAS A WAY OF DOING IT WITH VANILLA JAVASCRIPT, NEW WE USE ACTUAL AJAX REQUESTS FROM JQUERY - SO MAYBE ABOVE IS POINTLESS


$.ajax() 
//is a method provided by the jQuery library specifically to handle AJAX requests. 
//All parts of the request are included in a single object that is passed to the method as an argument.

//The first property of the settings object is 
url 
//and its value is the endpoint of the API (url link).

//The second property is the 
type 
//of request, in this case, 'GET'. 

//This property is optional for GET requests because it is the default setting. The next property specifies the
 dataType

 //which is 'json' in this case.

 THEN inside there is the success/error stuff --- below

 //Then, we include the success function which will handle the response if our request is successful. We create it with a single parameter, response. 
 //Inside the function's code block, we will specify what to do with the response object.
 
 //Finally, we include the error function which will handle the response if our request is not successful. 
 //This function is created with three parameters, jqXHR, status, and errorThrown. jqXHR is the XHR response object returned by the $.ajax() method. 
 //It will contain information about the error.

//This is the boiler plate AJAX request
 $.ajax({
  url: 'https://api-to-call.com/endpoint',
	type: 'GET',
  dataType: 'json',
  
  success(response){
    console.log(response);
  },
  
  error(jqXHR, status, errorThrown){
    console.log(jqXHR);
  }
});


//This is what a POST request would look like to shorten a URL:

function shortenUrl() {
	const urlWithKey = url + '?key=' + apiKey;
	const urlToShorten = $inputField.val();
  $.ajax({
    	url: urlWithKey,
    type: 'POST',
    data: JSON.stringify({longUrl: urlToShorten}),
    dataType: 'json',
    contentType: 'application/json',
    
    success(response){
      $responseField.append('<p>Your shortened url is: </p><p>' + response.id + '</p>');
    },
    
    error(jqXHR, status, errorThrown) {
      console.log(jqXHR);
    }
    
  });
  
}


//I went a bit off track trying to learn this, but now there is a simple way i can write down

//The jQuery library provides other methods that allow us to write fewer lines of code to accomplish the same goals.


$.get( //opens the method call.
  'https://api-to-call.com/endpoint' //is the URL to which we're making our request.
  //The second parameter, 
  response => {};
  // is an arrow function. This is the success callback function. Between the curly braces, specify what to do with the response if it is successful,
  //such as logging it to the console or appending it to the body of the HTML.
  
  //The third parameter, 
  'json'
  //is the response format.



  function expandUrl() {
    const urlToExpand = url + '?key=' + apiKey + '&shortUrl=' + $inputField.val();
    
    $.get(urlToExpand, response => {
    $responseField.append('<p>Your expanded url is: </p><p>' +
    response.longUrl + '</p>');
  }, 'json');

  }



  //AJAX requests with $.post()
  
  //Just like the $.get() method, jQuery provides a $.post() method to make writing AJAX POST requests simpler.
  
  $.post('https://api-to-call.com/endpoint', {data}, response => {...}, 'json');

  //In the example above, we use the .post() method to write a POST request using AJAX. It should look very similar to what you saw in the previous exercise!
  
  $.post( //opens the method call.
  'https://api-to-call.com/endpoint' //is the URL to which we're making our request.
  //The second parameter, 
  {data}
  //is the object you'll use to send data with your request.
  //The third parameter, 
  response => {}
  //is an arrow function. This is the success callback function. Between the curly braces, you would specify what you want to do with the response if it is successful,
  // such as logging it to the console or appending it to the body of the HTML.
  //The fourth parameter, 
  'json'
  // is the response format.



//----------------REVIEW------------------


//Review Requests I

//JavaScript is the language of the web because of its asynchronous capabilities. A set of tools that are used together to take advantage of JavaScript's asynchronous capabilities is called AJAX, which stands for Asynchronous JavaScript and XML.

//There are four HTTP request methods, two of which are GET and POST.

//GET requests only request information from other sources.

//POST methods can introduce new information to other sources in addition to requesting it.

//GET requests can be written using an XMLHttpRequest object and vanilla JavaScript.

//POST requests can also be written using an XMLHttpRequest object and vanilla JavaScript.

//Writing GET and POST requests with XHR objects and vanilla JavaScript requires constructing the XHR object using new, setting the responseType, creating a function that will handle the response object, and opening and sending the request.

//Much of the boilerplate used to write GET and POST requests with XHR and vanilla JavaScript can be reduced by using the $.ajax() method from the jQuery library.

//jQuery provides other helper methods that can further reduce boilerplate such as $.get(), $.post(), and $.getJSON().

//Determining how to correctly write the requests and how to properly implement them requires carefully reading the documentation of the API with which you're working.


//Part 2 --- Promises and more!!!

//Asynchronously requesting and responding to data is such an integral part of what developers do with JavaScript that a new type of object, called a Promise, 
//was added to JavaScript in ES6.

//A Promise is an object that acts as a placeholder for data that has been requested but not yet received. 
//Eventually, a Promise will resolve to the value requested or to a reason why the request failed.

//If the requested information or any error except a network error is received, the Promise is fulfilled and calls a function to handle the response. 
//If there is a network error, the Promise is rejected and will call a function to handle the error.

//In this lesson, you will learn how to use the fetch() function, which uses Promises to handle requests. 
//You will also learn how to use the .then() method to handle fulfilled and rejected Promises. 
//Finally, you will make this all simpler using the async and await keywords.



//fetch() GET Requests I

//On the first line, we call the fetch() function and pass it a single argument - the URL of the API endpoint. 
//Because this is a GET request, this URL will contain the URL to the API and may also contain query parameters, 
//an API key, a client ID, or other information necessary to make the request (depending on the API in question).

The fetch() //function

//1 - creates a request object using the information provided to it
//2 - sends that request object to the URL provided
//3 - returns a Promise that ultimately resolves to a response object, which contains a lot of information, including (if everything went well), the information requested.



//Diagram of a fetch

fetch('https://api-to-call.com/endpoint').then(
  response => { 
    if (response.ok) {
     return response.json(); 
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message);
  }).then(jsonResponse => jsonResponse);


  //Codecademy instructions on creating this

  //Call the fetch function and pass in that URL,
  //Add a then() which takes one parameter which is (resonse)
  //Then create a conditional statement to check if the response.ok, if it is, return response.json()
  //Then we need to throw an error if the request failed so that is the throw new Error('Request failed!');
  //Then if there is a network error we also need to log that, so you need to add a comma after the response {}, to log it, which would console log the network error message
   