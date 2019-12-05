import React from 'react';
import photo from '../facebook.png';
import './ShareBar.css';

class ShareBar extends React.Component{

    render(){

        return(
            <form className="sharebar">
                <ul>
                    <li><input id="fbbutton" type="image" src={photo} alt="facebook icon" /></li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </form>
        )
    }
}

export default ShareBar;