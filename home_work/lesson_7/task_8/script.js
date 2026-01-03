class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, footSizeFound) {
        this.name = name;
        this.age = age;
        this.footSizeFound = footSizeFound;
    }
}

const cinderellas = [
    new Cinderella("Anna", 18, 33),
    new Cinderella("Maria", 19, 34),
    new Cinderella("Olena", 20, 35),
    new Cinderella("Iryna", 21, 36),
    new Cinderella("Kateryna", 22, 37),
    new Cinderella("Sofia", 23, 38),
    new Cinderella("Natalia", 24, 39),
    new Cinderella("Yulia", 25, 40),
    new Cinderella("Daria", 26, 41),
    new Cinderella("Alina", 27, 42)
];

const prince = new Prince("Artur", 25, 36);


for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.footSizeFound) prince.wife = cinderella;
}

console.log(prince);


prince.wife = cinderellas.find(cinderella => cinderella.footSize === prince.footSizeFound);

console.log(prince);



