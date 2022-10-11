import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='margintop'>
            <div className='blog'>
                <h1>What is the purpose of react router?</h1>
                <p>React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.</p>
            </div>
            <div className='blog'>
                <h1>How does context api work?</h1>
                <p>Context API works as a path to connect every elements in a single path. It helps to avoid repeating the same task again and again. It is used at the top top of the parent div.</p>
            </div>
            <div className='blog'>
                <h1>What is the useRef hook?</h1>
                <p>
                    'useRef hook' is part of the React Hooks API and it is a function which takes a maximum of one argument and returns an Object. The returned object has a property called current whose value is the argument passed to useRef. If you invoke it without an argument, the returned object's current property is set to undefined. The code below illustrates how to invoke the useRef hook in functional components.</p>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Blog;