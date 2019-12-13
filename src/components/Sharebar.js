import React from 'react';
import fb from '../facebook.svg';
import twitter from '../twitter.svg';
import ig from '../instagram.svg';

class Sharebar extends React.Component {

    render(){
        return (
        <div className='sharebar'>
            <img className='fb' src={fb} alt='Facebook icon'></img>
            <img className='twitter' src={twitter} alt='Twitter icon'></img>
            <img className='ig' src={ig} alt='Instagram icon'></img>
        </div>)
    }
}

export default Sharebar;
