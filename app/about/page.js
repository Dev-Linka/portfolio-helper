
import { useRouter } from 'next/navigation';

export default function About(){
    const { push } = useRouter();
    return(
        <>
            <p>About page</p>
            <form action={
                push('/')
            }>
                <button>
                    Click me 
                </button>
            </form>
        </>
    );
}