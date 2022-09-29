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
            <div className='main-container bg-white'>
                <div className='mx-8 mt-6'>
                    <div className='my-10 ml-auto'>
                    <div className='flex items-center justify-center text-2xl text-primary font-bolder'>
                        <FontAwesomeIcon icon={faDumbbell} />
                        <h1>Workout-Gym-Clube</h1>
                        </div>
                        <div className='text-center my-4 text-xl font-extrabold'>
                            <h1>Select today’s your Workout</h1>
                        </div>
                    </div>
                    <div className='Card-style'>
                        {
                            Products.map(product => <Product key={product.id} product={product} handleAddtolist={handleAddtolist} ></Product>)
                        }
                    </div>
                    <div className='mt-20'>
                        <Questionpart></Questionpart>
                    </div>

                </div>

                <div className='card-details  bg-zinc-100 border border-2-gray-400'>
                    <Carddetails key={card.id} card={card}></Carddetails>
                  

                </div>
            </div>


        </div>
    );
};

export default Mainsection;