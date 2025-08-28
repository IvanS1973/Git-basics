const person = {
    name : "Jeff",
    age : 30,
    occupation : "Software Developer"
};

console.log("person =", person);

console.log(person.name);

console.log(person['age']);

person.country = "USA";
console.log(person);

person.age = 31;
console.log(person);

delete person.occupation;
console.log(person);

for (const key in person) {
    console.log('Key = ', key);
    console.log(`person[${key}]: val =`, person[key]);
}