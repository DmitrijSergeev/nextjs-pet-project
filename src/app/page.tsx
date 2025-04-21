'use client'
import {useState} from "react";

export default function Home() {
   const [counter, setCounter] = useState<number>(0)

    const incrementHandler = () => {
       setCounter((prev) => prev + 1)
    }

    const decrementHandler = () => {
       setCounter((prev) => prev - 1)
    }

    const resetHandler = () => {
       setCounter(0)
    }

    return (
        <div className={'flex flex-col items-center justify-center mt-8 text-2xl'}>
            Моё первое приложение на Next.JS
            <div className={'border-amber-600 rounded-lg border-2 border-solid ' +
                'w-20 flex items-center justify-center'}>
                {counter}
            </div>
            <button onClick={ incrementHandler }>+</button>
            <button onClick={ decrementHandler }>-</button>
            <button onClick={ resetHandler }>RESET</button>
        </div>
    );
}
