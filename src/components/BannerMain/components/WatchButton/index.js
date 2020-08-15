import React from 'react';

function WatchButton(props) {

    //console.log(props);

    return (
        <a href={props.href} className={props.className} >
            {props.children}
        </a>
    );
}

export default WatchButton;