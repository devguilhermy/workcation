import Home from "./pages/Home";
import PropertyList from "./pages/PropertyList";
import ProfileDropdown from "./components/ProfileDropdown";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/properties" component={PropertyList} />
                <Route path="/drop" component={ProfileDropdown} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
