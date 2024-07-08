import React from 'react';

const DownBtn = () => {
    return (
        <div className="fixed bottom-10 right-14 z-50 btn_down cursor-pointer overflow-y-hidden">
            <div className="circle rounded-full border border-white w-12 h-12 flex justify-center items-center">
                <i className="ri-arrow-down-line text-4xl text-white font-thin stroke-0"></i>
            </div>
        </div>
    );
}

export default DownBtn;
