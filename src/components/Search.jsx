import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Search = () => {
    const [input,setInput] = useState("")
    const navigate = useNavigate()

    const handleChange = (e) => {
         e.preventDefault()
        setInput(e.target.value);

    };
    
    const sumbitHandler = (e) => {
        e.preventDefault()
        navigate('/searched/' + input)

    }

  return (
    <>
    <div className="flex justify-center">
  <div className="mt-10 mb-3 xl:w-96">
    <form onSubmit={sumbitHandler}>
    <input
      onChange={handleChange}
      value={input}
      type="search"
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleSearch"
      placeholder="Search Recipes"
    />
    </form>
  </div>
</div>
    </>
  )
}

export default Search
