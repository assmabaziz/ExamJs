import { Display } from "./display.js";
export class searchByName {
  constructor(dataSearch) {
    this.dataSearch = dataSearch;
    
    //  this.searchName = document.querySelector("#searchByName");
    // console.log("from search");
   
   
      this.getDataSearch();
  }

  async getDataSearch() {
    let serchValue = document.querySelector("#searchByName").value;
    $(".loader").show(200);
    let apiSearch = `https://www.themealdb.com/api/json/v1/1/search.php?s=${serchValue}`;
    let dataSearch = await this.getApiSearch(apiSearch);
    // console.log(dataSearch);
    document.querySelector("#searchByName").addEventListener("input", function () {
      //  let serchValue = this.searchName.value;
      console.log(document.querySelector("#searchByName").value);
          new Display().displaySearchResultByName(dataSearch);
    });
    $(".loader").hide(200);
  }
  async getApiSearch(apiSerach) {
    let res = await fetch(apiSerach);
    let finalResponse = await res.json();

    // console.log(finalRes.meals);
    return finalResponse.meals;
  }
}
