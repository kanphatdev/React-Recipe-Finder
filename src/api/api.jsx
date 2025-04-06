// 🔹 ดึงเมนูจากส่วนผสมหลัก "chicken_breast"
export const fetchChickenRecipe = async () => {
  const CHICKEN_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast";
  try {
    const res = await fetch(CHICKEN_URL);
    const data = await res.json();
    return data.meals?.[1] || null; // ดึงรายการที่ 2
  } catch (error) {
    console.error("Error fetching chicken recipe:", error);
    return null;
  }
};

// 🔹 ดึงเมนูที่ค้นหาด้วยชื่อ "Burger"
export const fetchBurgerRecipe = async () => {
  const BURGER_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=Burger";
  try {
    const res = await fetch(BURGER_URL);
    const data = await res.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching burger recipe:", error);
    return [];
  }
};

// 🔹 ดึงเมนูซีฟู้ด (จำกัด 8 รายการ)
export const fetchSeafoodRecipe = async () => {
  const SEAFOOD_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";
  try {
    const res = await fetch(SEAFOOD_URL);
    const data = await res.json();
    return data.meals?.slice(0, 8) || [];
  } catch (error) {
    console.error("Error fetching seafood recipes:", error);
    return [];
  }
};

// 🔹 ดึงรายการหมวดหมู่อาหาร (จำกัด 9 หมวด)
export const fetchCategories = async () => {
  const URL_CATEGORIES = "https://www.themealdb.com/api/json/v1/1/categories.php";
  try {
    const res = await fetch(URL_CATEGORIES);
    const data = await res.json();
    return data.categories?.slice(0, 9) || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

// 🔹 ดึงเมนูตามหมวดหมู่ที่เลือก (จำกัด 11 รายการ)
export const fetchRecipeByCategory = async (category) => {
  const URL_RECIPE = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  try {
    const res = await fetch(URL_RECIPE);
    const data = await res.json();
    return data.meals?.slice(0, 11) || [];
  } catch (error) {
    console.error(`Error fetching recipes for category "${category}":`, error);
    return [];
  }
};
export const fetchFavoritesRecipe = async () => {
  const FAVORITES_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?a=American"; // ตัวอย่าง URL สำหรับเมนูที่เป็น favorites
  try {
    const res = await fetch(FAVORITES_URL);
    const data = await res.json();
    return data.meals || []; // ส่งคืนเมนูที่ได้ (หากไม่พบให้ส่งเป็น array ว่าง)
  } catch (error) {
    console.error("Error fetching favorite recipes:", error);
    return [];
  }
};
