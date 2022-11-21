import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import Category from "../components/Category"
import Search from "../components/Search"

const Searched = () => {

    const [searchedRecipes, SetSearchedRecipes] = useState([])
    let params = useParams()

    const getSearched = async(name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        const recipes = await data.json()
        SetSearchedRecipes(recipes.results)

    }

    useEffect(() => {
        getSearched(params.search)
        console.log(params.search)
    }, [params.search])


  return (
    <>
    <Search />
    <Category />
    <div className="grid-cols-4 gap-4 px-4 py-10 bg[#2a303c] lg:grid ">
        {searchedRecipes.map((item) => (
        <div className="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700" key={item.id}>
             <Link to={'/recipe/' + item.id}>
                <img className="w-full rounded-t-lg" src={item.image} alt={item.title} />
            <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">{item.title}</h5>
            </div>
            </Link>
        </div>
        ))}
    </div>

    </>
  )
}

export default Searched
