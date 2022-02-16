import React from 'react';
import StyledAuthor from '../elements/StyledAuthor'
import { ArrowRight } from '@styled-icons/bootstrap/ArrowRight'

export default function Author(props) {
    return (
        <StyledAuthor>
            <div className="author__btn flex-row" onClick={() => props.handleAuthor(props.currentQuote.quoteAuthor)}>
                <div className="btn__text flex-col">
                    <h3 className="author__name">{props.currentQuote.quoteAuthor}</h3>
                    <p className="quote__genre">{props.currentQuote.quoteGenre}</p>
                </div>
                    <ArrowRight size="32px" className="btn__icon"/>
            </div>
        </StyledAuthor>
    )
}