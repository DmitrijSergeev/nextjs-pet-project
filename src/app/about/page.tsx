import React from 'react';
import {Button} from "@/components/button";

export default function AboutPage () {
    console.log('We are creating a server-component')
    const lastUpdated = new Date().toISOString();

    return (
        <div className={'p-8'}>
            <h1 className={'text-2xl font-bold'}>О нашей компании</h1>
            <p className={'mt-4'}>Эта страница полностью отображается на сервере. Для этого компонента
            JS не отправляется в браузер</p>
            <div>
                <p>Последнее обновление: {lastUpdated}</p>
                <Button/>
            </div>
        </div>
    );
};

