const makePerson = () => {
  let privateName = "";
  let privateAge = 0;

  function setName(name) {
    privateName = name;
  }
  function setAge(age) {
    privateAge = age;
  }
  return {
    setName: (name) => {
      setName(name);
    },
    setAge: (age) => {
      setAge(age);
    },
    getInfo: () => privateName + ", " + privateAge,
  };
};

// let person = makePerson();
// person.setAge(10);
// person.setName("Per");
// console.log(person.getInfo());

module.exports = makePerson;
