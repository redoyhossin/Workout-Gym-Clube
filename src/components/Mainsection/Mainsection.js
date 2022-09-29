import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import Product from './Products/Product'
import './Mainsection.css'
import Carddetails from './Carddetails/Carddetails';
const Mainsection = () => {
    const [Products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch("workout.json")
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    return (
        <div>
            <div className='main-container flex-none md:flex-1 bg-slate-300'>
                <div className='mx-8'>
                    <div className='flex items-center justify-center text-2xl'>
                        <FontAwesomeIcon icon={faDumbbell} />
                        <h1>Workout-Gym-Clube</h1>
                    </div>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                        {
                            Products.map(product => <Product key={product.id} product={product} ></Product>)
                        }
                    </div>
                </div>

                <div className='card-details  bg-base-100'>
                   <Carddetails></Carddetails>

                </div>
            </div>

        </div>
    );
};

export default Mainsection;