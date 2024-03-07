import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const ans = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(event.target.value);
    };
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="">
                <Form.Label>answer: </Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    value={answer}
                    onChange={ans}
                />
            </Form.Group>
            The answer is {answer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
