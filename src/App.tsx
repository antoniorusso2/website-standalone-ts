import { BrowserRouter, Route, Routes } from "react-router";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetails";
import ContactMe from "./pages/ContactMe";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/:slug" element={<ProjectDetail />} />
                    <Route path="/contact" element={<ContactMe />} />
                    <Route path="*" element={<div>404</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
