import "./Navigator.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {makeStyles} from "@material-ui/core/styles";
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import TvIcon from '@mui/icons-material/Tv';
import { useNavigate } from "react-router-dom"
// import MaterialIcon, {colorPalette} from 'material-icons-react';

// function Navigator(){
//     return(
//         <>
//         <div className='Navigator_type'>
//         {/* <span><MaterialIcon icon="whatshot" />Trending</span> */}
//         <span >Trending</span>
//         <span>TV</span>
//         <span>Recommend</span>
//         </div>
//         </>
//     );
// }

// export default Navigator;

// const useStyles = makeStyles({
//     root: {
//         width:"100%",
//         // display:"flex",
//         // position:"fixed",
//         // bottom:0,
//         // backgroundColor: "black",
//         // background: "#2d313a",
//         zIndex:100}
// })

const useStyles = makeStyles({
  root: {
    width: "100%",
    height:"5vh",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#2d313a",
    zIndex: 100,
  },
});

function Navigator() {
    const [value, setValue] = React.useState(0);
    const classes = useStyles();
    const navigate = useNavigate();

    React.useEffect(()=>{
      if (value==0){
        navigate("/");
      }else if (value == 1){
        navigate("/movie");
      }else if (value == 2){
        navigate("/series");
      }else if (value == 3){
        navigate("search");
      }
    },[value])
    return (
        <div >
      {/* <Box sx={{ width: "100%" ,
                position:"fixed",
                display:"flex",
                bottom:0,
                zIndex:100,
                backgroundColor: "#2d313a",
                }}> */}
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={classes.root}
        >
          {/* <BottomNavigationAction label="Recents"  />
          <BottomNavigationAction label="Favorites"  />
          <BottomNavigationAction label="Nearby" /> */}
          <BottomNavigationAction label="Trending" icon={<WhatshotIcon style={{ fontSize:"3vh"}}/>} />
          <BottomNavigationAction label="Movie" icon={<LiveTvIcon style={{ fontSize:"3vh"}}/>}/>
          <BottomNavigationAction label="Series" icon={<TvIcon style={{  fontSize:"3vh"}}/>} />
          <BottomNavigationAction label="Search" icon={<TvIcon style={{  fontSize:"3vh"}}/>} />
        </BottomNavigation>
      {/* </Box> */}
      </div>
    );
  }

export default Navigator;
