import React from 'react';

const Advertisement = ({ adds }) => {
    console.log(adds)
    return (
        <div>


            {


                adds?.isadvertise && !adds.status &&
                
                <div className="card lg:w-96 bg-base-100 shadow-xl image-full container">
                    <figure><img src={adds.purl} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{adds.pname}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

            }



        </div>
    );
};

export default Advertisement;