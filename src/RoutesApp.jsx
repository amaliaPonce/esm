import { Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/Landing/LandingPage'
import CatalogoPage from './Pages/Catalogo/CatalogoPage';

function RoutesApp(){
    return (
        <>
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/catalogo" element={<CatalogoPage />} />

        </Routes>
        </>
    )
}
export default RoutesApp;
