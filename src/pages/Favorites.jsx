import RecipeCard from "../components/RecipeCard";

export default function Favorites() {
  const fav = true;
  return (
    <div className="p-6 min-h-screen bg-base-100 flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <h1 className="capitalize text-3xl font-bold md:text-5xl text-center mb-6">
          My Favorites
        </h1>
        {!fav ? (
          <div className="h-[80vh] flex flex-col items-center justify-center gap-4">
            <img src="/404.svg" className="h-64" alt="No Favorites" />
            <p className="text-lg text-gray-500">No favorite recipes found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(12)].map((_, index) => (
              <RecipeCard key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
