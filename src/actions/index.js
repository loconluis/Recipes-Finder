export const SET_RECIPES = 'SET_RECIPES';
export const FAVORITE_RECIPES = 'FAVORITES_RECIPES';

export function setRecipes(items) {
  return {
    type: SET_RECIPES,
    items,
  }
}

export function favoriteRecipe(recipe) {
  return {
    type: FAVORITE_RECIPES,
    recipe,
  }
}