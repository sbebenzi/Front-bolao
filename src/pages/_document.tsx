import {Html,Head,Main,NextScript} from 'next/document'

export default function Document(){
    return (
        <Html>
            <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin = ""/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,700&family=Zilla+Slab+Highlight&display=swap" rel="stylesheet"/>
            </Head>
            <body className=' bg-gray-900 '>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}