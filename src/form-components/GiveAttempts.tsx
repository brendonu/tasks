import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsleft, setAttemptsLeft] = useState<number>(3);
    const [attReq, setAttReq] = useState<string>("");
    const increase = () => {
        const strAtt = parseInt(attReq);
        if (!isNaN(strAtt) && strAtt > 0) {
            setAttemptsLeft(attemptsleft + strAtt);
        }
    };
    return (
        <div>
            <h3>Give Attempts</h3>
            Attempts left: {attemptsleft}
            <Form.Group controlId="">
                <Form.Label>Number of attempts requested</Form.Label>
                <Form.Control
                    type="number"
                    value={attReq}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAttReq(event.target.value)
                    }
                />
            </Form.Group>
            <Button
                onClick={() =>
                    attemptsleft > 0
                        ? setAttemptsLeft(attemptsleft - 1)
                        : attemptsleft
                }
                disabled={attemptsleft === 0}
            >
                use
            </Button>
            <Button onClick={increase}>gain</Button>
        </div>
    );
}
