export class Display {
  constructor(data, dataSearch,dataCat,dataArea,dataIng) {
    this.data = data;
    this.dataSearch = dataSearch;
    this.dataCat = dataCat
    this.dataArea = dataArea
    this.dataIng = dataIng
  }
  sayHi() {
    console.log("hi from display");
  }
  displayData(data) {
    let cartoona = "";
    for (let i = 0; i < data.length; i++) {
      cartoona += `
       <div class="col-md-3">
          <div class="card cardMeal overflow-hidden " id="cardMeal">
            <img src="${data[i].strMealThumb}" alt="meal">
            <div class="overlay position-absolute d-flex justify-content-center align-items-center flex-column ">
              <h3 id="title">${data[i].strMeal}</h3>
            </div>
          </div>
        </div>
      `;
    }
    document.querySelector("#myCards").innerHTML = cartoona;
  }
  displaySearchResultByName(dataSearch) {
    // console.log(dataSearch.length);
    let Box = "";
    for (let j = 0; j < dataSearch.length; j++) {
      Box += `
         <div class="col-md-3">
            <div class="card  overflow-hidden position-relative">
              <img src="${dataSearch[j].strMealThumb}" alt="meal">
              <div class="overlay position-absolute d-flex justify-content-center align-items-center flex-column ">
                <h3 id="title">${dataSearch[j].strMeal}</h3>
               
              </div>
            </div>
          </div>
        `;
     }
    document.querySelector("#resultSearchByName").innerHTML = Box;
  }
  displayDataCategories(dataCat) {
    let Box = "";
    for (let j = 0; j < dataCat.length; j++) {
      Box += `
         <div class="col-md-3">
            <div class="card cardCategories overflow-hidden position-relative border-0 bg-black" >
              <img src="${dataCat[j].strCategoryThumb}" alt="meal">
              <div class="overlay position-absolute d-flex justify-content-center align-items-center flex-column ">
                <div class="overlay-content w-75 mx-auto text-center">
                <h3 id="title">${dataCat[j].strCategory.split(" ").slice(0,1).join(" ")}</h3>
                <p>${dataCat[j].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
              </div>  
              </div>
            </div>
          </div>
        `;
     }
    document.querySelector("#catBox").innerHTML = Box;
  }
  displayDataArea(dataArea) {
    let Box = "";
    for (let j = 0; j < dataArea.length; j++) {
      Box += `
         <div class="col-md-3">
            <div class="card cardArea  overflow-hidden position-relative text-center border-0 bg-black py-5 text-white">
              <i class="fa-solid fa-house fa-2xl"></i>
                <h3 id="title" class="mt-3">${dataArea[j].strArea}</h3>
            </div>
          </div>
        `;
     }
    document.querySelector("#areaBox").innerHTML = Box;
  }
  displayDataIng(dataIng) {
    let Box = "";
    // let descripetion = ''
    for (let j = 50 ; j < 150; j++) {
      // descripetion= dataIng[j].strDescription.split(" ").slice(0,10).join(" ")
      Box += `
         <div class="col-md-3">
            <div class="card cardArea  overflow-hidden position-relative text-center border-0 bg-black py-5 text-white">
             <i class="fa-solid fa-bowl-food fa-3x"></i>
                <h3 id="title" class="mt-3">${dataIng[j].strIngredient}</h3>
                <p>${dataIng[j].strDescription}</p>
            </div>
          </div>
        `;
     }
    document.querySelector("#ingredientsBox").innerHTML = Box;
  }
}

