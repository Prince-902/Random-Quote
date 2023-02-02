import { useEffect, useState } from "react";
import { Button, Card, CardSubtitle, CardTitle, Spinner } from "reactstrap";

const CSS_COLOR_NAMES = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen",
];

export default function Quote() {

    const [backgroundColor, setBackgroundColor] = useState("white");
    const [isLoading, setIsLoading] = useState(true);
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    const getQuote = async () => {
        setIsLoading(true);
        fetch("https://api.quotable.io/random")
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(res);
            }).then((response) => {
                setQuote(response.content);
                setAuthor(response.author);
                getRandomColor();
            }).catch((error) => {
                console.log("Error: ", error);
            }).finally(() => {
                setIsLoading(false);
            });
    }

    const getRandomColor = () => {
        const randomColor = CSS_COLOR_NAMES[Math.floor(Math.random() * CSS_COLOR_NAMES.length)];
        setBackgroundColor(randomColor.toLowerCase());
    }

    useEffect(() => {
        getQuote();
    }, []);

    document.body.style.backgroundColor = backgroundColor;

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                padding: "2%",
            }}
            className="quote">
            <div className="quote-content">
                <Card
                    style={{
                        margin: "24px",
                    }}>
                    {isLoading ?
                        <Spinner
                            color="primary"
                            style={{
                                margin: "24px",
                            }}
                        /> :
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                            }}>
                            <CardTitle
                                style={{
                                    fontSize: "20px",
                                    fontWeight: "500",
                                }}>{quote}</CardTitle>
                            <CardSubtitle
                                style={{
                                    fontSize: "16px",
                                    marginTop: "8px",
                                }}>
                                - {author}
                            </CardSubtitle>
                        </div>
                    }
                </Card>
            </div>

            <Button
                color="primary"
                onClick={getQuote}
                style={{
                    borderRadius: "24px",
                }}
            >Get Quote</Button>
        </div>
    );

}