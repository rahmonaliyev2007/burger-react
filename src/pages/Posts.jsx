import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Comments() {
    const [menuCount, setMenuCount] = useState(10);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => { setPosts(response.data); })
            .catch(error => { console.error("Xatolik:", error); });
    }, []);
    return (
        <>
            <div id='menu'>
                {posts.slice(0, menuCount).map((item) => (
                    <div key={item.id} className='p-5 border rounded mb-5 hover:bg-blend-darken hover:bg-green-600 bg-slate-900'>
                        <h2 className='text-white capitalize'>
                            <span className='text-yashil'>{item.id} ) </span> {item.title}
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
                onClick={() => setMenuCount(100)}>
                See 100
            </button>
            </div>
        </>
    )
}

export default Comments