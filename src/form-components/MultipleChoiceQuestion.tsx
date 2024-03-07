import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [currAns, setCurrAns] = useState<string>(options[0]);
    function choose(event: React.ChangeEvent<HTMLSelectElement>) {
        setCurrAns(event.currentTarget.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select value={currAns} onChange={choose}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {currAns === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
