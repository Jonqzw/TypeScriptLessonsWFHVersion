class Coder {
  //Reduntant because they are declared in constructer with visibilty modiefiers
  // name: string
  // music: string
  // age: number
  // lang: string

  secondLang!: string; // We assert that we won't instantiate this yet

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Heavy Metal!!!"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello our band is ${this.age}`;
  }
}
const Sabaton = new Coder("Sabaton", "Metal", 25);
console.log(Sabaton.getAge());
console.log(Sabaton.name);

const PowerWolf = new Coder("Power Wolf", "Metal", 19);
console.log(PowerWolf.getAge());

class Band extends Coder {
  constructor(public stage: string, name: string, music: string, age: number) {
    super(name, music, age);
    this.stage = stage;
  }

  public getLang() {
    return `We play ${this.lang}`;
  }
}

const Metalica = new Band("Parken", "Metalica", "Metal", 66);
console.log(Metalica.getLang());

//////////////////////////////////////////////////////////////////////////////////////////////////////

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const MOS = new Guitarist("Gavin", "guitar");
console.log(MOS.play("Riths"));
//////////////////////////////////////////////////////////////////////////////////////////////////////

class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const John = new Peeps("John");
const Jane = new Peeps("Jane");
const Peter = new Peeps("Peter");
const Harasmus = new Peeps("Harasmus");

console.log(Peeps.count);
console.log(`${Peter.name}'s id is ${Peter.id}`);
/////////////////////////////////////////////////////////////////////////////////////////////////////

class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Param is not an array of strings");
  }
}

const MyBands = new Bands();
MyBands.data = ["Sabaton", "PowerWolf", "Dynazty"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "JTMusic"];
console.log(MyBands.data);
//MyBands.data = ['TestErrorBand', 09] Throws error on purpos
