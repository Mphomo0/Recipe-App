import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Cuisine from "./pages/Cuisine";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Searched from "./pages/Searched";
import Recipe from "./pages/Recipe";


function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/recipe/:name" element={<Recipe />} />
    </Routes>
    </>
  );
}

export default App;
