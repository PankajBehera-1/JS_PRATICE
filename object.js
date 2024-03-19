let deatils = {
    Name : "pankaj",
    Age : 22,
    adds : "BTM Layout"
}

//using dot (.) notation

console.log(deatils.Name);
console.log(deatils.Age);


//using array-like([]) notation

console.log(deatils['adds']);

console.log(typeof deatils);

//Modifying the value of a property

deatils.Age = 25;
console.log(deatils);

//Adding a new property to an object

deatils.mob = 7205889704;
console.log(deatils);

// Deleting a property of an object
// To delete a property of an object, you use the delete operator:

delete deatils.mob;
console.log(deatils);

//Checking if a property exists

//syntax --> 'propertyName' in objectName

console.log('Age' in deatils);

