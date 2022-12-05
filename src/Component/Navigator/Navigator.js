import "./Navigator.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {makeStyles} from "@material-ui/core/styles";
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
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

const useStyles = makeStyles({
    root: {
        width:'100%',
        position:"fixed",
        bottom:0,
        backgroundColor: "black",
        background: "#2d313a",
        zIndex:100}
})

function Navigator() {
    const [value, setValue] = React.useState(0);
    const classes = useStyles(); 
    return (
        <div >
      <Box sx={{ width: 500 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        //   className="Navigator_type"
          className={classes.root}
        >
          {/* <BottomNavigationAction label="Recents"  />
          <BottomNavigationAction label="Favorites"  />
          <BottomNavigationAction label="Nearby" /> */}
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Box>
      </div>
    );
  }

export default Navigator;
