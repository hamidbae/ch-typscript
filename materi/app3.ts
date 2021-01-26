// keywords class diikuti nama kelas dengan huruf pertama Huruf Kapital untuk menandakan sebuah class
class Character {
    public fullname: string; // properties class dengan access modifiers public

    // constructor dengan parameter firstname dan last name
    constructor(firstname: string, lastname: string) {
      this.fullname = `${firstname} ${lastname}`;
    }

    // method dengan access modifiers public
    public greet(name?: string) {
      if (name) {
        return `Hi! ${name}! my name is ${this.fullname}`;
      } else {
        return `Hi! my name is ${this.fullname}`;
     }
   }
}

// membuat instance class menggunakan keywrods new
// class dapat digunakan untuk menganotasikan sebuah type untuk sebuah intance class class tersebut
const archer: Character = new Character('Robin', 'Hood')
let msg = archer.greet();
console.log(msg); // "Hi! my name is Robhin Hood"

let msg1 = archer.greet("Dr. Halsey");
console.log(msg1); // "Hi! Dr. Halsey! my name is Jacob Keyes"