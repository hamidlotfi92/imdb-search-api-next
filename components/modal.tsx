import React, { SetStateAction } from "react";

import { Dialog, Typography, Grid } from "@mui/material";

import { title } from "../pages";
import Image from "next/image";
interface modalProps {
  visibility: boolean;
  title: title;
  setModalVisibility: any;
}

const Modal: React.FC<modalProps> = ({
  visibility,
  title,
  setModalVisibility,
}) => {
  const handleClose = () => {
    setModalVisibility(false);
  };
  return (
    <Dialog
      sx={{
        background: "#ffffff89",
        backdropFilter: "blur(7px)",
        "& .MuiPaper-root": {
          background: "#ffffff40",
          backdropFilter: "blur(7px)",
        },
      }}
      onClose={() => handleClose()}
      open={visibility}
    >
      <Grid
        alignItems="center"
        container
        direction="column"
        sx={{
          height: { xs: "30em", sm: "40em" },
          width: "20em",
          background: "#a3664259",
          backdropFilter: "blur(7px)",
        }}
      >
        <Grid sx={{ marginTop: "1em" }} item>
          <img
            style={{ maxWidth: "15em", maxHeight: "15em" }}
            src={title.image}
            alt="movie image"
          />
        </Grid>
        <Grid
          alignItems="center"
          direction="column"
          justifyContent="space-evenly"
          item
          container
        >
          <Grid item>
            <Typography align="center" variant="h6">
              Name:{" "}
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="center" variant="h5">
              {title.title}
            </Typography>
          </Grid>
          {title.description ? (
            <Grid item>
              <Typography align="center" variant="h6">
                Description:{" "}
              </Typography>
            </Grid>
          ) : (
            <Grid item>
              <Typography align="center" variant="h6">
                This weekend sell:{" "}
              </Typography>
            </Grid>
          )}
          <Grid item>
            <Typography align="center" variant="h6">
              {title.weekend}
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="center" variant="h6">
              {title.description}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default Modal;
