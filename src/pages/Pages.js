import HomePage from "./HomePage";
import {Route, Routes} from "react-router-dom"
import SearchPage from "./SearchPage";
import Recommendation from "./Recommendation";
import VeganPage from "./VeganPage";
import Recipe from "./Recipe";
import DrinkPage from "./DrinkPage";
import ExtendedSearchPage from "./ExtendedSearchPage";

function Pages  ()  {
    return (

            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/search" element={<SearchPage />}/>
                <Route path="/recipe/:id" element={<Recipe />}/>
                <Route path="/daily" element={<Recommendation />}/>


                <Route path="/vegan" element={<VeganPage />}/>
                <Route path="/drinks" element={<DrinkPage />}/>
                <Route path="/extendedSearch" element={<ExtendedSearchPage />}/>
                {/*<Route path="/register" element={<Register />}/>*/}
                {/*<Route path="/login" element={<Login />}/>*/}

            </Routes>


    )
}

export default Pages

// created a Pages area so all the pages can be rendered here and we don;t need all the routing go through the App.js and blow too much of the space there....
