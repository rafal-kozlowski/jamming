import React from 'react';
import './Track.css';

class Track extends React.Component {
    // CHECK IF THAT KIND OF ACTION WOULD WORK PROPERLY
    // renderAction() {
    //     let action;
    //     if(this.props.isRemoval) {
    //         action = '-';
    //     } else {
    //         action = '+';
    //     }
    //     return action;
    // }
    // after div"Track-information" in render function add <button className='Track-action'>+ or - go here </button>

    renderAction() {
        if (this.props.isRemoval) {
            return <button className="Track-action">-</button>
        } else {
            return <button className="Track-action">+</button>
        }
    }

    render() {
        return (
            <div className='Track'>
                <div className="Track-information">
                    <h3>Track name goes here</h3>
                    <p>Track artist | Track album</p>
                </div>
                {this.renderAction()}
            </div>
        )
    }
}

export default Track;