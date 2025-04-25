'use client'

import React from 'react';

export const Button = () => {
    return (
        <button className={'bg-amber-800 rounded-sm w-30 cursor-pointer'}
                type={'button'} onClick={ ()=> alert('Hello World!') }
        >
            PRESS ME
        </button>
    );
};

export default Button;