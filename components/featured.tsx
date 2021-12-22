import React from "react";

//MUI
import { Box } from "@mui/material";

//components
import TitleCard from "./titleCard";

export interface featuredTitles {
  items: {}[];
}
const Featured: React.FC<any> = ({
  featuredTitles: featuredTitles,
  setModalTitle,
  setModalVisibility,
}) => {
  return (
    <Box
      sx={{
        display: "grid",
        height: "22em",
        width: { xs: "90%", sm: "90%", lg: "49em", xl: "49em" },
        overflowX: "auto",
        gridAutoFlow: "column",
      }}
    >
      {featuredTitles.items.map((title: any) => (
        <TitleCard
          key={title.id}
          title={title}
          setModalTitle={setModalTitle}
          setModalVisibility={setModalVisibility}
        />
      ))}
    </Box>
  );
};

export default Featured;
