import Home from "./pages/Home";
import PropertyList from "./pages/PropertyList";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/properties" component={PropertyList} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
