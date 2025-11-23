import React from 'react';
import { format } from 'date-fns';

const RecentTipsCard = ({ post }) => {

    const date = new Date(post.createdAt);
    const postTime = format(date, 'PP p');
    return (
        <div className="max-w-md w-full bg-base-200 text-primary-content rounded-lg shadow-lg overflow-hidden h-[350px] line-clamp-5 flex flex-col justify-between">
            <div className="flex items-center p-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-lg font-semibold">
                    {post.authorName.slice(0, 2).toUpperCase()}
                </div>
                <div className="ml-4">
                    <h2 className="font-semibold text-lg">{post.authorName}</h2>
                    <p className="text-white/70 text-sm">{postTime}</p>
                </div>
            </div>
            <div className="px-4 pb-4">
                <h2 className='text-xl font-bold'>{post.title}</h2>
                <p>
                    {post.content}
                </p>
            </div>
            <div className="flex justify-between items-center p-4 text-white/70">
                
                <button className="flex items-center space-x-2 hover:text-green-200">
                    <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 10l7-7m0 0l7 7M12 3v18" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
                    </svg>
                    <span>{post.upvotes}</span>
                </button>
               
                <button className="flex items-center space-x-2 hover:text-white">
                    <svg viewBox="0 0 16 16" className="bi bi-share" fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default RecentTipsCard;
