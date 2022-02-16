import React from 'react';
import { Refresh } from '@styled-icons/ionicons-solid/Refresh'

export default function RandomBtn() {
    return (
        <div className="random__quote flex-row">
            <button className="random__btn flex-row">
                <span className="btn__text">Get random quote</span>
                <Refresh size="24px" />
            </button>
        </div>
    )
}