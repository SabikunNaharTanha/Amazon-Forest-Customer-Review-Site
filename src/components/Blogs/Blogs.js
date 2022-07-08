import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <div className='blog-1'>
                <h2 className='text-2xl text-rose-800 font-semibold mb-3'>What is Context API. Write its details</h2>
                <p className='text-lg'>Context API allows us to pass the data through the component where props is not passes to every child or level. In short, without defining props in every level of a tree, context API allows us to show the data exactly to the level or child section we want to show it. <br /> To dot This we need to use createContext(), use .Provider from the top level. And where in the level it is needed, just need to use it.</p>
            </div>
            <div className='blog-2'>
                <h2 className='text-2xl text-rose-800 font-semibold mb-3'>What is Semantic Tag</h2>
                <p className='text-lg'>Semantic tags are the tags that are meaningful. We can identify with tag it is and what is its purpose. For example, tags like, Header ,footer,body,title etc.
                    <br /><br />
                    On the contrary, tags like a,p,div doesn't give us such meanings.</p>
            </div>
        </div>
    );
};

export default Blogs;