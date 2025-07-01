import {ReactNode} from "react";
import Header from "../Hero/Header";
import Footer from "../Footer/Footer";

type Props = {
    children?: ReactNode
}

const Layout = ({children}: Props) => {

    return <>
        <header className="sticky top-0 z-50">
            <Header/>
        </header>
        <main className='min-h-[78vh]'>{children}</main>
        <section id='footer' className='bg-[#334353]/90'>
            <Footer/>
        </section>
    </>
}

export default Layout;
