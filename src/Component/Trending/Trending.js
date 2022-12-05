import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleComponent from "../../SingleComponent/SingleComponent"
import "./Trending.css"
import CustomPagination from '../../Component/CustomPagination/CustomPagination';



const Trending = ()=>{
    const [totalPages, setTotalPages] = useState(0)
    const [page, setPage] = useState(0)
    const fetechTrending = async() =>{
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page={page}`
        )
        // console.log(data)
        console.log(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page={page}`)
        // console.log(data.results)
        setData(data.results)
        setTotalPages(data.total_pages)
    }

    const [data, setData] = useState([]);
    useEffect(()=>{
        console.log(data.length)
        if(data.length == 0){
          fetechTrending();
        }
        // data.map((item, i)=>{console.log(item.title);
        // } )
        
    },[data,page,totalPages])
    return (
        <>
        <p>Trending</p>
        <div className='trendingStyle'>
        {
            data.length == 0 ?
            (<h2> No item</h2>) :
            (data.map((item)=>{
                return <SingleComponent
                id={item.id} 
                key={item.id} 
                title={item.title || item.name}
                date={item.release_date || item.first_air_date}
                poster={item.poster_path}
                media_type={item.media_type}
                overview={item.overview}/>
            }))
        }
        </div>
        <CustomPagination setPage={setPage} numOfPages={totalPages}/>
        </>
    )
}
export default Trending;