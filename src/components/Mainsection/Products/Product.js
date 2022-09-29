import React from 'react';
import './Product.css'
const Product = (props) => {
    const { img, id, name, age, time, ratings } = props.product;
// console.log(props.product)


    return (
        <div>
            <div className=" product-style  bg-white h-full px-6 ">
                <figure className="">
                    <img src={img} alt="Shoes" className="" />
                </figure>
                <div className=" card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>For Age: {age}</p>
                    <p>Time required: {time}min</p>
                    <div className="card-actions">
                        <button onClick={()=>props.handleAddtolist()} className="btn btn-primary">Add to list</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Product;