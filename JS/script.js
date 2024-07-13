//=========================================== Variables ====================================
let userName = document.getElementById("userNane");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let age = document.getElementById("age");
let Password = document.getElementById("Password");
let repassword = document.getElementById("repassword");

//=========================================== Import Classes ====================================

import { Settings } from "./settings.js";
import { Display } from "./display.js";
import { searchByName } from "./search.js";
import { getCategories } from "./categories.js";
import { AreaData } from "./area.js";
import { Ingredients } from "./ingredients.js";

let newSettings = new Settings();
let newDisplay = new Display();
let newSearchByName = new searchByName();
let newgetCategories = new getCategories();
let newAreaData = new AreaData();
let newIngredients = new Ingredients();

//=========================================== Show / Hide Sections  ====================================

$("#openMenu").on("click", function () {
  $("#sideBar").animate({ left: "0px" }, 500);
  $("#openMenu").hide(0);
  $("#closeMenu").show(0);
  // $("ul li").slideUp(500)
});
$("#closeMenu").on("click", function () {
  $("#sideBar").animate({ left: "-250px" }, 500);
  $("#openMenu").show(0);
  $("#closeMenu").hide(0);
  // $("ul li").slideDwon(500)
});
$("#search").on("click", function () {
  $("#meals").hide(200);
  $("#sectionSearch").show(200);
  $("#IngredientsData").hide(200);
  $("#contactData").hide(200);
  $("#sideBar").animate({ left: "-250px" }, 200);
  $("#categoriesData").hide(200);
  $("#AreaData").hide(200);
  $("#closeMenu").hide(0);
  $("#openMenu").show(0);
});
$("#categories").on("click", function () {
  $("#sectionSearch").hide(200);
  $("#categoriesData").show(200);
  $("#IngredientsData").hide(200);
  $("#contactData").hide(200);
  $("#AreaData").hide(200);
  $("#sideBar").animate({ left: "-250px" }, 200);
  $("#closeMenu").hide(0);
  $("#openMenu").show(0);
});
$("#area").on("click", function () {
  $("#sectionSearch").hide(200);
  $("#categoriesData").hide(200);
  $("#IngredientsData").hide(200);
  $("#contactData").hide(200);
  $("#AreaData").show(200);
  $("#sideBar").animate({ left: "-250px" }, 200);
  $("#closeMenu").hide(0);
  $("#openMenu").show(0);
});
//contactData
$("#ingredients").on("click", function () {
  $("#sectionSearch").hide(200);
  $("#IngredientsData").show(200);
  $("#categoriesData").hide(200);
  $("#contactData").hide(200);
  $("#AreaData").hide(200);
  $("#sideBar").animate({ left: "-250px" }, 200);
  $("#closeMenu").hide(0);
  $("#openMenu").show(0);
});

//================================================== Valiadation Contatct ======================================
function validateUserName() {
  if (/^[a-z0-9]{3,10}$/.test(userName.value) == true) {
    userName.classList.add("is-valid");
    userName.classList.remove("is-invalid");
    $(".alert-name").hide(0);
    return true;
  } else {
    userName.classList.add("is-invalid");
    $(".alert-name").show(100);
  }
}
function validateUserEmail() {
  if (/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(email.value) == true) {
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
    $(".alert-email").hide(0);
    return true;
  } else {
    email.classList.add("is-invalid");
    $(".alert-email").show(100);
  }
}
function validateUserPhone() {
  if (
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
      phone.value
    ) == true
  ) {
    phone.classList.add("is-valid");
    phone.classList.remove("is-invalid");
    $(".alert-phone").hide(0);
    return true;
  } else {
    phone.classList.add("is-invalid");
    $(".alert-phone").show(100);
  }
}
function validateUserAge() {
  if (/^(1[89]|[2-9][0-9])$/.test(age.value) == true) {
    age.classList.add("is-valid");
    age.classList.remove("is-invalid");
    $(".alert-age").hide(0);
    return true;
  } else {
    age.classList.add("is-invalid");
    $(".alert-age").show(100);
  }
}
function validateUserPassword() {
  if (
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(Password.value) == true
  ) {
    Password.classList.add("is-valid");
    Password.classList.remove("is-invalid");
    $(".alert-password").hide(0);
    return true;
  } else {
    age.classList.add("is-invalid");
    $(".alert-password").show(100);
  }
}
function validateUserRePassword() {
  if (Password.value == repassword.value) {
    repassword.classList.add("is-valid");
    repassword.classList.remove("is-invalid");
    $(".alert-repassword").hide(0);
    return true;
  } else {
    age.classList.add("is-invalid");
    $(".alert-repassword").show(100);
  }
}
function callAllFunc() {
  $("#userNane").on("keyup", function () {
    validateUserName();
  });
  $("#email").on("keyup", function () {
    validateUserEmail();
  });
  $("#phone").on("keyup", function () {
    validateUserPhone();
  });
  $("#age").on("keyup", function () {
    validateUserAge();
  });
  $("#Password").on("keyup", function () {
    validateUserPassword();
  });
  $("#repassword").on("keyup", function () {
    validateUserRePassword();
  });
  function activateBtn() {
    if (
      validateUserName() == true &&
      validateUserEmail() == true &&
      validateUserPhone() == true &&
      validateUserAge() == true &&
      validateUserPassword() == true &&
      validateUserRePassword() == true
    ) {
      document.getElementById("btnSubmit").classList.remove("disabled");
    } else {
      document.getElementById("btnSubmit").classList.add("disabled");
    }
  }
  activateBtn();
}

$("#contctUs").on("click", function () {
  $("#meals").hide(200);
  $("#contactData").show(200);
  $("#sectionSearch").hide(200);
  $("#IngredientsData").hide(200);
  $("#categoriesData").hide(200);
  $("#AreaData").hide(200);
  $("#sideBar").animate({ left: "-250px" }, 200);
  $("#closeMenu").hide(0);
  $("#openMenu").show(0);
  callAllFunc();
});




/*
  // if(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(email.value)== true) {
  //   // console.log("truuuuuuuuuuuuuuuuue");
  //   email.classList.add("is-valid");
  //   email.classList.remove("is-invalid");
  //   $(".alert-email").hide(0)
  // }else {
  //   email.classList.add("is-invalid");
  //   $(".alert-email").show(100)
  
  // let regex = {
  //   userName: /^[A-Z][a-z0-9]{3,10}$/,
  //   email: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
  //   phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
  //   age: /^(1[89]|[2-9][0-9])$/,
  //   Password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,

  */
