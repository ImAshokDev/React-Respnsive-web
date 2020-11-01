import React from "react";
import { InfoSection, Pricing } from "../../components";
import { homeObjFour } from "./data";

export const Services = () => {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
};
