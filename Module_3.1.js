//task1
function Animal(name,age,say) {
	this.name = name;
  this.age = age;
  this.say = say;
 	this.info = function() {
  	return console.log('Name = ' + this.name + ' Age = ' + this.age 
    	+ ' Sound = ' + this.say)};
    
  this.setName = function(value1) { this.name = value1 };
}

Animal.prototype.sayHi = function() {
	console.log('Hi ' + this.name)
}

//task2
let dog = Object.create(new Animal('',10,'Gav'),{
  name: {
  	value: 'Barbos',
    writable: false,
    configurable: false,
  }
});

dog.sayHi();
dog.setName('Layka');
dog.info();

//task3
class Animal2 {
		name = '';
    age = '';
    say = '';

	constructor(name,age,say) {
  	this.name = name;
  	this.age = age;
  	this.say = say;
  }
  
  	get info() {
    	return this.composeInfo();
    }
  
  	composeInfo() {
  	      return 'Name = ' + this.name + ' Age = ' + this.age 
  	      + ' Sound = ' + this.say }
    
    get name () {
    	console.log(this._name);
    }
    
    set name (value) {
    	this.name = value;
    }  
}

const cat = new Animal2('Cat',5,'Meou');

console.log(cat.info);
cat.name = 'Elephant';
console.log(cat.info);