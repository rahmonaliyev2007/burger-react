import axios from 'axios';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useNavigate } from 'react-router-dom';

function Add() {
    let { id } = useParams();
    let navigate = useNavigate();
    const {t} = useTranslation();

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const check = () => {
        if (name.trim() === '' || price.trim() === '') {
            alert('Please fill all fields');
            return false;
        }
        return true;
    };

    const addProduct = async (e) => {
        e.preventDefault();

        if (!check()) {return};

        const finalDescription = description.trim() === '' ? 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, ratione!' : description;

        try {
            await axios.post(`http://localhost:5200/${id}`, { name, price, description : finalDescription });
            navigate(-1);
        } catch (error) {
            console.error('Xatolik yuz berdi:', error);
            alert('Xatolik yuz berdi');
        }
    };

    return (
        <div className='max-abu'>
            <h2 className={`text-4xl text-yashil py-5`}>{t('add')}</h2>
            <form onSubmit={addProduct}>
                
                <input className='px-4 py-2 block w-[70%] m-5 ml-0 '
                    type="text"
                    placeholder="Enter product name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input className='px-4 py-2 block w-[70%] m-5 ml-0 '
                    type="number"
                    placeholder="Enter product price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input className='px-4 py-2 block w-[70%] m-5 ml-0 '
                    type="text"
                    placeholder="Enter product description (not Important)"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button className='text-white bg-yashil p-4 my-5' type="submit">Add Product</button>
            </form>
        </div>
    );
}

export default Add;