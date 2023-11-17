import React from "react";
import {Container} from "semantic-ui-react";
import Dashboard from "./components/Dashboard";
import Navi from "./components/Navi";
import 'semantic-ui-css/semantic.min.css'
import "./App.css"

const App: React.FC = () => {
    return (
        <div className={"App"}>
            <Navi/>
            <Container className={"main"}>
                <Dashboard/>
            </Container>
        </div>
    )
}

export default App
