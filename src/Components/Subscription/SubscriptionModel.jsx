import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const features = ["Best for personnel that are expected to be heavy users of the system",
         "Unlimited Form entries can be submitted by Premium users",
        
         "Custom “Request Services” button and broader reach to potential clients.",
         "Unlimited search, InMail, and AI help in drafting and editing messages.",
         "Rich media and reviews in a dedicated section."
]
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: 4,
    outline: 'none',
    boxShadow: 24,
    p: 4,
};

export default function SubscriptionModel({open,handleClose}) {
    const [plan, setPlan] = React.useState('Anually');
    
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="flex items-center space-x-3">
                        <IconButton onClick={handleClose} aria-label="delete">
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <div className='flex justify-center py-10'>
                        <div className='w-[80%] space-y-10'>
                            <div className='p-5 rounded-md flex items-center justify-between bg-slate-300 shadow-lg'>
                                <h1 className='text-xl pr-5'>
                                    Subscribed Users with Verified Phone Number will get Blue Checkmark once Approved.
                                </h1>
                                <img src="https://static.vecteezy.com/system/resources/previews/029/169/452/non_2x/verify-blue-tick-free-png.png" alt=""
                                    className='w-24 h-24' />
                            </div>
                            <div className='flex justify-between border rounded-full px-5 py-3  border-gray-700'>
                                <div>
                                    <span
                                        onClick={() => setPlan("Anually")}
                                        className={`${plan === "Anually" ? "text-black" : "text-gray-400"} cursor-pointer`}> Anually</span>
                                    <span className='text-green-500 text-sm ml-5 '>SAVE 12%</span>
                                </div>
                                <p
                                    onClick={() => setPlan("Monthly")}
                                    className={`${plan === "Monthly" ? "text-black" : "text-gray-400"} cursor-pointer`}>
                                    Monthly
                                </p>
                            </div>
                           <div className='space-y-3'>
                              {features.map((item)=><div className="flex items-center space-x-5">
                                 <FiberManualRecordIcon sx={{ width: "7px", height:"7px" }}/>
                                    <p className='text-xs'>{item}</p>
                                </div>)}
                            </div>
                            <div className='cursor-pointer flex justify-center bg-gray-800 text-white rounded-full px-5 py-3'>
                                <span className='line-through italic'>
                                 ₹ 7,800.00
                                </span>
                                <span className='px-5'>₹ 6,800/year</span>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
