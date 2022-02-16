import React from 'react';
import StyledQuote from '../elements/StyledQuote';

export default function FilteredQuote(props) {
    return (
        <StyledQuote>
            <p className="quote__text">{props.text}</p>
        </StyledQuote>
    )
}