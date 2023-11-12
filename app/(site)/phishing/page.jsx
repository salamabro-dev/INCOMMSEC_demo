import React from "react";
import DarkThemeBanner from "../components/DarkThemeBanner/DarkThemeBanner";
import DarkThemeImageCard from "../components/Card/DarkThemeImageCard";
import Card from "../components/Card/Card";
import ListImage from "../components/List/ListImage";
import TextBlockColTwo from "../components/TextBlock/TextBlockColTwo";

function page() {
  return (
    <>
      <DarkThemeBanner />
      <DarkThemeImageCard />
      <Card />
      <ListImage />
      <TextBlockColTwo />
    </>
  );
}

export default page;
