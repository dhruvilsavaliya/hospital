import './App.css';
import theme from './Theme';
import Header from './Shared/Header';
import Home from './Pages/Home'
import { ThemeProvider } from '@mui/material';
import Footer from './Shared/Footer';
import AboutUs from './Pages/AboutUs';
import Service from './Pages/Service';
import Doctor from './Pages/Doctor';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogPage from './Pages/BlogPage';
import ContactUs from './Pages/ContactUs';
import DoctorDetails from './Pages/DoctorDetails';
import BlogGrid from './Pages/BlogGrid';
function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<AboutUs />}></Route>
                    <Route path='/services' element={<Service />}></Route>
                    <Route path='/doctor' element={<Doctor />}></Route>
                    <Route path='/blog-detail' element={<BlogPage />}></Route>
                    <Route path='/contact' element={<ContactUs />}></Route>
                    <Route path='/doctor-details' element={<DoctorDetails />}></Route>
                    <Route path='/Blog-Grid' element={<BlogGrid />}></Route>
                </Routes>
                <Footer />
            </Router>
        </ThemeProvider>
    )
}

export default App;