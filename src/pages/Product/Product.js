import React from "react";
import { InfoSection, Pricing } from "../../components";
import { homeObjFour, homeObjThree, homeObjTwo } from "./data";

export const Product = () => {
  return (
    <>
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
};
