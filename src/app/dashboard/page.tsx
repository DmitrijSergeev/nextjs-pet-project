'use client'
import React, {useState} from 'react';

const DashboardPage = () => {
    const [name, setName] = useState('');
    const [windowWidth, setWindowWidth] = useState(0);

    return (
        <div className={'p-8'}>
            <h1 className={'text-2xl font-bold'}>Панель пользователя</h1>
            <div className={'mt-6 space-y-4'}>
                <div className={'p-4 bg-blue-100 rounded shadow-lg'}>
                    <label htmlFor="{'dashboard'}" className={'block mb-2'}>
                        Ведите ваше имя
                    </label>
                    <input className={'p-2 border rounded'} value={name}
                           id={'dashboard'} type="text"
                           onChange={(e) => setName(e.target.value)}
                    />
                    <p className={'mt-2'}>Привет, {name || 'гость'}! </p>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;