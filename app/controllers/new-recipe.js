import Ember from 'ember';

export default Ember.Controller.extend({
		currentRecipeType: "Breakfast",
    recipeType: ["Breakfast", "Lunch", "Dinner", "Dessert"],
    currentDenom: {isF: true},
    tempDenom: [{denom: "F", isF: true},
    						{denom: "C", isF: false}],
    unitOfMeasure: ["Cups", "Pints", "Lbs", "Oz", "Litres"],
    currentRecipeYieldType: "Servings",
    recipeYieldType: ["Servings", "Cookies", "Loaf/ves or Cake/s"],
	actions: {
		saveRecipe: function() {
			var recipeName = this.get('recipeName');
			var recipeAuthor = this.get('recipeAuthor');
			var recipeTypeSelected = this.currentRecipeType;

			var prepTime = this.get('prepTime');
			var cookTime = this.get('cookTime');
			var cookTemp = this.get('cookTemp');
			var isF = this.currentDenom.isF;
			var recipeYieldAmt = this.get('recipeYieldAmt');
			var recipeYieldTypeSelected = this.currentRecipeYieldType;
			var ingredientAmount = this.get('ingredientAmount');
			var ingredientType = this.get('ingredientType');
			var directions = this.get('directions');
			var recipeNotes = this.get('recipeNotes');

// console.log(this.currentDenom.isF + " :currentDenom");


		var recipe = {
			recipeName: recipeName,
			recipeAuthor: recipeAuthor,
			recipeTypeSelected: recipeTypeSelected,
			prepTime: prepTime,
			cookTime: cookTime,
			cookTemp: cookTemp,
			isF: isF,
			recipeYieldAmt: recipeYieldAmt,
			recipeYieldTypeSelected: recipeYieldTypeSelected,
			ingredientAmount: ingredientAmount,
			ingredientType: ingredientType,
			directions: directions,
			recipeNotes: recipeNotes

		};


		this.store.save('recipe', recipe);



		}
	}
});

