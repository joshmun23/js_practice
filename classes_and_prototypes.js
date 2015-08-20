var Person = function () {
  this.social_interaction = 0
};

var person1 = new Person();
var person2 = new Person();

var User = function (name, email) {
  this.name = name, this.email = email
};

var user1 = new User('Bob');
var user2 = new User('Jill', 'jill@gmail.com');

User.prototype.sayHello = function() {
  console.log('Hello, I\'m ' + this.name)
}

Person.prototype.sayHello = function(otherPerson) {
  console.log('Hello ' + otherPerson.name);
  this.social_interaction++;
  otherPerson.social_interaction++;
}

person1.sayHello;
person1.social_interaction;

var Pet = function (name, color, gender, breed, emotion_scale) {
  this.name = name,
  this.color = color,
  this.gender = gender,
  this.breed = breed;
  this.emotion_scale = emotion_scale;
}

pet1 = new Pet('Cali', 'Black', 'Female', 'Border Collie/Australian Shephard', '5')
pet2 = new Pet('Cali', 'Black', 'Female', 'Border Collie/Australian Shephard', '5')

Pet.prototype.bark = function(volume_level, msg) {
  if (volume_level == 'low') {
    console.log(name + ' barks softly ' + msg)
    this.emotion_scale++;
  }
}
pet1.bark('low', 'after hearing a knock on the door')
