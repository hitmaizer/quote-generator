import React from 'react'
import Author from './components/Author'
import Quote from './components/Quote'
import RandomBtn from './components/RandomBtn'

export default function App() {
    const [quotesData, setQuotesData] = React.useState([])
    const [currentQuote, setCurrentQuote] = React.useState({
        quoteText: "Click the button to get a random quote",
        quoteAuthor: "Random Quote Generator",
        quoteGenre: "randomizer"
    })

    React.useEffect(() => {
        fetch("https://quote-garden.herokuapp.com/api/v3/quotes?limit=1000")
            .then(res => res.json())
            .then(data => setQuotesData(data.data))

        
    }, [])

    console.log(currentQuote)

    function getRandomQuote() {
        const randomQuote = Math.floor(Math.random() * quotesData.length)
        setCurrentQuote(quotesData[randomQuote])
    }

    function handleAuthor() {

    }

    return (
        <div className="page__wrapper">
            <RandomBtn randomQuote={getRandomQuote} />
            <div className="quote__container flex-col">
                <Quote data={quotesData}
                currentQuote={currentQuote}  />
                <Author data={quotesData}
                currentQuote={currentQuote}
                handleAuthor={handleAuthor} />
            </div>
        </div>
    )
}