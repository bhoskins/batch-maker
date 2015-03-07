import Ember from 'ember';

export default Ember.Controller.extend({
    mealType: ["Breakfast", "Lunch", "Dinner", "Dessert"],
    currentDenom: {isF: true},
    tempDenom: [{denom: "F", isF: true},
    						{denom: "C", isF: false}],
    unitOfMeasure: ["Cups", "Pints", "Lbs", "Oz", "Litres"],
    recipeYieldType: ["Cookies", "Loaf/Loaves/Cake/s", "items", "Servings"],
	actions: {
		saveRecipe: function() {
			var recipeName = this.get('recipeName');
			var recipeAuthor = this.get('chefName');
			var recipeType = this.get('recipeType');

			var prepTime = this.get('prepTime');
			var cookTime = this.get('cookTime');
			var cookTemp = this.get('cookTemp');
			var isF = this.get('this.currentDenom.isF');
			var recipeYieldAmt = this.get('recipeYieldAmt');
			var recipeYieldType = this.get('recipeYieldType');
			var ingredientAmount = this.get('ingredientAmount');
			var ingredientType = this.get('ingredientType');
			var directions = this.get('directions');
			var recipeNotes = this.get('recipeNotes');

// console.log(this.currentDenom.isF + " :currentDenom");



		var recipe = {
			recipeName: recipeName,
			recipeAuthor: recipeAuthor,
			recipeType: recipeType,
			prepTime: prepTime,
			cookTime: cookTime,
			cookTemp: cookTemp,
			isF: isF,
			recipeYieldAmt: recipeYieldAmt,
			recipeYieldType: recipeYieldType,
			ingredientAmount: ingredientAmount,
			ingredientType: ingredientType,
			directions: directions,
			recipeNotes: recipeNotes

		};


		this.store.save('recipe', recipe);


		}
	}
});

