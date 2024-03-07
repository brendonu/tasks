import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="editMode-check"
                checked={editMode}
                onChange={updateMode}
            />
            {editMode ? (
                <div>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </Form.Group>
                    <Form.Check
                        inline
                        type="checkbox"
                        onChange={updateStudent}
                        id="response-good"
                        label="Are you a student?"
                        value="yes"
                        checked={isStudent}
                    />
                </div>
            ) : (
                <div>
                    {name} {isStudent ? "is a student" : "is not a student"}.
                </div>
            )}
        </div>
    );
}
