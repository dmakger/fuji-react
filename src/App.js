import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import SignInPage from "./auth/signin/SignInPage";
import SignUpPage from "./auth/signup/SignUpPage";
import Catalog from "./main/catalog/Catalog";
import DetailCollection from "./main/detail_collection/DetailCollection";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Catalog/>}/>
                <Route path="/signin" element={<SignInPage/>}/>
                <Route path="/signup" element={<SignUpPage/>}/>
                <Route path="/collections/:path" element={<DetailCollection/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
