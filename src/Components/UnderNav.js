import React from "react";
import image1 from '../Images/anjali (22).jpg';
export default function UnderNav(props) {
    return (
        <div className="d-flex justify-content-center my-5 mx-auto">
            <div className="container">
                <img src={image1} className="rounded" style={{height:'50vh'}} alt={props.name}/>
            </div>
            <div className={`container-fluid text-${props.mode==='light'?'dark':'light'} text-center align-self-center`}>
                <h1>Hello {props.name}</h1>
                <h3>Many Many Happy Returns of the Day {props.who} 🎂</h3>
            </div>
        </div>
    );
}