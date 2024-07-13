//this file contains the api of first page
import { Display } from "./display.js";
export class Settings {
  constructor() {
    this.getStart();
  }
  async getStart() {
    $(".loader").show(200)
    let mainApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
    let data = await this.getApi(mainApi);
    // console.log(data);
    // new Display().sayHi()
     new Display().displayData(data);
    $(".loader").hide(100)
  }

  async getApi(api) {
    let response = await fetch(api);
    let finalRes = await response.json();
    // console.log(finalRes.meals);
    return finalRes.meals;
  }
  
}
//Arrabiata ${serchValue}
