import Head from "next/head";
import Footer from "@/components/Footer";

export default function Default({ children }) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <title>Pokemon App</title>
            </Head>

            <div className='container mx-auto min-h-screen'>
                { children }
            </div>
            
            <div className='footer'>
                <Footer />
            </div>
        </>
        
    )
}