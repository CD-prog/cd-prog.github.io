import React from 'react'

import { cardData } from './constants';
import Project from './Project';

function Portfolio() {
    return (
        <>
            <br />
            <br />
            <main className="row slide-in-elliptic-bottom-bck">
                {cardData.map((card, idx) => {
                    if (card.placeHolder) {
                        return <div key={idx} className="w-100"></div>
                    }
                    return <Project key={idx}  {...card} />
                })}
            </main>
        </>
    )
}

export default Portfolio;