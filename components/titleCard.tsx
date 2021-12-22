import React from "react";

//mui
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";
import { title } from "../pages/index";
interface cardInput {
  title: title;
  setModalTitle: any;
  setModalVisibility: any;
}
const TitleCard: React.FC<cardInput> = ({
  title,
  setModalTitle,
  setModalVisibility,
}) => {
  const handleClick = () => {
    const tmpTitle = {
      title: title.title,
      description: title.description,
      image: title.image,
      //add weekend sell if available
      weekend: title.weekend ? title.weekend : null,
    };
    setModalTitle(tmpTitle);
    setModalVisibility(true);
  };
  return (
    <Card
      sx={{
        height: "90%",
        width: "15em",
        margin: "10px",
        marginTop: "1em",
        msOverflowStyle: "none",
      }}
      onClick={handleClick}
    >
      <CardMedia
        sx={{ objectFit: "contain", height: "12em" }}
        component="img"
        src={title.image}
      />
      <CardContent>
        <Typography align="center" gutterBottom variant="h5" component="div">
          {title.title}
        </Typography>
        {title.weekend ? (
          <Typography align="center" variant="body2" color="text.secondary">
            this week`&apos;s sell: {title.weekend}
          </Typography>
        ) : null}
      </CardContent>
    </Card>
  );
};

export default TitleCard;
