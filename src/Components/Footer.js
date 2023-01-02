import React from 'react'; 

export default function Footer(props) {
    return (
        <div className={`d-flex flex-column align-items-center bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}>
            <div className='d-flex justify-content-center align-items-center'>
                <h3 className='text-center'>Chalo Baby dhyaan rakho apna and Enjoy karo apna din</h3>
            </div>
            <h3>Once again Happy Birthday 😘</h3>
            <div style={{height:'30px'}}></div>
        </div>
    );
}