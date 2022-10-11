import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Topic.css'
const Topic = () => {

    const topicData = useLoaderData();
    console.log('---------------------------', topicData);
    console.log(topicData.data);
    return (
        <div className='quiz_Container'>
            {
                topicData.data.map(x =>
                    <Link to='/quiz' className='link_remove'>
                        <div className='quiz_Type'>
                            <img src={x.logo} alt={x.logo} />
                            <h1>{x.name}</h1>
                            <p>Toatal <span className='bold'>{x.total}</span> quiz</p>
                        </div>
                    </Link>
                )}
        </div >
    );
};

export default Topic;