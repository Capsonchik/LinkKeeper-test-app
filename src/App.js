import './App.css';

import MainComponent from "./components/MainComponent/MainComponent";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import AddLink from "./components/AddLink/AddLink";


function App() {
    return (
        <BrowserRouter>
            <div className='container'>
                <Switch>
                    <Route exact path='/'>
                        <LoginScreen/>
                    </Route>
                    <Route exact path='/main'>
                        <MainComponent/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}






export default App;
