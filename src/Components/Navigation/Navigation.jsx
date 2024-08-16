import React from 'react'
import { navigationMenu } from './NavigationMenu'
import { useNavigate } from 'react-router-dom'
import { Avatar, Button } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const Navigation = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        console.log("logout");
        handleClose();
        
    }

    return (

        <div className='h-screen sticky top-0'>
            <div>
                <div className='py-2 '>
                    <img src="https://img.freepik.com/free-vector/simple-new-twitter-logo-x-white-background
                    _1017-45426.jpg?w=740&t=st=1723305159~exp=1723305759~hmac=
                    04f28e7aaa80d0b822a2b1c3e23f9e458dfa717f3dc7c010d2fa41bb28a9dbac"
                        alt="" className='max-w-20' />

                </div>
                <div className='space-y-5'>
                    {navigationMenu.map((item) =>
                        <div className='cursor-pointer flex space-x-3 items-center' onClick={
                            () => item.title === "Profile" ? navigate('/profile/${5}') : navigate(item.path)
                        }>
                            {item.icon}  <p className='text-xl'>{item.title}</p>
                        </div>
                    )}
                </div>
                <div className='py-7'>
                    <Button sx={{ 
                        width: "100%",
                        borderRadius: "29px",
                        py: "15px",
                        bgcolor: "#1e88e5"
                     }}
                        variant='contained'>
                        Tweet
                    </Button>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                    <Avatar alt="username" src='https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png' />
                    <div className='-space-y-2'>
                        <span>Switi Patel</span><br />
                        <span className='opacity-70'> @switipatel</span>
                    </div>

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
                   <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </div>
            </div>
        </div>
    )
}

export default Navigation
