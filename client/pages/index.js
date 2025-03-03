import React, { useEffect, useContext, useState } from "react";
import { CrowdFundingContext } from "../Context/Crowdfunding";
import { Hero, Card, PopUp } from "../Components";

const index = () => {
  const {
    titleData,
    getCampaigns,
    createCampaign,
    donate,
    getUserCampaigns,
    getDonations,
  } = useContext(CrowdFundingContext);

  const [allcampaign, setAllcampaign] = useState();
  const [usercampaign, setUsercampaign] = useState();

  useEffect(() => {
    const getCampaignsData = getCampaigns();
    const usercampaignsData = getUserCampaigns();
    return async () => {
      const allData = await  getCampaignsData;
      const userData = await usercampaignsData;
      setAllcampaign(allData);
      setUsercampaign(userData);
    };
  }, []);
  

  //On donating to campaign
  const [openModel, setOpenModel] = useState(false);
  const [donateCampaign, setDonateCampaign] = useState();

  console.log(donateCampaign);
  return(
    <>
      <Hero titleData={titleData} createCampaign= {createCampaign} />

      <Card
        title="All Listed Campaigns"
        allcampaign= {allcampaign}
        setOpenModel= {setOpenModel}
        setDonate= {setDonateCampaign}
      />
      <Card
        title= "My Campaigns"
        allcampaign= {usercampaign}
        setOpenModel= {setOpenModel}
        setDonate= {setDonateCampaign}
      />

      {openModel && (
        <PopUp
          setOpenModel= {setOpenModel}
          getDonations= {getDonations}
          donate= {donateCampaign}
          donateFunction= {donate}
        />
      )} 
    </>
  );
};

export default index;