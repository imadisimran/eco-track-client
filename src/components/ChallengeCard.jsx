import React from 'react';
import { Link, useNavigate } from 'react-router';

const ChallengeCard = ({ challenge }) => {
    const { imageUrl, title, description, category, endDate, _id } = challenge
    const navigate=useNavigate()
    const now = new Date().getTime()
    const end = new Date(endDate).getTime()
    const isActive = now < end
    return (
        <div onClick={()=>navigate(`/challenges/${_id}`)} className="card bg-base-100 w-96 shadow-sm mr-5 cursor-pointer">
            <figure>
                <img
                    src={imageUrl}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className={`badge ${isActive ? 'badge-primary' : 'badge-error'}`}>{isActive ? 'Active' : 'Finished'}</div>
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