import "./store.scss";

export default function Store() {
    const data = [{
            id: 1,
            name: "Buy",
            title: "Price $50",
            img: "assets/short3.png",
            icon: "assets/twitter.png",
            desc: "Blue Short Muay thai. made in  Thailand.",
        },
        {
            id: 2,
            name: "Buy",
            title: "Price $80",
            img: "assets/short1.png",
            icon: "assets/youtube.png",
            desc: "Black Short Muay thai, Golden color, made in Thailand.",
            featured: true,
        },
        {
            id: 3,
            name: "Buy",
            title: "Price $100",
            img: "assets/short2.png",
            icon: "assets/linkedin.png",
            desc: "Red Short Muay thai. Red and Black color with golden lines, made in Thailand.",
        },
    ];
    return ( <
        div className = "store"
        id = "store" >
        <
        h1 > Store < /h1>   <
        h1 > Muay Thai shorts buy < /h1>   <
        div className = "container" > {
            data.map((d) => ( <
                div className = { d.featured ? "card featured" : "card" } >
                <
                div className = "top" >
                <
                img src = "assets/right-arrow.png"
                className = "left"
                alt = "" / >
                <
                img className = "user"
                src = { d.img }
                alt = "" / >
                <
                img className = "right"
                src = { d.icon }
                alt = "" / >
                <
                /div>   <
                div className = "center" > { d.desc } <
                /div>   <
                div className = "bottom" >

                <
                h3 > { d.name } < /h3>   <
                h4 > { d.title } < /h4>   <
                /div>   <
                /div>
            ))
        } <
        /div>   <
        /div>
    );
}