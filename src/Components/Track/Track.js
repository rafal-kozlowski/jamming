import React from 'react';
import './Track.css';

class Track extends React.Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
    }

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
            return <button className="Track-action" onClick = {this.addTrack}>+</button>
        }
    }

    addTrack() {
        this.props.onAdd(this.props.track);
    }

    render() {
        return (
            <div className='Track'>
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                {this.renderAction()}
            </div>
        )
    }
}

export default Track;