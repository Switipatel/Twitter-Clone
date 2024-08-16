import React from 'react'
import RepeatIcon from '@mui/icons-material/Repeat';
import { Avatar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReplyModel from './ReplyModel';
import { useState } from 'react';


const TweetCard = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const [openReplyModel,setOpenReplyModel] = useState(false);
    const handleOpenReplyModel = () => setOpenReplyModel(true);  
    const handleCloseReplyModel = () => setOpenReplyModel(false);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleDeleteTweet = () => {
        console.log("delete tweet");
        handleClose();
    }


    const handleCreateRetweet = ()=>{
        console.log("handle create retweet");
        
    }
    const handleLikeTtweet = ()=>{
        console.log("Handle like tweet");
        
    }
    return (
        <React.Fragment>
            {/* <div className='flex items-center font-semibold text-gray-700 py-2'>
            <RepeatIcon/>
            <p>You ReTweet</p>
        </div> */}

            <div className='flex space-x-5'>
                <Avatar
                    onClick={() => navigate('/profile/${6}')}
                    className='cursor-pointer'
                    alt='username'
                    src='https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png'

                />
                <div className='w-full'>
                    <div className='flex justify-between items-center'>
                        <div className='flex cursor-pointer items-center space-x-2'>
                            <span className='font-semibold'>Switi Patel</span>
                            <span className='text-gray-600'>@switipatel   . 2m</span>
                            <img
                                className='ml-2 w-5 h-5'
                                src='https://img.freepik.com/premium-vector/verified-vector-icon-account-verification-verification-icon_564974-1246.jpg'
                                alt='' />
                        </div>
                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MoreHorizIcon />
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                                <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>
                            </Menu>
                        </div>
                    </div>

                    {/* Tweet Card */}
                    <div className='mt-2'>
                        <div className='cursor-pointer' onClick={()=>navigate('/twit/${3}')}>
                            <p className='mb-2 p-0'>
                                Nice Project - tweeter clone with java and react
                            </p>
                            <img 
                                className='w-[28rem] border border-gray-400 rounded-md'
                                src='https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg'
                                alt=''
                                />       
                        </div>
                        <div className='py-5 flex flex-wrap justify-between items-center'>
                             <div className='space-x-3 flex items-center text-gray-600'>
                                  <ChatBubbleOutlineIcon 
                                     className='cursor-pointer'
                                     onClick={handleOpenReplyModel}/>
                                     <p>43</p>
                             </div>
                             <div className={`${true? 'text-pink-600':'text-gray-600'} space-x-3 flex items-center`}>
                                <RepeatIcon
                                     onClick={handleCreateRetweet}
                                    className='cursor-pointer'/>
                                    <p>54</p>
                             </div>
                             <div className={`${true? 'text-pink-600':'text-gray-600'} space-x-3 flex items-center`}>
                               {true ? <FavoriteIcon
                                          onClick={handleLikeTtweet}
                                          className='cursor-pointer'/>
                                    :  <FavoriteBorderIcon
                                          onClick={handleCreateRetweet}
                                          className='cursor-pointer'/>
                                }
                                    <p>54</p>
                             </div>
                             <div className='space-x-3 flex items-center text-gray-600'>
                                  <BarChartIcon 
                                     className='cursor-pointer'
                                     onClick={handleOpenReplyModel}/>
                                     <p>43</p>
                             </div>
                             <div className='space-x-3 flex items-center text-gray-600'>
                                  <FileUploadIcon 
                                     className='cursor-pointer'
                                     onClick={handleOpenReplyModel}/>
                                     
                             </div>
                        </div>
                    </div>

                </div>
            </div>
            <section>
                <ReplyModel  open={openReplyModel} handleClose={handleCloseReplyModel}/>
            </section >
        </React.Fragment>
    )
}

export default TweetCard
