import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UtensilsCrossed, Loader2, ArrowBigLeft, ArrowLeft } from "lucide-react";

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  const { id } = useParams();

  const URL_DETAIL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

  useEffect(() => {
    const fetchRecipeDetail = async () => {
      try {
        const res = await fetch(`${URL_DETAIL}${id}`);
        const data = await res.json();
        const meal = data.meals[0];
        setRecipe(meal);

        const tempIngredients = [];
        const tempMeasures = [];

        for (let i = 1; i <= 20; i++) {
          const ingredient = meal[`strIngredient${i}`];
          const measure = meal[`strMeasure${i}`];
          if (ingredient && ingredient.trim() !== "") {
            tempIngredients.push(ingredient);
            tempMeasures.push(measure);
          }
        }

        setIngredients(tempIngredients);
        setMeasures(tempMeasures);
      } catch (error) {
        console.error("Error fetching recipe detail:", error);
      }
    };

    fetchRecipeDetail();
  }, [id]);

  if (!recipe) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="animate-spin w-10 h-10 text-primary" />
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="w-full lg:w-1/2 max-h-[400px] overflow-hidden">
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="object-cover w-full h-full"
          />
        </figure>
        <div className="card-body w-full lg:w-1/2">
          <h2 className="card-title text-2xl font-bold text-primary mb-4">
            {recipe.strMeal}
          </h2>

          <div className="divider text-sm text-gray-400 uppercase font-medium">
            <UtensilsCrossed className="inline-block w-4 h-4 mr-2" />
            Ingredients
          </div>

          <ul className="menu bg-base-100 rounded-box w-full shadow-md list">
            {ingredients.map((ingredient, index) => (
              <li
                key={index}
                className="flex justify-between items-center px-4 py-2 list-row"
              >
                <span className="capitalize font-medium">{ingredient}</span>
                <span className="text-xs text-gray-500 uppercase font-semibold">
                  {measures[index]}
                </span>
              </li>
            ))}
          </ul>
          <div className="card-actions justify-end">
            <Link to={".."} className="btn btn-primary  btn-dash capitalize"><ArrowLeft/> back</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
