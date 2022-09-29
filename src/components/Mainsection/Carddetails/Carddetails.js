import React from 'react';

const Carddetails = () => {
    return (
        <div>
            <div>
                <h1 className='text-2xl text-center bg-slate-300 py-4 mt-8 font-bold'>Profile</h1>
                <p className='text-xl'>Name: Redoy Hossin</p>
                <p className='text-xl'>Study: CST</p>
            </div>
            <div className='mt-2 pt-6 mx-2'>
                <h1 className='text-2xl font-bold'>Add A Break</h1>
                <div className='bg-slate-300 py-6 rounded-xl px-4 mt-2' >
                    <button className='rounded-full bg-white p-2 mx-1'>10<span>s</span></button>
                    <button className='rounded-full bg-white p-2 mx-1'>10<span>s</span></button>
                    <button className='rounded-full bg-white p-2 mx-1'>10<span>s</span></button>
                    <button className='rounded-full bg-white p-2 mx-1'>10<span>s</span></button>
                    <button className='rounded-full bg-white p-2 mx-1'>10<span>s</span></button>
                </div>
            </div>
            <div className='mt-12 mx-2'>
                <h1 className='text-2xl font-bold'>Exercise Details</h1>
                <div>
                    <div className='flex items-center bg-slate-300 py-3 rounded-xl px-4 mt-5 '>
                        <p className='text-xl font-semibold'>Exercise time</p>
                        <p className='m-auto'>Mintues</p>
                    </div>

                    <div className='flex items-center bg-slate-300 py-3 rounded-xl px-4 mt-6'>
                        <p className='text-xl font-semibold'>Exercise time</p>
                        <p className='m-auto'>Mintues</p>
                    </div>

                    <div className='mt-12 text-center'>
                        <button className='btn btn-primary px-12 '>Activity Completed</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Carddetails;