import React from "react";

//mui
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";

const TitleCard: React.FC = (props: any) => {
  const handleClick = () => {
    const tmpTitle = {
      title: props.title.title,
      description: props.title.description,
      image: props.title.image,
    };
    props.setModalTitle(tmpTitle);
    props.setModalVisibility(true);
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
        src={props.title.image}
      />
      <CardContent>
        <Typography align="center" gutterBottom variant="h5" component="div">
          {props.title.title}
        </Typography>
        {props.title.weekend ? (
          <Typography align="center" variant="body2" color="text.secondary">
            this week's sell: {props.title.weekend}
          </Typography>
        ) : null}
      </CardContent>
    </Card>
  );
};

export default TitleCard;
