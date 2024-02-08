import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Brendon Uzoigwe UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            <h1>My header</h1>
            <img
                src="data:image/jpeg;base64,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"
                alt="Me"
            />
            <p>Things I like:</p>
            <ul>
                <li>Movies</li>
                <li>Food</li>
                <li>Gym</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div className="App-rect">First column.</div>
                    </Col>
                    <Col>
                        <div className="App-rect">Second column.</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
