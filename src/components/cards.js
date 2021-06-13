import React, { useState } from 'react';
import { Card, Button } from 'semantic-ui-react';
import axios from 'axios';

export default function Cards() {
    const [quotes, setQuotes] = useState([]);
    const fetchQuotes = () => {
        axios.get(`https://breaking-bad-quotes.herokuapp.com/v1/quotes`)
            .then((quotesData) => {
                setQuotes(quotesData.data)
            })
    }

    return (
        <div>
            <Card className="card-main">
                <h4 className="title">Breaking Bad Quotes</h4>

                {quotes.map((data) => {
                    return (
                        <div>
                            <p className="quotes">{data.quote}</p>
                            <p className="quotes-by">- {data.author}</p>
                        </div>
                    )
                })}

                <Button
                    color="blue"
                    onClick={fetchQuotes}
                >
                    Click me for quotes
                </Button>
            </Card>
        </div>
    )
}
