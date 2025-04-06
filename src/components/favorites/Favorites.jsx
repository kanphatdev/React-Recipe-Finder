import { useEffect, useState } from "react";
import { fetchFavoritesRecipe } from "../../api/api";


const Favorites = () => {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const loadFavorites = async () => {
      const data = await fetchFavoritesRecipe();
      setRecipe(data);
    };
    loadFavorites();
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 capitalize text-primary">
        Our Customer Favorites
      </h1>

      {recipe.length > 0 ? (
        <div className="carousel w-full rounded-xl overflow-hidden">
          {recipe.map((meal, index) => {
            const slideId = `slide${index + 1}`;
            const prevId = `#slide${index === 0 ? recipe.length : index}`;
            const nextId = `#slide${index === recipe.length - 1 ? 1 : index + 2}`;

            return (
              <div key={meal.idMeal} id={slideId} className="carousel-item relative w-full">
                <div className="relative w-full h-64 sm:h-80 md:h-[22rem] lg:h-[26rem]">
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="w-full h-full object-cover"
                  />

                  {/* Badge inside image */}
                  <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm font-medium">
                    {meal.strMeal}
                  </div>
                </div>

                {/* Carousel arrows */}
                <div className="absolute left-4 right-4 top-1/2 flex justify-between transform -translate-y-1/2">
                  <a href={prevId} className="btn btn-circle btn-sm md:btn-md">
                    ❮
                  </a>
                  <a href={nextId} className="btn btn-circle btn-sm md:btn-md">
                    ❯
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        // Loading Skeleton
        <div className="flex flex-col items-center gap-4">
          <div className="skeleton h-16 w-16 rounded-full"></div>
          <div className="skeleton h-6 w-40"></div>
          <div className="skeleton h-32 w-full"></div>
        </div>
      )}
    </section>
  );
};

export default Favorites;
