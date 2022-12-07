import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { img_300 } from '../../config/config';
import "./TransitionModal.css"
import YouTubeIcon from "@material-ui/icons/YouTube";
import { Password } from '@mui/icons-material';
import axios from 'axios';
import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
// import Carousel from "../Carousel/Carousel";

const modalStyle = {
    display:"flex",
    alignItems:"center",
    justifyContent: "center",
}

const paperStyle = {
//   position: 'flex',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
  display:"flex",
  flexDirection: "column",
  width:"40%",
//   width: "60%",
//   height:"60%",
  alignItems:"center",
  justifyContent: "center",
  textAlign: "center",
  bgcolor: '#2E294E',
  border: '2px solid #000',
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};


export default function TransitionsModal({props, children}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [moviePath, setMoviePath] = React.useState();

  const fetchmovie=()=>{
    // https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US
    // https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=1
    const getMoviePath = async() =>{
        const {data} = await axios.get(
        `https://api.themoviedb.org/3/${props.media_type}/${props.id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
    // console.log(data);
    setMoviePath(data.results[0]?.key)
    }
    getMoviePath()
    }

    React.useEffect(()=>{
        fetchmovie();
    },)

  return (
    <div>
      <Button onClick={handleOpen}>{children}</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }
        }
        sx ={modalStyle} 
        // className={modalStyle}
      >
        <Fade in={open}>
          <Box sx={paperStyle}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            <img src={`${img_300}/${props.poster}`} className='transition_img'/>
            </Typography>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <span style={{color:"white"}}> {props.title}</span> <span style={{color:"white"}}>({props.date ? props.date.substr(0,4) : "unknown"}) </span>
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <div className="transition_description">{props.overview}</div>
            </Typography>
            <Typography id="youtube_link" sx={{ mt: 2 }}>
              <Button variant = "contained" startIcon={<YouTubeIcon/>} color="secondary" target="__blank" href={`https:www.youtube.com/watch?v=${moviePath}`}>     Watch Right Now    </Button>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}