import Home from "./Home";
import {Route, Routes} from "react-router-dom"
import SearchPage from "./SearchPage";
import Recommendation from "./Recommendation";
import Recipe from "./Recipe";

function Pages  ()  {
    return (

            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/search" element={<SearchPage />}/>
                <Route path="/recipe/:id" element={<Recipe />}/>
                <Route path="/daily" element={<Recommendation />}/>


                {/*<Route path="/randomizer" element={<Randomizer />}/>*/}
                {/*<Route path="/register" element={<Register />}/>*/}
                {/*<Route path="/login" element={<Login />}/>*/}

            </Routes>


    )
}

export default Pages

// created a Pages area so all the pages can be rendered here and we don;t need all the routing go through the App.js and blow too much of the space there....
