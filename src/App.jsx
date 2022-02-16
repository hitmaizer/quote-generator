import React from 'react'

export default function App() {
    const [quotesData, setQuotesData] = React.useState([])

    React.useEffect(() => {
        fetch("https://quote-garden.herokuapp.com/api/v3/quotes?limit=1000")
            .then(res => res.json())
            .then(data => setQuotesData(data))
    }, [])

    console.log(quotesData)

    return (
        <h1>Hello mate!</h1>
    )
}