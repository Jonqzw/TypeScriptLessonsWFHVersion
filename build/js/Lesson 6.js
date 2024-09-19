"use strict";
class Coder {
    constructor(name, music, age, lang = "Heavy Metal!!!") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello our band is ${this.age}`;
    }
}
const Sabaton = new Coder("Sabaton", "Metal", 25);
console.log(Sabaton.getAge());
console.log(Sabaton.name);
const PowerWolf = new Coder("Power Wolf", "Metal", 19);
console.log(PowerWolf.getAge());
class Band extends Coder {
    constructor(stage, name, music, age) {
        super(name, music, age);
        this.stage = stage;
        this.stage = stage;
    }
    getLang() {
        return `We play ${this.lang}`;
    }
}
const Metalica = new Band("Parken", "Metalica", "Metal", 66);
console.log(Metalica.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const MOS = new Guitarist("Gavin", "guitar");
console.log(MOS.play("Riths"));
//////////////////////////////////////////////////////////////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const Jane = new Peeps("Jane");
const Peter = new Peeps("Peter");
const Harasmus = new Peeps("Harasmus");
console.log(Peeps.count);
console.log(`${Peter.name}'s id is ${Peter.id}`);
/////////////////////////////////////////////////////////////////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not an array of strings");
    }
}
const MyBands = new Bands();
MyBands.data = ["Sabaton", "PowerWolf", "Dynazty"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "JTMusic"];
console.log(MyBands.data);
//MyBands.data = ['TestErrorBand', 09] Throws error on purpos
