import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props.product)
    const { img, id, name, age, time, ratings } = props.product;
    console.log(id, name)

    return (
        <div>
            <div className="card w-96 h-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl h-60" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>For Age: {age}</p>
                    <p>Time required: {time}min</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Add to list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;