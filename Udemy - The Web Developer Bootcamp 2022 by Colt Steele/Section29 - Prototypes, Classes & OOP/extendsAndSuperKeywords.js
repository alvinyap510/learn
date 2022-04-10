//Class inheritence (extends && super)

class Pet {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!!!`
    }
}

class Cat extends Pet {
    constructor(name, age, lives = 9) {
        super(name, age);
        this.lives = lives;
    }
    meow() {
        return `MEOWWWWW!!!`
    }
}

class Dog extends Pet {
    bark() {
        return `WOOOOFFFFF!!!`
    }
}