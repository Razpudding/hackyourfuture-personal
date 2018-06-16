// The problem with this approach is we don't know when prepare pasta and the other promise chain are finished

cookMeal()

async function cookMeal(){
  //First get all the ingredients needed
  let ingredients = await gatherIngredients()

  //Then prepare the pasta and cut the ingredients SIMULTANEOUSLY
  let cookedPasta = boilWater(ingredients)
    .then(cookPasta)

  let bakedVegggies = cutIngredients(ingredients)
    .then(vegetables => bakeVegetables(vegetables))   //Explicit instead of shorthand
    //.catch((err) => console.log(err))

  Promise.all([cookedPasta, bakedVegggies]).then(console.log("dinner's ready!"))
}

function gatherIngredients(){
  console.log("Gathering ingredients")
  let ingredients = []
  return new Promise( (resolve,reject) => {
    setTimeout(function(){
      ingredients.push(
      { 
        name: "tomatoes",
        cut: false,
        state: "raw"
      },
      { 
        name: "garlic",
        cut: false,
        state: "raw"
      },
      {
        name: "pasta",
        state: "raw",
        strained: false
      },
      {
        name: "water",
        state: "uncooked"
      })
      resolve(ingredients)
    },3000)
  })
}

function cutIngredients(items){
  console.log("Cutting Ingredients")
  let vegetables = []
  return new Promise( (resolve,reject) => {
    setTimeout( () => {
      for (ingredient of items){
        
        if ("cut" in ingredient){
          console.log("cutting ", ingredient)
          ingredient.cut = true
          vegetables.push(ingredient)
        }
      }
      //console.log(items)
      resolve(vegetables)
    },items.length * 1000)
  })
}

function bakeVegetables(veggies){
  console.log("Baking Veggies")
  return new Promise( (resolve,reject) => {
    setTimeout( () => {
      for (veggie of veggies){
        console.log("baking ", veggie)
        veggie.state = "baked"
      }
      //console.log(veggies)
      resolve(veggies)
    }, 5000)
  })
}

function boilWater(ingredients){
  console.log("Boiling Water")
  return new Promise( (resolve,reject) => {
    setTimeout( () => {
      ingredients.find(item => item.name == "water")
        .state = "cooked"
      resolve(ingredients)
    }, 5000)
  })
}

function cookPasta(ingredients){
  console.log("cooking Pasta")
  return new Promise( (resolve,reject) => {
    setTimeout( () => {
      ingredients.find(item => item.name == "pasta")
        .state = "cooked"
      resolve()
    }, 5000)
  })
}