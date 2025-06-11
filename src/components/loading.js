import React from 'react'
import '../styles/loadinganimation.css';

const Loading = () => {
    return (
        <>
            <div className='fixed opacity-1 z-[99999] w-screen h-screen top-0 bottom-0 left-0 right-0' style={{clipPath: "inset(17vh 40vw)"}}>
                <div className="loadingbg">
                    <div className="stars"></div>
                    <div className="twinkling"></div>
                    <div className='fallingstars'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Loading