import { Stack, Typography } from "@mui/material";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useTranslation } from "react-i18next";
import "./../translations/i18n";

const renderPrevButton = () => (
  <img
    src="images/prev-arrow.svg"
    alt=""
    style={{ marginTop: "64px", marginRight: "60px" }}
  />
);
const renderNextButton = () => (
  <img
    src="images/next-arrow.svg"
    alt=""
    style={{ marginTop: "64px", marginLeft: "60px" }}
  />
);

const devs = [
  {
    name: "Христина Демчина",
    job: "Front-end developer",
    avatar: "images/Dev1.png",
  },
  {
    name: "Олег Раків",
    job: "Q/A Engineer",
    avatar: "images/Dev2.png",
  },
  {
    name: "Владислав Геранін",
    job: "Front-end developer",
    avatar: "images/Dev3.png",
  },
  {
    name: "Артем Молявко",
    job: "UI/UX designer",
    avatar: "images/Dev1.png",
  },
  {
    name: "Cофія Максимсович",
    job: "UI/UX designer",
    avatar: "images/Dev2.png",
  },
  {
    name: "Микита Воробйов",
    job: "Project manager",
    avatar: "images/Dev3.png",
  },
  {
    name: "В'ячеслав Михайленко",
    job: "Front-end developer",
    avatar: "images/Dev1.png",
  },
];

export function Volonteers() {
  const { t } = useTranslation();
  return (
    <Stack sx={{ mt: "190px", mb: "180px", width: "100%" }}>
      <Typography variant="h2" textAlign={"center"} mb={8}>
        {t("volonteers_team")}
      </Typography>
      <AliceCarousel
        mouseTracking
        items={devs.map((dev) => (
          <Card {...dev} />
        ))}
        className="slder"
        responsive={{
          0: {
            items: 1,
          },
          550: {
            items: 2,
          },
          700: {
            items: 3,
          },
          1024: {
            items: 4,
            itemsFit: "contain",
          },
        }}
        disableDotsControls
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
        autoPlay={true}
        infinite={true}
        autoPlayInterval={5000}
      />
    </Stack>
  );
}

const Card = ({ avatar, name, job }) => {
  const handleDragStart = (e) => e.preventDefault();
  return (
    <Stack alignItems={"center"}>
      <img
        src={avatar}
        alt=""
        onDragStart={handleDragStart}
        role="presentation"
      />
      <Typography sx={{ fontWeight: 600, fontSize: 16 }}>{name}</Typography>
      <Typography sx={{ fontWeight: 400, fontSize: 16 }}>{job}</Typography>
    </Stack>
  );
};
