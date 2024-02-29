import React, { useState } from "react";
import { Button } from "react-bootstrap";

enum Holiday {
    Halloween = "Holiday: 🎃",
    FourthOfJuly = "Holiday: 🇺🇸",
    Christmas = "Holiday: 🎄",
    Thanksgiving = "Holiday: 🦃",
    Easter = "Holiday: 🐣"
}
export function CycleHoliday(): JSX.Element {
    const [day, setDay] = useState<Holiday>(Holiday.Halloween);

    function alph(): void {
        if (day === Holiday.Halloween) {
            setDay(Holiday.Thanksgiving);
        } else if (day === Holiday.FourthOfJuly) {
            setDay(Holiday.Christmas);
        } else if (day === Holiday.Christmas) {
            setDay(Holiday.Easter);
        } else if (day === Holiday.Thanksgiving) {
            setDay(Holiday.FourthOfJuly);
        } else {
            setDay(Holiday.Halloween);
        }
    }

    function year(): void {
        if (day == Holiday.Halloween) {
            setDay(Holiday.Thanksgiving);
        } else if (day === Holiday.FourthOfJuly) {
            setDay(Holiday.Halloween);
        } else if (day === Holiday.Christmas) {
            setDay(Holiday.Easter);
        } else if (day === Holiday.Thanksgiving) {
            setDay(Holiday.Christmas);
        } else {
            setDay(Holiday.FourthOfJuly);
        }
    }

    return (
        <div>
            <p>{day}</p>
            <Button onClick={alph}>Advance by Alphabet</Button>
            <Button onClick={year}>Advance by Year</Button>
        </div>
    );
}
