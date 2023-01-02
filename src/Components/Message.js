import React from 'react';

export default function Message(props) {

    const woah = () => {
        alert("I love you so much <3");
    }

    const hahaha = () => {
        alert("Well you can't say 'No' now : )");
    }

    return (
        <div className='d-flex container container-fluid justify-content-center'>
            <div className='text-center'>
                <h5>Hope Ye site tumhe pasand aayi hogi.</h5>
                <h6>I know zyada achi nhi bani h... and I'm sorry for that</h6>
                <h4 className='my-5'>My Love, I wanted to ask you this for a long time...<br/>Will you marry me?<br/><button className={`mx-2 my-2 btn btn-${props.mode==='light'?'success':'dark'}`} onClick={woah}>Yess</button><span onClick={hahaha}><button type="button" className={`mx-2 my-2 btn btn-${props.mode==='light'?'danger':'dark'}`} disabled >No</button></span><br/>I know it's very early but we can work together and make it happen true.</h4>
            </div>
        </div>
    );
}