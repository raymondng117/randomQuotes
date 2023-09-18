import React, { useEffect, useState } from "react";



const API =
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/";

const DisplayContent = () => {
    const [quoteData, setQuoteData] = useState([]);
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [error, setError] = useState("");
    const [color, setColor] = useState('')
    const [randomQuoteIndex, setRandomQuoteIndex] = useState(0);
    const [randomColorIndex, setRandomColorIndex] = useState(0);


    const colors = ["#313866", "#216869", "#6D2E5B", "#D0576B", "#586E6B", "#A5BE00", "#FF9400", "#F02E18"];


    useEffect(() => {
        try {
            fetch(API)
                .then((res) => {
                    if (!res.ok) {
                        throw Error("could not fetch the data for that resource");
                    }
                    return res.json();
                })
                .then((data) => {
                    setQuoteData(data.quotes);
                    const randomQuoteIndex = Math.floor(Math.random() * data.quotes.length);
                    const randomColorIndex = Math.floor(Math.random() * colors.length);
                    setRandomQuoteIndex(randomQuoteIndex);
                    setRandomColorIndex(randomColorIndex);
                    setQuote(data.quotes[randomQuoteIndex].quote);
                    setAuthor(data.quotes[randomQuoteIndex].author);
                    setColor(colors[randomColorIndex])
                });
        } catch (e) {
            setError(e);
        }
    }, []);

    const handleClick = () => {
        const randomQuoteIndex = Math.floor(Math.random() * quoteData.length);
        const randomColorIndex = Math.floor(Math.random() * colors.length);
        setRandomQuoteIndex(randomQuoteIndex);
        setRandomColorIndex(randomColorIndex);
        setQuote(quoteData[randomQuoteIndex].quote);
        setAuthor(quoteData[randomQuoteIndex].author);
        setColor(colors[randomColorIndex])
    };

    return (
        <div className='d-flex justify-content-center align-items-center min-vh-100'>
            <style>
                {`
                body {
                    background-color: ${color};
                }
            `}
            </style>

            <div id="quote-box" className="col-9 border bg-white p-4 justify-content-center align-items-center">
                <div className="row mb-3">
                    <div className="quote-text col-12 ">
                        <i className="fa fa-quote-left fa-2x me-2 " style={{ color: color }}> </i>
                        <span id="text" className="display-6 fw-bold " style={{ color: color }}>{quote}</span>
                    </div>
                </div>

                <div className="row text-end mb-20">
                    <div>
                        <h6 id="author text-center col-3" style={{ color: color }}>{"-" + author}</h6>
                    </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-40">
                    <div className="d-flex">
                        <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fintent%2Ftweet" ><i className="fa fa-twitter icon"></i></a>
                        <a href="https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DJoshua%2BJ.%2BMarine%26content%3DChallenges%2Bare%2Bwhat%2Bmake%2Blife%2Binteresting%2Band%2Bovercoming%2Bthem%2Bis%2Bwhat%2Bmakes%2Blife%2Bmeaningful.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button"><i className="fa fa-tumblr icon" ></i></a>
                    </div>
                    <button id="new-quote" className="btn" style={{ background: color, color: "white" }} onClick={handleClick}>
                        Next Quote
                    </button>
                </div>
            </div>
        </div>

    );
};

export default DisplayContent;
