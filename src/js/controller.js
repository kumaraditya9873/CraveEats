import * as model from "./model.js";
import recipeView from "./views/recipeView.js";

import "core-js/stable";
import "regenerator-runtime/runtime";
// import recipeView from "./views/recipeView.js";

const recipeContainer = document.querySelector(".recipe");

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    recipeView.renderSpinner();

    // 1 loading recipe
    await model.loadRecipe(id);

    // 2 renering recipe

    recipeView.render(model.state.recipe); //render method is easier way
  } catch (err) {
    alert(err);
  }
};

["hashchange", "load"].forEach((ev) =>
  window.addEventListener(ev, controlRecipes)
);

// window.addEventListener("hashchange", showRecipe);
// window.addEventListener("load", showRecipe);

// const showRecipe = async function () {
//   try {
//     const id = window.location.hash.slice(1);
//     console.log(id);

//     if (!id) return;
//     recipeView.renderSpinner();

//     // loading recipe
//     await model.loadRecipe(id);

//     // 2 rendering recipe
//     recipeView.render(model.state.recipe);
//   } catch (err) {
//     alert(err);
//   }
// };
// window.addEventListener("hashchange", showRecipe);

// // ["haschange", "load"].forEach((ev) => window.addEventListener(ev, showRecipe));

// // window.addEventListener("hashchange", showRecipe);
// // window.addEventListener("load", showRecipe);
