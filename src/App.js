import './App.css';
import MainComponent from "./components/MainComponent/MainComponent";
import {BrowserRouter, Route, Routes, Switch} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className='container'>
                <Routes>
                    <Route exact path='/' element={<MainComponent />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}






export default App;
