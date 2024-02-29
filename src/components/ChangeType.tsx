import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [qt, setQt] = useState<QuestionType>("short_answer_question");
    function ct(): void {
        setQt(
            qt === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }
    return (
        <div>
            <Button onClick={ct}>Change Type</Button>
            {qt === "short_answer_question" && <div>Short Answer</div>}
            {qt === "multiple_choice_question" && <div>Multiple Choice</div>}
        </div>
    );
}
