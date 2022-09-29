import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
// import { storegedata } from '../../utilitis/Storege';
const Carddetails = ({card}) => {
    let totalmin = 0;
    for (const product of card) {
        totalmin = totalmin + product.time;        ;
    }

    const [mintues, setMinte] = useState(0)

    const minheldler = (value) => {
        setMinte(value);
        // localStorage.setItem("brake",value);
    //    storegedata(value)
        
    }
    // useEffect(() => {
    //     localStorage.getItem"(brake")
    //     localStorage.setItem("break",)
    // },[])
    const handletost = () => {
        toast("Activity Completed", {
        position:'top-center'
        })
    };
    return (
        <div>
            <div className='px-3 '>
                <h1 className='text-2xl text-center bg-slate-300 py-4 mt-8 font-bold rounded-xl'>Profile</h1>
                <p className='text-xl'>Name: Redoy Hossin</p>
                <p className='text-xl'>Study: CST</p>
                <div className="flex justify-around py-2">
                    <div className='ms-2  bg-slate-300 p-2 px-3 rounded-sm'>
                        <p>Age</p>
                        <p>16</p>
                    </div>
                    <div className='ms-2  bg-slate-300 p-2 px-3 rounded-sm'>
                        <p>Work</p>
                        <p>Student</p>
                    </div>
                    <div className='ms-2 bg-slate-300 p-2 px-3 rounded-sm'>
                        <p>Dream</p>
                        <p>programmer</p>
                    </div>
                </div>

            </div>
            <div className='mt-2 pt-6 mx-2'>
                <h1 className='text-2xl font-bold'>Add A Break</h1>
                <div className='bg-slate-300 py-6 rounded-xl px-4 mt-2' >
                    <button onClick={()=>minheldler(10)} className='rounded-full bg-white p-2 mx-1'>10<span>s</span></button>
                    <button onClick={()=>minheldler(15)} className='rounded-full bg-white p-2 mx-1'>15<span>s</span></button>
                    <button onClick={()=>minheldler(20)} className='rounded-full bg-white p-2 mx-1'>20<span>s</span></button>
                    <button onClick={()=>minheldler(40)} className='rounded-full bg-white p-2 mx-1'>40<span>s</span></button>
                    <button onClick={()=>minheldler(50)} className='rounded-full bg-white p-2 mx-1'>50<span>s</span></button>
                </div>
            </div>
            <div className='mt-12 mx-2'>
                <h1 className='text-2xl font-bold'>Exercise Details</h1>
                <div>
                    <div className='flex items-center bg-slate-300 py-3 rounded-xl px-4 mt-5 '>
                        <p className='text-xl font-semibold'>Exercise time</p>
                        <p className='m-auto'>{totalmin} Mintues</p>
                    </div>

                    <div className='flex items-center bg-slate-300 py-3 rounded-xl px-4 mt-6'>
                        <p className='text-xl font-semibold'>Break time</p>
                        <p className='m-auto'>{mintues} Mintues</p>
                    </div>

                    <div className='mt-12 text-center mb-6'>
                        <button onClick={handletost} className='btn btn-primary px-12 '>Activity Completed</button>
                        <ToastContainer />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Carddetails;