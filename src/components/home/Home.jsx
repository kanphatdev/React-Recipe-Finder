import Categories from "../categories/Categories"
import Favorites from "../favorites/Favorites"
import Hero from "../hero/Hero"

const Home = () => {
  return (
    <div>
      <Hero/>
      <Favorites/>
      <Categories/>
    </div>
  )
}
export default Home