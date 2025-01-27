import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setProgress] = useState<boolean>(false);
    function start(): void {
        setProgress(true);
        setAttempts(attempts - 1);
    }
    return (
        <div>
            <div>{attempts}</div>
            <Button
                onClick={start}
                disabled={inProgress == true || attempts == 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => setProgress(false)}
                disabled={inProgress == false}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => setAttempts(attempts + 1)}
                disabled={inProgress == true}
            >
                Mulligan
            </Button>
        </div>
    );
}
