import React from 'react'
import Author from './components/Author'
import Quote from './components/Quote'
import RandomBtn from './components/RandomBtn'
import FilteredQuote from './components/FilteredQuote'
import { nanoid } from 'nanoid'

export default function App() {
    const [quotesData, setQuotesData] = React.useState([])
    const [filteredQuotes, setFilteredQuotes] = React.useState([])
    const [singleQuote, setSingleQuote] = React.useState(true)
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

    function getRandomQuote() {
        const randomQuote = Math.floor(Math.random() * quotesData.length)
        setCurrentQuote(quotesData[randomQuote])
        setSingleQuote(true)
    }

    function handleAuthor(author) {
        setFilteredQuotes(quotesData.filter(quote => quote.quoteAuthor === author))
        setSingleQuote(!singleQuote)
    }

    const quotesElements = filteredQuotes.map(quote => <FilteredQuote key={nanoid()} 
        text={quote.quoteText} />)

    return (
        <div className="page__wrapper">
            <RandomBtn randomQuote={getRandomQuote} />
            <div className="quote__container flex-col">
                {singleQuote === false && filteredQuotes.length > 0 ? quotesElements : <Quote data={quotesData}
                currentQuote={currentQuote}  />}
                <Author data={quotesData}
                currentQuote={currentQuote}
                handleAuthor={handleAuthor} />
            </div>
        </div>
    )
}