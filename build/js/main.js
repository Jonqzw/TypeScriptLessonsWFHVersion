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
