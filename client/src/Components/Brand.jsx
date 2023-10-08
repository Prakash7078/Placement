import { Button,Card,CardHeader,CardBody,Typography} from '@material-tailwind/react';
import vvit from '../assets/bgmain.jpeg'
import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import back from '../Images/back.jpeg';
import {
    IconButton,
    SpeedDial,
    SpeedDialHandler,
    SpeedDialContent,
    SpeedDialAction,
  } from "@material-tailwind/react";
import { BsChatTextFill } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai';
import AudioComponent from './AudioComponent';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {motion} from 'framer-motion';
import { FcSearch } from 'react-icons/fc';

function Brand() {
    const audio = document.getElementById("audiotag");
    const [isMuted, setIsMuted] = useState(true);
    const[search,setSearch]=useState("");
    const navigate=useNavigate();
    const handleButtonClick = () => {
        audio.play();
        setIsMuted(!isMuted);
      };
      const userInfo = useSelector((state) => state.auth.userInfo);
      console.log(userInfo);
      useEffect(() => {
        // Trigger audio playback when component mounts
      }, [isMuted]);
    // const [openPopover, setOpenPopover] = useState(true);
    // const triggers = {
    //     // onabort: () => setOpenPopover(false),
    //     onClick: () => setOpenPopover(true),
    // };
    const handleSearch=()=>{
      navigate(`/${search}`);
      setSearch("");
    }
  return (
    <div id="#home" className=''>
        <Card
            shadow={false}
            className="relative rounded-none grid h-[25rem] lg:h-[40rem] w-full  sm:max-w-full items-end justify-center overflow-hidden text-center mt-5 md:mt-0"
            >
            <CardHeader
                floated={false}
                shadow={true}
                color="transparent"
                className={`absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center zoom-in-out`}
                style={{ backgroundImage:`url(${vvit})`}}                    >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/40 " />
            </CardHeader>
            <CardBody className="relative px-6 md:px-12 bottom-40 md:right-96 xl:mr-24 hidden lg:block">
                <motion.div
                initial={{scale:0}}
                whileInView={{scale:1}}
                transition={{duration:0.7}}>
                <div className='backdrop-blur-lg rounded-lg'>
                    {/* <PopoverHandler >
                        <Button className=''color='white'>Basic Info</Button>
                    </PopoverHandler> */}
                    <div className="w-[24rem] px-5 py-5 overflow-y-auto lg:flex z-10 hidden">
                        <div className="p-4">
                        <Typography color="white" className="font-semibold mb-2 text-xl">Job Portal</Typography>
                        <Typography variant="small" color="white" className="font-normal mb-4 justify-content">
                            Wide range of opportunities, job alerts and user friendly interface benifits students to look up the jobs they are needed.
                        </Typography>
                        <Link to="/calender" className="inline-block">
                            <Button size="sm" variant="text" className="flex items-center gap-1 capitalize">
                            View Calender
                            </Button>
                        </Link>
                        </div>
                        <img 
                        src={back}
                        alt="image"
                        className="w-1/2 rounded-lg  object-cover"
                        />
                    </div>
                </div>
                </motion.div>
            </CardBody>
            <div className='flex items-center gap-2 relative bottom-10 lg:bottom-80 mx-auto h-fit lg:hidden  w-fit border-b-2 border-white'>
              <input className='bg-transparent w-full outline-none text-white  ' placeholder='Company...' value={search} onChange={(e)=>setSearch(e.target.value.toUpperCase())}/>
              <FcSearch className='cursor-pointer' color='white' size={35} onClick={handleSearch}/>
            </div>
           
        </Card>
       
    </div>
  )
}

export default Brand