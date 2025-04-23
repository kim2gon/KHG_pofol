import React from 'react'

const Loading = () => {

    return (
        <>
            <div className='fixed inset-0 start-0 end-0 -z-10 opacity-0'>
                <div className='relative h-full w-full bgsquare'>
                    <div className='flex origin-center h-full'>
                        <div className='inset-0 absolute bg-black'>
                            <div className='!h-full'>
                                <canvas className='w-full h-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loading