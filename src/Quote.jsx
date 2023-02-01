import { useEffect, useState } from "react";
import { Button, Card, CardSubtitle, CardTitle, Spinner } from "reactstrap";

export default function Quote() {

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
            }).catch((error) => {
                console.log("Error: ", error);
            }).finally(() => {
                setIsLoading(false);
            });
    }

    useEffect(() => {
        getQuote();
    }, []);


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