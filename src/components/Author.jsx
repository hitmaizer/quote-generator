import React from 'react';
import StyledAuthor from '../elements/StyledAuthor'
import { ArrowRight } from '@styled-icons/bootstrap/ArrowRight'

export default function Author() {
    return (
        <StyledAuthor>
            <div className="author__btn flex-row">
                <div className="btn__text flex-col">
                    <h3 className="author__name">Bill Gates</h3>
                    <p className="quote__genre">business</p>
                </div>
                    <ArrowRight size="32px" className="btn__icon"/>
            </div>
        </StyledAuthor>
    )
}