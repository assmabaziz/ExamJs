import { Display } from "./display.js";

export class Ingredients {
  constructor() {
    this.getDataIngredients();
  }
  async getDataIngredients() {
    $(".loader").show(200);
    let apiIng = `https://www.themealdb.com/api/json/v1/1/list.php?i=list`;
    let dataIng = await this.getApiIngredients(apiIng);
    // console.log(dataIng);
    document
      .querySelector("#ingredients")
      .addEventListener("click", function () {
        document.querySelector("#meals").classList.add("d-none");
        document.querySelector("#IngredientsData").classList.remove("d-none");
        new Display().displayDataIng(dataIng);
        // console.log(dataIng);
      });
    $(".loader").hide(200);
  }
  async getApiIngredients(apiIng) {
    let res = await fetch(apiIng);
    let finalResponse = await res.json();
    // console.log(finalRes.meals);
    return finalResponse.meals;
  }
}