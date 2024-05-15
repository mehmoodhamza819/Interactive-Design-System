import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../Context/global'
import styled from 'styled-components'
import Sidebar from './Sidebar'
import "../Styles/airing.css"

function Airing({rendered}) {
    const {airingAnime ,isSearch, searchResults} = useGlobalContext()

    const conditionalRender = () => {
        if(!isSearch && rendered === 'airing'){
            return airingAnime?.map((anime) => {
                return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img src={anime.images.jpg.large_image_url} alt="" />
                </Link>
            })
        }else{
            return searchResults?.map((anime) => {
                return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img src={anime.images.jpg.large_image_url} alt="" />
                </Link>
            })
        }
    }

    return (
        
            <>
            <div className='my-airing-anime'>
            <div className="airing-anime">
                {conditionalRender()}
            </div>
            <Sidebar />
            </div>
            </>
    )
}

export default Airing