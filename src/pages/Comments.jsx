import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Comments() {
    const [menuCount, setMenuCount] = useState(10);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then(response => { setComments(response.data); })
            .catch(error => { console.error("Xatolik:", error); });
    }, []);
    return (
        <>
            <div id='menu'>
                {comments.slice(0, menuCount).map((item) => (
                    <div key={item.id} className='p-5 border rounded mb-5  hover:bg-green-500 bg-slate-900'>
                        <h2 className='text-white capitalize'>
                            <span className='text-yashil'>{item.id} ) </span> {item.name} <span className='text-yashillight text-xs mx-2'> from </span>
                             <span className='text-white text-sm'> {item.email}</span>
                        </h2>
                        <p className='text-slate-500 text-xs'>{item.body}</p>
                    </div>
                ))}
            </div>
            <div className='flex justify-center gap-4 py-10 items-center m-auto'>
            <button className='bg-yashil text-white rounded-sm px-12 py-3 block hover:bg-green-600  text-lg' 
                onClick={() => setMenuCount(menuCount + 10)}>
                See More 10
            </button>
            <button className='bg-yashil text-white rounded-sm px-12 py-3 block hover:bg-green-600 text-lg' 
                onClick={() => setMenuCount(menuCount + 200)}>
                See More 200
            </button>
            </div>
        </>
    )
}

export default Comments