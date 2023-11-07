import React from "react";
import DarkThemeBanner from "../components/DarkThemeBanner/DarkThemeBanner";
import DarkThemeSecondaryBanner from "../components/DarkThemeSecondaryBanner/DarkThemeSecondaryBanner";
import Card from "../components/Card/Card";
import List from "../components/List/List";
import TextBlock from "../components/TextBlock/TextBlock";
import Pricing from "../components/Pricing/Pricing";
import Form from "../components/Form/Form";

function page() {
  return (
    <>
      <DarkThemeBanner />
      <DarkThemeSecondaryBanner />
      <Card />
      <List />
      <TextBlock />
      <Pricing />
      <Form />
    </>
  );
}

export default page;
