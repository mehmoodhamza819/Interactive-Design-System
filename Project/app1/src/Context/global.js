import React,{createContext, useContext, useReducer} from "react";

const GlobalContext = createContext();

const baseUrl="https://api.jikan.moe/v4";

const reducer=(state,action) =>{
    return state;
}

export const GlobalContextProvider= ({children}) =>{
    //Intial State
    const initialState={
        popularAnime:[],
        upcomingAnime:[],
        airingAnime:[],
        picture:[],
        isSearch:false,
        searchResults:[],
        loading:false,
    }
    const [state,dispatch]=useReducer(reducer,initialState);

    //fetch popular anime

    const getPopularAnime = async ()=>{
const response = await fetch(`${baseUrl}/top/anime?filter=bypopularity`);

const data = await response.json();
console.log(data.data);
    }

    React.useEffect(()=> {
        getPopularAnime();
    },[])
     return(
<GlobalContext.Provider value={{
    ...state,

}}>
{children}
</GlobalContext.Provider>
    )
}

export const useGlobalContext= () =>{
    return useContext(GlobalContext);
}