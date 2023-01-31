interface User {
    age: number,
    name: string,
    occupation: string,
    [key: string]: any,
}
let persons: User[] =[
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
]

function printPersons(persons: User[]): void {
    for(let person in persons) {
        console.log(persons[person]);    
    }
}
printPersons(persons)

//----------------------------------------------

interface Admin  {
    age: number,
    name: string,
    specialty: string,
}

type userAdmin = User | Admin;

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
let admin1: Admin[]= [
    {
        age: 40,
        name: "Fahad",
        specialty: "Quality"
    }
]
let admin2: Admin[]= [
    {
        age: 42,
        name: "Khaled",
        specialty: "Finance"
    }
]
let admin3: Admin[]= [
    {
        age: 43,
        name: "Salem",
        specialty: "IT"
    }
]
persons.push(admin1)
persons.push(admin2)
persons.push(admin2)
printPersons(persons)


