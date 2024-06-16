import React from 'react';
import Search from '../components/search'
import Navbar from '../components/navbar';

function SearchPage() {
    return (
        <> 
        <div className='bg-dark p-3 vh-100'>
            <Search />
            <p className="text-white text-center display-5 text-muted">
                Enter Location, and get results here!
            </p>
            <Navbar />
        </div>
        </>
    )
}

export default SearchPage;