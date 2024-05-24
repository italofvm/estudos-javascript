console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function thisIsModule() {
  console.log("this dentro de uma função")
  console.log(this === module.exports)
  console.log(this === exports)
  console.log(this === global)
}

thisIsModule()

const thisIsModuleArrowFunction = () => {
  console.log("this dentro de uma Arrow function")
  console.log(this === module.exports)
  console.log(this === exports)
  console.log(this === global)
}

thisIsModuleArrowFunction()