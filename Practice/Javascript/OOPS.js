// class Animal {
//     constructor(name) {
//         this.name = name
//         console.log(`Object is created...`)
//     }
//     eat() {
//         console.log(`${this.name} is eating`)
//     }
//     jumping() {
//         console.log(`${this.name} is jumping`)
//     }
//     static animal(){
//         alert('Animal is coming')   
//     }
// }

// class Lion extends Animal {
//     constructor(name) {
//         super(name)
//         this.name = name
//         console.log('Object is created and he is a Lion...')
//     }
//     eat() {
//         super.eat()
//         console.log('Shera is eating')
//     }
// }
// let jaanwar = {
//     eats: true
// }
// let rabbit = {
//     chill: true
// }
// rabbit.__proto = jaanwar
// let a = new Animal('Bunny')
// console.log(a);
// let l = new Lion('Lion')
// console.log(l);

// class Person{
//     constructor(first,last){
//         this.first = first
//         this.last = last
//     }
//     get fullName(){
//         return `${this.first} ${this.last}`
//     }
//     set fullName(name){
//         const parts = name.split(' ')
//         this.first = parts[0]
//         this.last = parts[1]
//     }
// }
// const person = new Person('John','Doe')
// console.log(person.fullName);

// person.fullName = 'Jane Smith'
// console.log(person.first);
// console.log(person.last);
// console.log(person.fullName);

// class Book{
//     constructor(title, author, readingStatus){
//         this.title = title
//         this.author = author
//         this.readingStatus = readingStatus
//     }

//     displayInfo(){
//         if(this.readingStatus == true){
//             console.log(`Title: ${this.title}, Author: ${this.author}, Read`);
//         }else if(this.readingStatus == false){
//             console.log(`Title: ${this.title}, Author: ${this.author}, Not Read`)
//         }
//     }
// }

// let book1 = new Book('Harry Potter', 'JK Rowling', true)
// let book2 = new Book('Metamorphosis', 'Kafka', false)
// let book3 = new Book('Murder on the Orient Express', 'Agastha Krystie', true)

class Rectangle{
    constructor(width, height){
        this.width = width
        this.height = height
    }

    calculateArea(){
        return this.width*this.height
        
    }
}

let rect1 = new Rectangle(4,3)
let rect2 = new Rectangle(3,3)
let rect3 = new Rectangle(5,3)