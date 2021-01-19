import Home from "./pages/Home";
import PropertyCard from "./components/PropertyCard";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/property" component={PropertyCard} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
