
export default function Custom404() {
    return (
        <>
        <div className="flex w-full h-[calc(100vh-10rem)] flex-col items-center justify-center">
            <h1 className="tracking-tighter text-8xl font-bold text-primary">404</h1>
            <p>
                <span className="text-2xl">Page Not Found</span>
            </p>
            <p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
        </div>
        </>
    )
}