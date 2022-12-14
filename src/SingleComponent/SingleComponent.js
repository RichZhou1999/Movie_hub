import "./SingleComponent.css"
import TransitionsModal from "../Component/TransitionModal/TransitionModal";
import { img_300 } from "../config/config";
import Badge from '@mui/material/Badge';

const SingleComponent =(
    props
    // backdrop_path, id, title, poster_path, 
    // media_type, genre_ids, popularity,vote_average
)=>{
    // const img_300 = "https://image.tmdb.org/t/p/w300"
    // console.log(`${img_300}/${props.poster}`);
    return(
        <>
        <TransitionsModal props={props}>

        {/* "vote_average" */}
        <div className="media">
        <Badge
        badgeContent={props.vote_average}
        color= {props.vote_average>7 ? "primary" : "secondary"}
        />
        <img src={`${img_300}/${props.poster}`} />
        <div>
        {
           props.title ? <span className='single_title'>{props.title}</span> :
           <span className='single_title'>unknown</span>
        }
        {/* <span className='single_title'>{props.title} {props.title}</span> */}
        <div className='single_type_time'>
        <span>{props.media_type}</span>
        {
            props.date ? <span>{props.date}</span> :
            <span>unknown</span>
        }
        {/* <span>{props.release_date} </span> */}
        </div>
        </div>
        </div>
        </TransitionsModal>
        </>
    )
}
export default SingleComponent;