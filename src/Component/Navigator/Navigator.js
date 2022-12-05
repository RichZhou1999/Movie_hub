import "./Navigator.css";
// import MaterialIcon, {colorPalette} from 'material-icons-react';

function Navigator(){
    return(
        <>
        <div className='Navigator_type'>
        {/* <span><MaterialIcon icon="whatshot" />Trending</span> */}
        <span >Trending</span>
        <span>TV</span>
        <span>Recommend</span>
        </div>
        </>
    );
}

export default Navigator;