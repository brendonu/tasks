import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [answer, setAnswer] = useState<boolean>(false);
    return (
        <span>
            <Button onClick={() => setAnswer(!answer)}>Reveal Answer</Button>
            {answer && <div>42</div>}
        </span>
    );
}
