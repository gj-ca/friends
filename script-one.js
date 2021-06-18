let obj = {a: "b", c: "d", e: "b"}

const people = [
  {
  name: "james",
  eye: "green",
  hair: "none",
  }, {
    name: "dane",
    eye: "brown",
    hair: "brown"
  }, {
    name: "raf",
    eye: "brown",
    hair: "brown"
  }
]
class Person {
  constructor(name, eye, hair) {
    this.name = name
    this.eye = eye
    this.hair = hair
    this.friends = []
    this.enemies = []
    this.available = true
    this.party = {
      date: "2/2/2",
      yes: []
    }
  }
  sayHello() {
    console.log(`Hello my name is ${this.name}`)
  }

  makeFriend(person) {
    // validate
    if (person instanceof Person) {
      this.friends.push(person)
    }
  }
  makeEnemy(person) {
    // validate
    if (person instanceof Person) {
      this.enemies.push(person)
    }
  }

  isAvailable() {
    return this.available
  }
  sendOutInvites() {
    // iterate over my friends
    this.friends.forEach(friend => {
      // ask to party
      if (friend.isAvailable) {
        this.party.yes.push(friend)
      }
    })
  }
}

class Foo {

}
person1 = new Person("james", "green", "none")
person2 = new Person("dane", "hazel", "brown")
person3 = new Person("raf", "hazel", "brown")
person4 = new Person("brayden", "blue", "brown")

person1.makeFriend(person2)
person1.makeFriend(person4)

person1.sendOutInvites()

console.log(person1.party.yes)

person1.party = "gtfo"
console.log(person1.party)


const array = []
array.push(123)
