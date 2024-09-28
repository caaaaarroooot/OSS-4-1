import jiyun from "./assets/지윤.jpeg";
import "./App.css";
import styled from "styled-components";
import Hello from "./components/hello";

function App() {
    return (
        <MotherDiv>
            <header className="App-header">
                <img src={jiyun} className="App-logo" alt="logo" />
                <img src={jiyun} style={{ width: "170px" }} alt="jiyun" />

                <Hello />
                <p>
                    <span style={{ color: "red", fontSize: "35px" }}>I Edited</span> <code>src/App.js</code> and saved
                    to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </MotherDiv>
    );
}

const MotherDiv = styled.div`
    width: 100vw;
    height: 100vh;
`;

export default App;
