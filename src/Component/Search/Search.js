import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SearchIcon from "@material-ui/icons/Search";
import Button from '@mui/material/Button';
import "./Search.js"
import SingleComponent from '../../SingleComponent/SingleComponent';
import CustomPagination from '../CustomPagination/CustomPagination';
import axios from 'axios';


const Search  = ()=>{
    const [text, setText] = React.useState();
    const [page, setPage] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(0);
    const [mediaType, setMediaType] = React.useState(0);
    const [data, setData] = React.useState([]);

    const handleChange = (e, newValue)=>{
        // console.log(mediaType);
        setMediaType(newValue);
        setPage(1);
        // console.log({mediaType});
    }
    // const fetchMovie = async()=>{
    //     const {data} = await axios.get(
    //         `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    //     ) 
    //     console.log(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
    //     // console.log(data)
    //     return {data};
    // }
    
    const fetchSearch = async()=>{
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/search/${mediaType ? "tv" : "movie"}?api_key=${
              process.env.REACT_APP_API_KEY
            }&language=en-US&query=${text}&page=${page}&include_adult=false`
          );
        // const {data} = await axios.get(
        //     `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
        // )

        // console.log(data)
        // console.log(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
        // console.log(data.results)
        setData(data.results)
        setTotalPages(data.total_pages)
    }

    return(
        <>
            <div style={{marginTop:"8vh", paddingTop:"1vh", textAlign:"center", fontSize:50}}>search</div>
            <div className="search_field">
            <TextField id="outlined-basic" label="keyword" onChange={(e) => setText(e.target.value) }/>
            <Button
            onClick={fetchSearch}
            variant="contained"
            style={{ marginLeft: 10 }}
            >
            <SearchIcon fontSize="large" />
            </Button>
            </div>
            <Tabs value={mediaType} onChange={handleChange}>
            <Tab label="Movie"  />
            <Tab label="TV Series" />
            </Tabs>

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
                overview={item.overview}
                vote_average={Math.round(item.vote_average*10)/10}/>
            }))
        }
        </div>
        <div>
        {totalPages ? <CustomPagination setPage={setPage} numOfPages={totalPages}/> : <></>}
        </div>
        </>
    )
}
export default Search;