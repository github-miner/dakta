import 'styles/global.css'

export default function MyApp({ Component, pageProps }) {
    console.log("author: https://rxs.my.id");
    return <Component {...pageProps} />
}
