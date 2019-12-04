import React from 'react';
import "./SocialCard.css";

class SocialCard extends React.Component{

    render(){
        
        return (
            <main className="the_card">
                <blockquote>"When one teaches, two learn."</blockquote>
                <cite>Robert Heilein</cite>
            </main>
        )
    }
}

export default SocialCard;