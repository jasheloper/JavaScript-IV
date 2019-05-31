// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        name = attributes.name; 
        age = attributes.age;
        location = attributes.location; 
    }

    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }

    demo() {
        const subject = 'JavaScript';
        return `Today we are learning about ${this.subject}.`
    }

    grade() {
        const studentname = 'Jashele Tillman';
        return `${this.studentname} receives a perfect score on ${this.subject}.`
    }
}
