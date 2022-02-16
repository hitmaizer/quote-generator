import React from 'react';
import StyledQuote from '../elements/StyledQuote'

export default function Quote(props) {
    return (
        <StyledQuote>
            <p className="quote__text">{props.currentQuote.quoteText}</p>
        </StyledQuote>
    )
}