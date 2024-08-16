import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { useFormik } from 'formik';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
  outline:'none',
  borderRadius:4
};

export default function ReplyModel({handleClose,open}) {

    const [uploadingImage,setUploadingImage] = useState(false);
    const [selectedImage,setSelectedImage] = useState("")
 
  const navigate = useNavigate()

  const handleSubmit = (values)=>{
    console.log("handle submit",values);
    
  }

  const formik = useFormik({
    initialValues:{
        content:"",
        image:"",
        twitId:4,
    },
    onSubmit:handleSubmit
  })

  const handleSelectImage = (event) =>{
    setUploadingImage(true);
    const imgUrl = event.target.files[0]
    formik.setFieldValue("image",imgUrl);
    setSelectedImage(imgUrl)
    setUploadingImage(false);
}

 
  return (
    <div>
   <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
                        
                    </div>

                    {/* Tweet Card */}
                    <div className='mt-2'>
                        <div className='cursor-pointer' onClick={()=>navigate('/twit/${3}')}>
                            <p className='mb-2 p-0'>
                                Nice Project - tweeter clone with java and react
                            </p>
                               
                        </div>

                    </div>

                </div>
               
            </div>
            <section className={'py-10'}>
           <div className='flex space-x-5'>
            <Avatar alt='username' src='https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png' />
                    <div className='w-full'>
                        <form>
                            <div className='w-full'>
                                <input type='text' name='content' placeholder='What is happening'
                                  className={'border-none outline-none text-xl bg-transparent'}
                                  {...formik.getFieldProps("content")}
                                  />
                                  {formik.errors.content && formik.touched.content && (
                                    <span className='text-red-600'>{formik.errors.content}</span>
                                  )}
                            </div>
                            {/* <div>
                                <img src='' alt='' />
                            </div> */}

                            <div className='flex justify-between items-center mt-5'>
                               <div className='flex space-x-5 items-center'>
                                <label className='flex space-x-2 items-center cursor-pointer rounded-md'>
                                <ImageIcon className='text-[#1d9bf0]'/>
                                <input 
                                    type='file'
                                    name='imageFile' 
                                    className='hidden'
                                    onChange={handleSelectImage} 
                                />
                              
                                </label>
                                <FmdGoodIcon className='text-[#1d9bf0]'/>
                                <TagFacesIcon className='text-[#1d9bf0]' />
                                </div>
                                 <div>
                                    <Button  onClick={formik.handleSubmit} sx={{ 
                                        width: "100%", 
                                        borderRadius: "20px",
                                        paddingY: "8px",
                                        paddingX :"20px" ,
                                        bgcolor: "#1e88e5" }}
                                         variant='contained'
                                         type='submit'
                                         >
                                        Tweet
                                    </Button>
                                 </div>
                            </div>
                        </form>
                    </div>
           </div>
        </section>
        </Box>
      </Modal>
    </div>
  );
}
