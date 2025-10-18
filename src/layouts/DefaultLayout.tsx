import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header/Header.tsx";

export default function DefaultLayout() {
    return (
        <>
            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    );
}
