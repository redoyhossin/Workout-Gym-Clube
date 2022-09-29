import React from 'react';

const Questionpart = () => {
    return (
        <div className='grid lg:grid-cols-3 mt-20 gap-4'>
            <div>
                <h1 className='font-bold bg-slate-200 text-orange-700 p-4 rounded-xl'>JavaScript works similarly to functions in that they accept arbitrary inputs called properties or props. It is possible to have as many elements as needed without clutter </h1>
            </div>
            <div>
                <h1 className='font-bold bg-slate-200 text-orange-700 p-4 rounded-xl'> React component props are variables passed to it by its parent component. State on the other hand is still variables but directly initialized and managed by the component <br />
                    The state can be initialized by props</h1>
            </div>
            <div>
                <h1 className='font-bold bg-slate-200 text-orange-700 p-4 rounded-xl'>usieffect is for side-effects usieffect is for side-effects. A functional React component uses props and/or state to compute output.</h1>
            </div>
        </div>
    );
};

export default Questionpart;