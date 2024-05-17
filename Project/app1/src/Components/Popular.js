import React, { useState } from 'react';
import { useGlobalContext } from '../Context/global';
import { Link } from 'react-router-dom';
import "../Styles/popular.css";

function Popular() {
    const { popularAnime, isSearch } = useGlobalContext();
    const itemsPerPage = 10; // Number of items to display per page
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentAnime = popularAnime.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const conditionalRender = () => {
        if (!isSearch) {
            return currentAnime.map((anime) => (
                <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img src={anime.images.jpg.large_image_url} alt={anime.title} />
                </Link>
            ));
        }
    };

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(popularAnime.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <div className='my-popular'>
                <div className='popular-anime'>
                    {conditionalRender()}
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
            </div>
        </>
    );
}

export default Popular;
