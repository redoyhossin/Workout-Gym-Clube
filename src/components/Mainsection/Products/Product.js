import React from 'react';
import './Product.css'
const Product = (props) => {
    const{handleAddtolist,product}=props;
    // console.log(props)
    const { img, id, name, age, time, ratings } = product;
// console.log(props.product)


    return (
        <div>
            <div className=" main-card bg-slate-300 rounded-xl">
                <div className="product-card">
                    <img src={img} alt="Shoes" className="" />
                </div>
                <div className=" ">
                    <h2 className="">{name}</h2>
                    <p>For Age: {age}</p>
                    <p>Time required: {time}min</p>
                    <div className="mt-1">
                        <button onClick={()=>handleAddtolist(props.product) } className="btn btn-primary">Add to list</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Product;