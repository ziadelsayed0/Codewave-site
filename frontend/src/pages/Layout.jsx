import Footer from "../components/Footer";
import Header from "../components/Header";


function PageLayout({ children }) {
    return (
        <>

            <Header />
            {children}
            <Footer />
        </>
    )
}

export default PageLayout;