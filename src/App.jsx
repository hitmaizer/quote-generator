import React from 'react'
import Quote from './components/Quote'
import RandomBtn from './components/RandomBtn'

export default function App() {
    const [quotesData, setQuotesData] = React.useState([])

    React.useEffect(() => {
        fetch("https://quote-garden.herokuapp.com/api/v3/quotes?limit=1000")
            .then(res => res.json())
            .then(data => setQuotesData(data))
    }, [])

    console.log(quotesData)

    return (
        <div className="page__wrapper">
            <RandomBtn />
            <Quote />
        </div>
    )
}