import React from 'react';
import { useLoaderData } from 'react-router';

const ChallengeDetails = () => {
    const data = useLoaderData()
    // Destructure the data object inside the component
    const {
        _id,
        title,
        category,
        description,
        duration,
        target,
        participants,
        impactMetric,
        createdBy,
        startDate,
        endDate,
        imageUrl,
    } = data;

    // Helper to format dates nicely
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    return (
        <div className="max-w-3xl mx-auto mt-15 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 font-sans">

            {/* Image Header with Overlay */}
            <div className="relative h-64 w-full">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-green-600 text-white text-sm font-semibold rounded-full shadow-sm">
                        {category}
                    </span>
                </div>
            </div>

            {/* Main Content Body */}
            <div className="p-6 sm:p-8">

                {/* Title and Dates */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2 sm:mb-0">
                        {title}
                    </h2>
                    <div className="text-sm text-gray-500 flex items-center bg-gray-50 px-3 py-1 rounded-lg border border-gray-200">
                        <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        {formatDate(startDate)} — {formatDate(endDate)}
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {description}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    {/* Duration */}
                    <div className="bg-green-50 p-4 rounded-xl border border-green-100 text-center">
                        <div className="text-green-700 text-sm font-semibold uppercase tracking-wide">Duration</div>
                        <div className="text-2xl font-bold text-gray-800">{duration} Days</div>
                    </div>

                    {/* Participants */}
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-center">
                        <div className="text-blue-700 text-sm font-semibold uppercase tracking-wide">Participants</div>
                        <div className="text-2xl font-bold text-gray-800">{participants}</div>
                    </div>

                    {/* Impact Target */}
                    <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 text-center col-span-1 sm:col-span-1">
                        <div className="text-purple-700 text-sm font-semibold uppercase tracking-wide">Impact Metric</div>
                        <div className="text-sm font-bold text-gray-800 mt-1 capitalize">{impactMetric}</div>
                    </div>
                </div>

                {/* Detailed Info Section */}
                <div className="border-t border-gray-100 pt-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        Challenge Target
                    </h3>
                    <p className="text-gray-600 italic bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
                        "{target}"
                    </p>
                </div>

            </div>

            {/* Footer / Meta Data */}
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
                <div className="mb-2 sm:mb-0">
                    Created by: <span className="font-medium text-gray-700">{createdBy}</span>
                </div>
                <div >
                    <button className="btn btn-primary">Join</button>
                </div>
            </div>

        </div>
    );
};

export default ChallengeDetails;