import Link from "next/link";

export default function Home() {


    return (
        <div className={'flex flex-col items-center justify-center mt-8 text-2xl'}>
            Моё первое приложение на Next.JS
            <Link href={'/about'}>Перейти на страницу о нас</Link>
            <Link href={'/dashboard'}>Перейти в панель управления</Link>
        </div>
    );
}
