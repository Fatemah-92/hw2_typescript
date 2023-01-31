//---------------------define an interface for User and Admin-------------------------
interface User {
    age: number,
    name: string,
    occupation: string,
    [key:string]: any
}
interface Admin  {
    age: number,
    name: string,
    specialty: string,
    [key:string]: any
}
type userAndAdmin = User | Admin;

//---------------------create persons array for users information-------------------------
let persons: userAndAdmin[] =[
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

//---------------------create function to print the users information-------------------------
function printPersons(persons: userAndAdmin[]): void {
    for(let person in persons) {
        console.log(persons[person]);  
        //console.log(`The information of user: ${persons[person]}`);   
    }
}
printPersons(persons)
console.log('-----------------------------------');

//---------------------add admins information to persons array-------------------------
let admins: userAndAdmin[] =[
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
]

for(let admin in admins) {
    persons.push(admins[admin]);    
}
printPersons(persons)
console.log('-----------------------------------');

//---------------------print the information depending on if the person is admin or user-------------------------
for(let person in persons) {
    if(persons[person].occupation) { //property .occupation it showed up because of >>> [key:string]: any
        console.log(`admin information: ${persons[person].name}, ${persons[person].age}, ${persons[person].occupation}`);     
    } else {
        console.log(`user information: ${persons[person].name}, ${persons[person].age}, ${persons[person].specialty}`);        
    }
}
console.log('-----------------------------------');

//---------------------create function to change the value of property age-------------------------
function changeAge(name:string, age:number) {
    for(let index in persons) {
        if(persons[index].name == name ) {
            persons[index].age = age
            console.log(`The age of ${name} changed to ${persons[index].age}`);
            
        }      
    }
}
changeAge('Salem', 45)