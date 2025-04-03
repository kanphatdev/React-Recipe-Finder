export const fetchChickenRecipe = async () => {
  const MAIN_INGREDIENT_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast";
  try {
    const res = await fetch(MAIN_INGREDIENT_URL);
    const data = await res.json();
    return data.meals[1];
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchBurgerRecipe = async () => {
  const BURGER_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=Burger";
  try {
    const res = await fetch(BURGER_URL);
    const data = await res.json();
    return data.meals;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// ✅ ฟังก์ชันใหม่สำหรับดึงเมนูซีฟู้ด
export const fetchSeafoodRecipe = async () => {
  const SEAFOOD_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";
  try {
    const res = await fetch(SEAFOOD_URL);
    const data = await res.json();
    return data.meals.slice(0, 8); // ดึงมา 8 รายการ
  } catch (error) {
    console.error(error);
    return [];
  }
};
