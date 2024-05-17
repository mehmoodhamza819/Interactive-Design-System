import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Context/global';
import Sidebar from './Sidebar';
import "../Styles/upcoming.css";

function Upcoming({ rendered }) {
    const { upcomingAnime, isSearch, searchResults } = useGlobalContext();
    const itemsPerPage = 10; // Number of items to display per page
    const [currentPage, setCurrentPage] = useState(1);

    const currentData = !isSearch && rendered === 'upcoming' ? upcomingAnime : searchResults;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentAnime = currentData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(currentData.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <div className='my-upcoming-anime'>
                <div className="upcoming-anime">
                    {currentAnime.map((anime) => (
                        <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                            <img src={anime.images.jpg.large_image_url} alt={anime.title} />
                        </Link>
                    ))}
                </div>
                <Sidebar />
            </div>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                        <button onClick={() => paginate(number)} className="page-link">
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Upcoming;
