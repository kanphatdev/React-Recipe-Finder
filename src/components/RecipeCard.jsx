import { Heart, HeartPulse, Soup } from "lucide-react";

export default function RecipeCard() {
  return (
    <div className="flex justify-center">
      <div className="card bg-base-300 w-80 shadow-lg rounded-lg overflow-hidden">
        <figure className="relative">
          <img src="/1.jpg" alt="Roasted Chicken" className="w-full h-48 object-cover" />
          <div className="badge badge-secondary absolute bottom-2 left-2 capitalize flex items-center gap-1 p-2">
            <Soup size={16} /> 4 servings
          </div>
          <button className="btn btn-circle btn-outline absolute top-2 right-2">
            <Heart className="text-red-500" />
          </button>
        </figure>
        <div className="card-body flex flex-col gap-2">
          <h2 className="card-title capitalize text-lg font-semibold tracking-wide">Roasted Chicken</h2>
          <p className="text-gray-500 capitalize text-sm">Turkish Kitchen</p>
          <div className="flex flex-wrap gap-2 mt-2">
            <div className="badge badge-outline badge-info capitalize text-xs flex items-center gap-1 p-2">
              Gluten Free <HeartPulse size={14} />
            </div>
            <div className="badge badge-outline badge-success capitalize text-xs flex items-center gap-1 p-2">
              Heart Healthy <HeartPulse size={14} />
            </div>
          </div>
          <div className="card-actions mt-3">
            <button className="btn btn-primary btn-block capitalize">View Recipe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
