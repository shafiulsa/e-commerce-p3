import React from 'react';


const FoodCard = ({ item }) => {

    const { name, image, price, recipe } = item;

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <p className='absolute right-0 mr-4 mt-4 px-4 bg-yellow-600 text-white'>${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                <button className="btn btn-outline bg-slate-300 border-0 border-b-4 border-orange-400 mt-4">Order now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;