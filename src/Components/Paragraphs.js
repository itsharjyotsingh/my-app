import React from 'react';

export default function Paragraphs(props) {

    return (
            <div className='d-flex justify-content-around flex-wrap my-5'>
                <div className={`card my-2 bg-${props.mode} text-${props.mode==='light'?'grey':'white'}`} style={{width: '18rem'}}>
                    <div className={`card-body`}>
                        <h5 className="card-title">My Waifu</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Do you know?</h6>
                        <p className="card-text">Today I get to wish someone who has the
most beautiful soul of anybody I know, a
very happy birthday!</p>
                    </div>
                </div>
                <div className={`card my-2 bg-${props.mode} text-${props.mode==='light'?'grey':'white'}`} style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">My Baby</h5>
                        <p className="card-text">Wish you a fun-filled and wonderful birthday, my dear wife! When we are together again, I promise we will celebrate how wonderful and awesome person you are. Sending your way my happiest wishes and sweetest love!</p>
                    </div>
                </div>
                <div className={`card my-2 bg-${props.mode} text-${props.mode==='light'?'grey':'white'}`} style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">My Shikha</h5>
                        <p className="card-text">I can assure you that my feelings for you are not going to fade during this lifetime. Everything you do makes me fall in love with you again and again. Happy birthday!</p>
                    </div>
                </div>
            </div>
    );
}