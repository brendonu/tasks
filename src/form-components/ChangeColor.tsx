import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>("");

    const colors = [
        { name: "Red", value: "red" },
        { name: "Green", value: "green" },
        { name: "Blue", value: "blue" },
        { name: "Orange", value: "orange" },
        { name: "Purple", value: "purple" },
        { name: "Cyan", value: "cyan" },
        { name: "Magenta", value: "magenta" },
        { name: "White", value: "white" }
    ];

    function handleColorChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectedColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color, index) => (
                <Form.Check
                    key={index}
                    inline
                    type="radio"
                    id={`color-${color.value}`}
                    label={color.name}
                    value={color.value}
                    checked={selectedColor === color.value}
                    onChange={handleColorChange}
                    style={{ backgroundColor: color.value }}
                />
            ))}
            <div>
                You have chosen
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: selectedColor, padding: "5px" }}
                >
                    {selectedColor}
                </span>
            </div>
        </div>
    );
}
