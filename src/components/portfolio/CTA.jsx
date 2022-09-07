import React from 'react'
// import CV from '../../assets/card.png'

const CTA = () => {
    return ( <
        div id = "vanta" >
        <
        div className = "head" >
        <
        h2 > Social Media < /h2> <
        img src = "./assets/ken.jpg" / >
        <
        h6 > @Ken Gartman < /h6> <
        /div>

        <
        ul >
        <
        li >
        <
        a href = "https://www.instagram.com/hartman34/?hl=en" >
        <
        img src = "./assets/instagram.svg"
        alt = "instagram"
        width = "20" / > Instagram <
        /a> <
        /li> <
        li >
        <
        a href = "https://www.youtube.com/channel/UCxSa46KY0ytaBka-7bF79pg" >
        <
        img src = "./assets/youtube.svg"
        alt = "YouTube"
        width = "20" / > YouTube

        <
        /a> <
        /li> <
        li >
        <
        a href = "https://twitter.com/IronNinjaSystem" >
        <
        img src = "./assets/twitter.svg"
        alt = "Twitter"
        width = "20" / > Twitter <
        /a> <
        /li>

        <
        /ul> <
        div className = "cta" >
        <
        a href = "#contact"
        className = 'btn btn-primary' > Contact me < /a>   <
        /div> <
        /div>
    )
}

export default CTA