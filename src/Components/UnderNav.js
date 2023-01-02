import React from "react";
import gift from '../Stickers/gift.png';
import princess from '../Stickers/princess.png';
import cake from '../Stickers/birthday-cake.png';
import cake2 from '../Stickers/make-a-wish.png';
export default function UnderNav(props) {
    return (
        <div className="d-flex justify-content-center">
            <div className="d-flex justify-content-center my-5 mx-auto">
                <div className="container">
                    <img src={props.mode==='light'?gift:princess} className="rounded" style={{objectFit:'cover',width:'30vw', minWidth:'170px'}} alt={props.name}/>
                </div>
                <div className={`container-fluid text-${props.mode==='light'?'dark':'light'} text-center align-self-center`}>
                    <h2>Hello {props.name}</h2>
                    <h3>Many Many Happy Returns of the Day {props.who}</h3>
                    <img src={props.mode==='light'?cake:cake2} style={{width:'7vw'}} />
                </div>
            </div>
        </div>
    );
}