import { Display } from "./display.js";
export class AreaData {
    constructor() {
this.getDataArea()
    }

    async getDataArea() {
        $(".loader").show(200);
        let apiArea = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`;
        let dataArea = await this.getApiCategories(apiArea);
        // console.log(dataArea);
        // console.log(dataArea.length);
        document
          .querySelector("#area")
          .addEventListener("click", function (e) {
            document.querySelector("#meals").classList.add("d-none");
            document.querySelector("#AreaData").classList.remove("d-none");
             new Display().displayDataArea(dataArea);
            // console.log(dataArea);
          });
        // new Display().displayDataArea(dataArea);
        $(".loader").hide(200);
      }
      async getApiCategories(apiAr) {
        let res = await fetch(apiAr);
        let finalResponse = await res.json();
        // console.log(finalRes.meals);
        return finalResponse.meals;
      }

}