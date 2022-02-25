function Cat(name) {
    this.name = name;
    this.sound = "Meow";
}

let cat = new Cat("Tom");
console.log(cat.sound);

Cat.prototype.speak = function(){
    console.log(this.sound);
}
cat.speak();
Cat.prototype.getName = function(){
    alert(this.name);
}
cat.getName();

console.log(cat.constructor); //will return Cat function

console.log(cat instanceof Cat); //true
console.log(cat instanceof String); //false
