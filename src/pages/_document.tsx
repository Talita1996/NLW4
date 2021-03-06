import Document, { Html, Head, Main, NextScript } from 'next/document';
/*
export default class MyDocument {

    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" /> 
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </ Html>
        );
    }
} 
*/

export default class MyDocument extends Document {
/*
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }*/

    render() {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="icons/favicon.ico" type="image/ico" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" /> 
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </ Html>
        );
    }
} 

/*
function MyDocument() {

    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" /> 
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </ Html>
    );
    
}

MyDocument.getInitialProps = Document.getInitialProps;

MyDocument.renderDocument = Document.renderDocument;

export default MyDocument;
*/