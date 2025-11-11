import React, { useEffect, useState } from "react";
import "./Advice.css";
import dice from "../Assets/icon-dice.svg";
import desktopDivider from "../Assets/pattern-divider-desktop.svg";

const Advice = () => {
    const[data,setData] = useState({
    id: "",
    advice: "",
    });

    const [buttonClick, setButtonClick] = useState(0);

    useEffect(() => {
        fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => {
        console.log(data);
        setData({
            id: data.slip.id,
            advice: data.slip.advice,
        });
        })
        .catch((err)=>console.error("Error fetching advice:", err));
    }, [buttonClick]);
    
    const getAdvice = () => {
        setButtonClick(buttonClick + 1);
    };

    return (
    <div className="container">
        <div className="wrapper">
            <div className="card">
                <div className="id">
                    <p> ADVICE #{data.id} </p>
                </div>
                <div className="advice">
                    <p> “{data.advice}” </p>
                </div>
                <div className="image">
                    <img src={desktopDivider} alt="Divider" />
                </div>
            </div>
            <div className="dice" onClick={getAdvice}>
                <img src={dice} alt="Dice" />
            </div>
        </div>
    </div>
    );
};
export default Advice;

