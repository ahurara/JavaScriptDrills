const person ={
    name : 'john',
    greet: function(){console.log('hello ', this.name)}
}

const anotherPerson={
    name :'Doe',
}

person.greet();
person.greet.bind(anotherPerson.name);