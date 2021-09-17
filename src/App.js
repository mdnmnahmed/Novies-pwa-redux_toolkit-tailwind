import React from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import RouterComponent from './RouterComponent';

const App = () => {
    return (
        <>
            <Header />
            <RouterComponent />
            <Footer />
        </>
    );
}

export default App;