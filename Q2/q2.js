// JavaScript Document
//Creating a constructor function name d Person
class Person {
  constructor(name, age, gender, classes) {
    this.name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }
//creating a method named greeting that will display the person name with the greeting message
  greeting() {
    console.log(`Hi! I'm ${this.name}`);
  };
// creating a method named bye() which will display the message along with the nameof the person
  bye() {
    console.log(`${this.name.} has left the building. Bye for now!`);
  };
}

// Instantiating new objects named Parth and harmanpreet of the constructor function named Person
let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);

// Creating another constructor function named teacher which will inherit name, age, gender and interests from the 
//main constructor function named Person using the super keyword.
class Teacher extends Person {
  constructor(name, age, gender, interests, subject, grade) {
    super(name, age, gender, interests);
    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }
}
//instantiate a new teacher object instance
let teacher = new Teacher('Jess', 34, 'female', ['cats', 'coffee'], 'JavaScript', 'A+');