import React from 'react';
import { useGlobalContext } from '../Context/global';
import { Link } from 'react-router-dom';
import "../Styles/popular.css"

function Popular(){
    const {popularAnime,isSearch} =useGlobalContext()
    const conditionalRender = ()=>{
            if(!isSearch){
                return popularAnime.map((anime) => {
                    return <Link to = {`/anime/${anime.mal_id}`} key={anime.mal_id}>
                        <img src={anime.images.jpg.large_image_url} alt=""></img>
                    </Link>                })
            }
    }
    return(
        <>
        <div className='my-popular'>
       
            <div className='popular-anime'>
                {conditionalRender()}
            </div>
       
        </div>
        </>
    )
}


export default Popular;