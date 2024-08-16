import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TweetCard from "../HomeSection/TweetCard";
import ProfileModel from "./ProfileModel";

const Profile = () => {
  const [tabValue,setTabValue] = useState("1");
  const [openProfileModel,setOpenProfileModel] = useState(false);
  
  const handleOpenProfileModel = () => setOpenProfileModel(true);
   
  const handleClose = () => setOpenProfileModel(false);

  const navigate = useNavigate();

  const handleBack = () => navigate(-1);
  const handleFollowUser = () => {
    console.log("handle follow user");
  };

  const handleTabChange = (event,newValue)=>{
    setTabValue(newValue)
    if (newValue === 4){
      console.log("like tweets")
    }
    else if(tabValue === 1){
      console.log("user tweets");
    }
  }
  return (
    <div>
      <section className={"bg-white z-50 flex items-center sticky top-0 bg-opacity-95"}>
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        />

        <h1 className="py-5 text-xl font-bold opacity-90 ml-5  ">
          Switi Patel
        </h1>
      </section>
      <section>
        <img
          className="w-[100%] h-[15rem] object-cover"
          src="https://cdn.pixabay.com/photo/2024/08/01/10/18/bird-8936789_640.jpg"
          alt=""
        ></img>
      </section>
      <section className="pl-6">
        <div className="flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            alt="Switi Patel"
            src="https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png"
            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
          />

          {true ? (
            <Button
              variant="contained"
              sx={{ borderRadius: "20px" }}
              onClick={ handleOpenProfileModel}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              variant="contained"
              sx={{ borderRadius: "20px" }}
              onClick={handleFollowUser}
            >
              {true ? "Follow" : "Unfollow"}
            </Button>
          )}
        </div>
        <div>
          <div className="flex items-center">
            <h1 className="font-bold text-lg">Switi Patel</h1>
            {true && (
              <img
                className="ml-2 w-5 h-5"
                src="https://img.freepik.com/premium-vector/verified-vector-icon-account-verification-verification-icon_564974-1246.jpg"
                alt=""
              />
            )}
          </div>
          <h1 className="text-gray-500">@switipatel</h1>
        </div>
        <div className="mt-2 space-y-3">
          <p>
            Hello, i am switipatel, so i am here to learn full stack prject with
            java,react,springboot
          </p>
          <div className="py-1 flex space-x-5">
            <div className="flex itec text-gray-500">
              <BusinessCenterIcon />
              <p className="ml-2">Education</p>
            </div>

            <div className="flex itec text-gray-500">
              <LocationOnIcon />
              <p className="ml-2">India</p>
            </div>

            <div className="flex itec text-gray-500">
              <CalendarMonthIcon />
              <p className="ml-2">Joined Jun 2024</p>
            </div>
          </div>

          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-1 font-semibold">
              <span>230</span>
              <span className="text-gray-500">Followers</span>
            </div>

            <div className="flex items-center space-x-1 font-semibold">
              <span>590</span>
              <span className="text-gray-500">Following</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={tabValue}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleTabChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Tweets" value="1" />
                <Tab label="Replies" value="2" />
                <Tab label="Media" value="3" />
                <Tab label="Likes" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
                  {[1,1,1,1,1].map((item) => <TweetCard/>)}
            </TabPanel>
            <TabPanel value="2">Users Replies</TabPanel>
            <TabPanel value="3">Media</TabPanel>
            <TabPanel value="4">Likes</TabPanel>
            
          </TabContext>
        </Box>
      </section>
      <section>
        
        <ProfileModel handleClose={handleClose} openState={openProfileModel} />
      </section>
    </div>
  );
};

export default Profile;
