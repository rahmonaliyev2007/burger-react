import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Todos() {
    const [menuCount, setMenuCount] = useState(10);
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(response => { setTodos(response.data); })
            .catch(error => { console.error("Xatolik:", error); });
    }, []);

    return (
        <>
            <div id='menu'>
                {todos.slice(0, menuCount).map((item) => (
                    <div key={item.id} className='p-5 relative border rounded mb-5 hover:bg-blend-darken hover:bg-green-700 bg-slate-900'>
                        <h2 className='text-white capitalize'>
                            <span className='text-green-500'>{item.id} ) </span> {item.title}
                        </h2>
                        <p className='absolute top-1 right-3 text-white'>
                            Status : 
                             {item.completed && <span className='text-yashil'> Completed </span>}
                             {!item.completed && <span className='text-red-500'> Not Completed </span>}
                        </p>
                    </div>
                ))}
            </div>
            <div className='flex justify-center gap-4 py-10 items-center m-auto'>
            <button className='bg-yashil text-white rounded-sm px-12 py-3 block hover:bg-green-600  text-lg' 
                onClick={() => setMenuCount(menuCount + 10)}>
                See More 10
            </button>
            <button className='bg-yashil text-white rounded-sm px-12 py-3 block hover:bg-green-600 text-lg' 
                onClick={() => setMenuCount(200)}>
                See 200
            </button>
            </div>
        </>
    );
}

export default Todos;