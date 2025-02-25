import axios from 'axios';
import React, { useContext, useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ThemeContext } from "../context/ThemeContext";
import { useTranslation } from 'react-i18next';

function Edit() {
    let { id } = useParams();
    let navigate = useNavigate();
    const { currectCategory } = useContext(ThemeContext);
    const {t} = useTranslation();
    
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const isFetched = useRef(false);

    const check = () => {
        if (name.trim() === '' || price.trim() === '') {
            alert('Please fill all fields');
            return false;
        }
        return true;
    };

    useEffect(() => {
        if (isFetched.current) return; 
        isFetched.current = true; 

        const getItem = async () => {
            try {
                const res = await axios.get(`http://localhost:5200/${currectCategory}/${id}`);
                setName(res.data.name || '');
                setPrice(res.data.price || '');
                setDescription(res.data.description || '');
            } catch (error) {
                alert('You cant edit exist product');
                navigate(-1);
            }
        };
        getItem();
    }, [currectCategory, id, navigate]);

    const editFc = async (e) => {
        e.preventDefault();
        
        if (!check()) return;

        try {
            await axios.put(`http://localhost:5200/${currectCategory}/${id}`, {
                name,
                price,
                description
            });
            navigate(-1);
        } catch (error) {
            alert("Error updating item:");
        }
    };

    return (
        <div className='max-abu'>
            <h2 className={`text-4xl text-yashil py-5`}>{t('edit')}</h2>
            <form onSubmit={editFc}>
                
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

export default Edit;