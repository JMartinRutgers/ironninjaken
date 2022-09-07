import { useState } from "react";
import "./contact.scss";
import ninjaken from "./ninjaken.mp4";

export default function Contact() {
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    };
    return ( <
        div className = "contact"
        id = "contact" >
        <
        div className = "left" >
        <
        video autoPlay loop muted playsInline >
        <
        source src = { ninjaken }
        type = "video/mp4" / >
        <
        /video>

        <
        /div>   <
        div className = "right" >
        <
        h1 > Contact. < /h1>   <
        form onSubmit = { handleSubmit } >
        <
        input type = "text"
        placeholder = "Email" / >
        <
        textarea placeholder = "Message" > < /textarea>  <
        button type = "submit" > Send < /button> {
        message && < span > Thanks, I 'll reply ASAP :)</span>}   <
        /form>   <
        /div>   <
        /div>
    );
}