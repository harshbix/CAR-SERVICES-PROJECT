import React from 'react';
import Search from '../components/search'
import Navbar from '../components/navbar';

function SearchPage() {
    return (
        <> 
        <div className='bg-dark p-3 vh-100'>
            <Search />
            <Navbar />
        </div>
        </>
    )
}

export default SearchPage;