import React, { useEffect, useState } from 'react';
import "./MainHeading.css";


const MainHeading = () => {
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
    }, [])
    return (
        <div className='main-heading'>
            <input placeholder='Input field L2R--------------' type="text" className={animate ? "fade-in" : " "} />

        </div>
    )
}

export default MainHeading