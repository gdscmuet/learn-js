const EventEmitter = require("events").EventEmitter;

class Burger extends EventEmitter {
  constructor(layers = 2) {
    super();
    this.CookingTime = this._cookingTime(layers);
    this.maxIngredients = this._maxIngredients(layers);
    this.ingredients = [];
    this.timeToReleaseBurger = 5;
  }

  static layers() {
    return {
      small: 1,
      medium: 2,
      familiar: 3,
    };
  }

  _maxIngredients(layers) {
    return layers * 3;
  }

  _cookingTime(layers) {
    return 5 + layers * 2;
  }

  _isMaxIngredientsReached() {
    return this.ingredients.length === this.maxIngredients;
  }

  add(ingredient) {
    if (!this._isMaxIngredientsReached()) {
      this.ingredients.push(ingredient);
      this.emit("ingredientAdded", ingredient);
    } else {
      this.emit("maxIngredientsReached");
    }
    return this;
  }

  remove(ingredient) {
    const ingredientToRemove = this.ingredients.indexOf(ingredient);
    if (ingredientToRemove !== -1) {
      this.ingredients.splice(ingredientToRemove, 1);
      this.emit("ingredientRemoved", ingredient);
    } else {
      this.emit("errorRemovingIngredient", ingredient);
    }
    return this;
  }

  cook() {
    this.emit("cookStarted");
    setTimeout(() => {
      const releaseBurger = setTimeout(() => {
        this.emit("charredBurger");
      }, this.timeToReleaseBurger);
      this.emit("cookFinished", releaseBurger);
    }, this.CookingTime);

    return this;
  }
}

const createMediumBurger = () => {
  const Burger = new Burger(Burger.layers().medium);
  Burger.on("ingredientAdded", (ing) => console.log(`${ing} added`))
    .on("maxIngredientsReached", (ing) =>
      console.log(`Max ingredients (${Burger.maxIngredients}) reached`)
    )
    .on("ingredientRemoved", (ing) => console.log(`${ing} removed`))
    .on("errorRemovingIngredient", (ing) =>
      console.log(`Can not remove ${ing} because is not in the Burger`)
    )
    .on("cookStarted", () => console.log("Burger is in the Cooking."))
    .on("cookFinished", (release) => {
      console.log(`Burger is ready to release.`);
      clearTimeout(release);
      console.info("Burger was released!");
    })
    .add("Tomato")
    .add("Beef")
    .add("Salami")
    .add("Bone")
    .add("Pepper")
    .add("Onion")
    .add("Cheese")
    .add("Mayo")
    .remove("Bone")
    .remove("Peper")
    .cook();
};

createMediumBurger();

/*
  Learn more on observer design pattern: https://docs.microsoft.com/en-us/dotnet/standard/events/observer-design-pattern
  
  Have a Good Day!!

  Regards: https://github.com/officialabdulrehman
*/
