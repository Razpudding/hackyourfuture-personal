    bug1() {
      const people = [{
        name: 'Alice',
        age: 25
      }, {
        name: 'Bob',
        age: 27
      }, {
        name: 'Charlie',
        age: 40
      }];

      for (let person in people) {
        console.log(`${person.name} is ${person.age}`);
      }
    }

bug1();