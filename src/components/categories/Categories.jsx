import { useEffect, useState } from "react";
import { fetchCategories, fetchRecipeByCategory } from "../../api/api";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [recipe, setRecipe] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    const loadCategories = async () => {
      const categoryList = await fetchCategories();
      setCategories(categoryList);
      if (categoryList.length > 0) {
        setActiveCategory(categoryList[0].strCategory);
      }
    };
    loadCategories();
  }, []);

  useEffect(() => {
    const loadRecipes = async () => {
      if (!activeCategory) return;
      const meals = await fetchRecipeByCategory(activeCategory);
      setRecipe(meals);
    };
    loadRecipes();
  }, [activeCategory]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-primary capitalize">
          Pick a Category
        </h1>
        <p className="text-base text-gray-500 mt-1 capitalize">
          Choose what suits you best
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category.idCategory}
            onClick={() => setActiveCategory(category.strCategory)}
            className={`btn btn-sm md:btn-md rounded-full capitalize ${
              activeCategory === category.strCategory
                ? "btn-primary text-white"
                : "btn-outline btn-primary"
            }`}
          >
            {category.strCategory}
          </button>
        ))}
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {recipe.map((meal) => (
          <div
            key={meal.idMeal}
            className="card bg-base-100 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <figure className="h-44 overflow-hidden rounded-t-xl">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body text-center px-4 py-3">
              <h2 className="text-base font-semibold truncate">
                {meal.strMeal}
              </h2>
              <Link
                to={`/recipe/${meal.idMeal}`}
                className="btn btn-sm btn-secondary mt-3 w-full flex items-center justify-center gap-2"
              >
                View Recipe
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
