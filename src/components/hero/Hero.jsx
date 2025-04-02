import { useEffect, useState } from "react";
import { fetchChickenRecipe } from "../../api/api";
import { fetchBurgerRecipe } from "../../api/api";

const Hero = () => {
  const [burgerRecipe, setBurgerRecipe] = useState(null);
  const [chickenRecipe, setChickenRecipe] = useState(null);

  useEffect(() => {
    const getChickenRecipe = async () => {
      const recipe = await fetchChickenRecipe();
      setChickenRecipe(recipe);
    };
    getChickenRecipe();
  }, []);

  useEffect(() => {
    const getBurgerRecipe = async () => {
      const recipes = await fetchBurgerRecipe();
      setBurgerRecipe(recipes);
    };
    getBurgerRecipe();
  }, []);

  return (
    <div className="hero min-h-[80vh] bg-base-200" style={{ backgroundImage: `url(${chickenRecipe?.strMealThumb})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-white px-6 md:px-12 lg:px-24">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold">Find Your Favorite Meal!</h1>
          <p className="py-4 text-base md:text-lg">
            Discover amazing recipes and try something new today. Explore our collection of delicious meals!
          </p>
          <div className="flex gap-4 justify-center">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-accent capitalize">Explore Recipes</button>
          </div>
          {burgerRecipe && (
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
              {burgerRecipe.slice(0, 6).map((burger, index) => (
                <img key={index} src={burger.strMealThumb} alt={burger.strMeal} className="rounded-lg shadow-lg w-full h-32 object-cover" />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
