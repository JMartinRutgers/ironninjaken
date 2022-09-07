import "./portfolio.scss";
// import ReactDOM from "react-dom";
import Me from "./Me.mp4";
import CTA from './CTA'
// import { Height } from "@material-ui/icons";
// import {BsWhatsapp, BsMailbox} from 'react-icons/bs';

export default function Portfolio() {
    return ( <
        div className = "portfolio"
        id = "portfolio" >
        <
        video autoPlay loop muted playsInline >
        <
        source src = { Me }
        type = "video/mp4" / >
        <
        /video>   <
        div className = "rapper" >
        <
        CTA / >
        <
        /div> <
        /div> 

    );
}
// const rootElement = document.getElementById("root");
// ReactDOM.render(<ironninjaken />, rootElement);