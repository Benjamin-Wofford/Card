import React from 'react';
import "./Card.css";

class Card extends React.Component{

    render(){
        
        return (
            <main className="the_card">
                <blockquote>"When one teaches, two learn."</blockquote>
                <cite>Robert Heilein</cite>
            </main>
        )
    }
}

export default Card;