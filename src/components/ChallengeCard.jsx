import React from 'react';

const ChallengeCard = ({challenge}) => {
    const {imageUrl,title,description,category,endDate}=challenge
    const now=new Date().getTime()
    const end=new Date(endDate).getTime()
    const isActive= now < end
    return (
        <div className="card bg-base-100 w-96 shadow-sm mr-5">
            <figure>
                <img
                    src={imageUrl}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className={`badge ${isActive?'badge-primary':'badge-error'}`}>{isActive ? 'Active':'Finished'}</div>
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{category}</div>
                </div>
            </div>
        </div>
    );
};

export default ChallengeCard;