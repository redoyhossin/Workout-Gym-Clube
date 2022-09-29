import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import Product from './Products/Product'
import './Mainsection.css'
import Carddetails from './Carddetails/Carddetails';
import Questionpart from './Questionpart/Questionpart';
const Mainsection = () => {
    const [Products, setProducts] = useState([]);
    const [card,setCard] = useState([]);



    useEffect(() => {
        fetch("workout.json")
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);

    const handleAddtolist = (product) => {
        const newCard = [...card, product];
        setCard(newCard)
    }

    return (
        <div>
            <div className='main-container  bg-slate-300'>
                <div className='mx-8'>
                    <div className='flex items-center justify-center text-2xl'>
                        <FontAwesomeIcon icon={faDumbbell} />
                        <h1>Workout-Gym-Clube</h1>
                    </div>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 border-4 border-purple-600 px-4 py-20'>
                        {
                            Products.map(product => <Product key={product.id} product={product} handleAddtolist={handleAddtolist} ></Product>)
                        }
                    </div>
                    <div className='mt-20'>
                        <Questionpart></Questionpart>
                    </div>

                </div>

                <div className='card-details  bg-base-100'>
                    <Carddetails key={card.id} card={card}></Carddetails>
                  

                </div>
            </div>


        </div>
    );
};

export default Mainsection;