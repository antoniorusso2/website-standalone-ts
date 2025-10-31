import { BrowserRouter, Route, Routes } from "react-router"
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import { SectionProvider } from "./contexts/SectionContext"

function App() {
    return (
        <SectionProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<DefaultLayout />}>
                        <Route index path="/" element={<HomePage />} />

                        <Route path="*" element={<div className="mt-42 text-white">404</div>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </SectionProvider>
    )
}

export default App
