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
