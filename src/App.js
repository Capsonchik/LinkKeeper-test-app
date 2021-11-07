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
                    <Route path='/main'>
                        <MainComponent/>
                    </Route>
                </Switch>
                <Route exact path ='/main/addlink'>
                    <AddLink />
                </Route>
            </div>
        </BrowserRouter>
    );
}






export default App;
