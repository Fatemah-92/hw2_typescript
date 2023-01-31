//---------------------create persons array for users information-------------------------
var persons = [
    {
        age: 18,
        name: 'Ahmad',
        occupation: 'student'
    },
    {
        age: 12,
        name: 'Ali',
        occupation: 'student'
    },
    {
        age: 25,
        name: 'Mohamad',
        occupation: 'techer'
    }
];
//---------------------create function to print the users information-------------------------
function printPersons(persons) {
    for (var person in persons) {
        console.log(persons[person]);
        //console.log(`The information of user: ${persons[person]}`);   
    }
}
printPersons(persons);
console.log('-----------------------------------');
//---------------------add admins information to persons array-------------------------
var admins = [
    {
        age: 41,
        name: 'Fahad',
        specialty: 'Quality'
    },
    {
        age: 42,
        name: "Khaled",
        specialty: "Finance"
    },
    {
        age: 43,
        name: "Salem",
        specialty: "IT"
    }
];
for (var admin in admins) {
    persons.push(admins[admin]);
}
printPersons(persons);
console.log('-----------------------------------');
//---------------------print the information depending on if the person is admin or user-------------------------
for (var person in persons) {
    if (persons[person].occupation) { //property .occupation it showed up because of >>> [key:string]: any
        console.log("admin information: ".concat(persons[person].name, ", ").concat(persons[person].age, ", ").concat(persons[person].occupation));
    }
    else {
        console.log("user information: ".concat(persons[person].name, ", ").concat(persons[person].age, ", ").concat(persons[person].specialty));
    }
}
console.log('-----------------------------------');
//---------------------create function to change the value of property age-------------------------
function changeAge(name, age) {
    for (var index in persons) {
        if (persons[index].name == name) {
            persons[index].age = age;
            console.log("The age of ".concat(name, " changed to ").concat(persons[index].age));
        }
    }
}
changeAge('Salem', 45);
