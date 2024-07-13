import { Display } from "./display.js";
export class getCategories {
  constructor() {
    this.getDtaCategories();
  }
  async getDtaCategories() {
    $(".loader").show(200);
    let apiCat = `https://www.themealdb.com/api/json/v1/1/categories.php`;
    let dataCat = await this.getApiCategories(apiCat);

    document
      .querySelector("#categories")
      .addEventListener("click", function (e) {
        document.querySelector("#meals").classList.add("d-none");
        document.querySelector("#categoriesData").classList.remove("d-none");
         new Display().displayDataCategories(dataCat);
        // console.log(dataCat);
      });
    // new Display().displayDataCategories(dataCat);
    $(".loader").hide(200);
  }
  async getApiCategories(apiCat) {
    let res = await fetch(apiCat);
    let finalResponse = await res.json();
    // console.log(finalRes.meals);
    return finalResponse.categories;
  }
}
