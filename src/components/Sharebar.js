import React from 'react';
import './facebook.png';

class Sharebar extends React.Component {

    render(){
        return (
        <div className='sharebar'>
            <img className='fb' src='./facebook.png' alt='Facebook icon'></img>
            <btn className='twitter'>Twitter</btn>
            <btn className='ig'>Instagram</btn>
        </div>)
    }
}

export default Sharebar;
