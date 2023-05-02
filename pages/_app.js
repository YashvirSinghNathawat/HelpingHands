import Layout from "../components/layout/Layout";
import '../styles/global.css'
import '../styles/button.css'
import '../styles/footer.css'
import '../styles/slider.css'
import '../styles/about.css'
function MyApp({Component,pageProps}){
    return (
        <Layout>
            <Component {...pageProps} />

        </Layout>
        
    )
}

export default MyApp