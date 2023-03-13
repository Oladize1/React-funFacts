const myNumber = [1,2,3,4,5] 
const names = ["bob", "nora", "azizat"]
myNumber.map((number)=>{
  const solution = number * number
  return console.log(number)
})

names.map((name) => {
 const newList = `${name.charAt(0).toUpperCase()}${name.slice(1)}`
  return console.log(newList)
})

names.map((name)=>{
  const wrap = `<p>${name}</p>`
   return console.log(wrap)
})
let file = document.querySelector('input'). value
console.log(file)