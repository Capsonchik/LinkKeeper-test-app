import React, {useEffect, useState} from "react";
import Header from "./header/Header";
import Content from "./content/Content";
import Footer from "./footer/Footer";

// API = https://anatolykulikov.ru/demo/linkeeper/

function MainComponent() {
    const [state, setState] = useState({
        data: {
            tags:[],
            links:[]
        },
        response: ''
    })

    useEffect(() => {
        fetch('https://anatolykulikov.ru/demo/linkeeper/')
            .then(response => {return response.json()})
            .then(json => {
                setState((state) => ({
                    ...state,
                    data: json.data,
                    response: json.response
                }))
            })
    }, [])

    return(
        <div>
            <Header data={state.data.tags} />
            <Content data ={state.data.links} />
            <Footer />
        </div>
    )
}

export default MainComponent;



