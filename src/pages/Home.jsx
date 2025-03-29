import { Search } from "lucide-react";
import RecipeCard from "../components/RecipeCard";

export default function Home() {
  return (
    <div className="bg-base-100 p-6 flex-1 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-3xl px-4">
        <form className="relative">
          <label className="input input-bordered flex items-center gap-2 w-full shadow-md rounded-lg">
            <Search size={24} className="text-primary" />
            <input
              type="search"
              required
              placeholder="What do you want to cook today?"
              className="flex-1 bg-transparent outline-none text-base"
            />
          </label>
        </form>
        <h1 className="font-bold text-2xl md:text-3xl mt-6 capitalize text-center">
          Recommended Recipes
        </h1>
        <p className="text-base-content/70 capitalize font-semibold text-center mt-2 text-sm tracking-tight">
          Popular Choices
        </p>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </div>
    </div>
  );
}
