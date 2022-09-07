import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
// import Me from './assets/Me.mp4'

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Black Belt", "Karate", "Fighter", "40 years experience"],
        });
    }, []);


    return ( <
        div className = "intro"
        id = "intro" >
        <
        div className = "left" >
        <
        div className = "imgContainer" >
        <
        img src = "./assets/ken2.png"
        alt = "" / >
        <
        /div>  <
        /div>  <
        div className = "right" >
        <
        div className = "wrapper" >
        <
        h4 > "I have been training for more than 40 years </h4> <
        h4 > in the art and philosophy of the bushido.
        "</h4>


        <
        h3 > < /h3>  <
        h1 > Master Ken < /h1>  <
        h3 > Muay Thai < span ref = { textRef } > < /span>  <
        /h3>  <
        /div>  <
        a href = "#portfolio" >
        <
        img src = "assets/down.png"
        alt = "" / >
        <
        /a>  <
        /div>  <
        /div>
    );
}