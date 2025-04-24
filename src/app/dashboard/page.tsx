'use client'
import React, {useEffect, useState} from 'react';
import Link from "next/link";

const DashboardPage = () => {
    const [name, setName] = useState('');
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const handleResize = ()=> setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return (
        <div className={'p-8'}>
            <h1 className={'text-2xl font-bold'}>Панель пользователя</h1>
            <Link href={'/'}>На главную</Link>
            <div className={'mt-6 space-y-4'}>
                <div className={'p-4 bg-blue-100 rounded shadow-lg'}>
                    <label htmlFor="{'dashboard'}" className={'block mb-2'}>
                        Ведите ваше имя
                    </label>
                    <input className={'p-2 text-black border-2 rounded border-sky-500'} value={name}
                           id={'dashboard'} type="text"
                           onChange={(e) => setName(e.target.value)}
                    />
                    <p className={'mt-2 text-black'}>Привет, {name || 'гость'}! </p>
                </div>
                <div>
                    <p>Ширина окна: {windowWidth} px</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;