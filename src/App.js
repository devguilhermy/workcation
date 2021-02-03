import Home from "./pages/Home";
import PropertyCard from "./components/PropertyCard";
import Header from "./components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/property" component={PropertyCard} />
                <Route path="/header" component={Header} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
