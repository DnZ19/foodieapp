import './App.css';
import Pages from "./pages/Pages";
import Navigation from "./components/navigation/Navigation";

function App() {
    return (
        <div className="outer-container">
            <div className="inner-container">
                <>
                    <Navigation/>
                    <Pages/>
                </>


            </div>


        </div>
    );
}

export default App;
