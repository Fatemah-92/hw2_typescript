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
function printPersons(persons) {
    for (var person in persons) {
        console.log(persons[person]);
    }
}
printPersons(persons);
/*
let admin: userAdmin[]= [
    {
        age: 40,
        name: "Fahad",
        specialty: "Quality"
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
    },
]

for(let item in admin) {
    persons.push(item)
}
*/
var admin1 = [
    {
        age: 40,
        name: "Fahad",
        specialty: "Quality"
    }
];
var admin2 = [
    {
        age: 42,
        name: "Khaled",
        specialty: "Finance"
    }
];
var admin3 = [
    {
        age: 43,
        name: "Salem",
        specialty: "IT"
    }
];
persons.push(admin1);
printPersons(persons);
