import { useEffect, useState } from "react";
import { fetchSeafoodRecipe } from "../../api/api";


const Favorites = () => {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const loadRecipe = async () => {
      const data = await fetchSeafoodRecipe();
      setRecipe(data);
    };
    loadRecipe();
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto mt-6">
      <h1 className="text-3xl font-bold text-center mb-6 capitalize">Our Customer Favorites</h1>

      {recipe.length > 0 ? (
        <div className="carousel w-full h-[300px] md:h-[350px] lg:h-[400px] relative rounded-lg overflow-hidden">
          {recipe.map((meal, index) => (
            <div
              key={index}
              id={`slide${index + 1}`}
              className="carousel-item w-full h-full relative flex justify-center items-center"
            >
              {/* รูปภาพเมนู ขนาดถูกปรับให้พอดีกับ Carousel */}
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-full object-cover rounded-lg"
              />

              {/* Badge ชื่อเมนู อยู่บนรูปภาพ */}
              <div className="absolute top-3 left-3 badge  bg-opacity-80 badge-soft badge-accent text-sm md:text-base">
                {meal.strMeal}
              </div>

              {/* ปุ่มเลื่อนซ้าย-ขวา */}
              <div className="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href={`#slide${index === 0 ? recipe.length : index}`} className="btn btn-circle btn-sm md:btn-md">❮</a>
                <a href={`#slide${index === recipe.length - 1 ? 1 : index + 2}`} className="btn btn-circle btn-sm md:btn-md">❯</a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Skeleton Loading ขณะโหลดข้อมูล
        <div className="flex flex-col items-center gap-4">
          <div className="skeleton h-16 w-16 rounded-full"></div>
          <div className="skeleton h-6 w-40"></div>
          <div className="skeleton h-32 w-full"></div>
        </div>
      )}
    </div>
  );
};

export default Favorites;
