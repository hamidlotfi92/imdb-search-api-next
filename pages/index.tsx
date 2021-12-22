//react
import React, { ChangeEvent, useState } from "react";

//axios
import axios from "axios";

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

//mui
import {
  Button,
  Grid,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Fade } from "@mui/material";
//next
import { GetServerSideProps } from "next";

//interfaces
import { featuredTitles } from "../components/featured";

//components
import Featured from "../components/featured";
import TitleCard from "../components/titleCard";
import Modal from "../components/modal";

export interface title {
  title: string;
  description: string;
  image: string;
}

const Home: NextPage<{ featuredTitles: featuredTitles }> = (props) => {
  const theme = useTheme();
  const matchLg = useMediaQuery(theme.breakpoints.down("lg"));
  //states
  const [value, setValue] = useState("");
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalTitle, setModalTitle] = useState<title>({
    title: "",
    description: "",
    image: "",
  });
  const [searchArray, setSearchArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //handle functions
  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .get(`https://imdb-api.com/en/API/SearchMovie/k_5ubt4su2/${value}`)
      .then((response) => {
        // handle success
        const tmpArray: [] = response.data.results;
        setIsLoading(false);
        if (tmpArray.length > 0) {
          setSearchArray(tmpArray);
        } else {
          alert("Unable to find that, maybe you had a typo");
        }
        console.log(tmpArray);
      })
      .catch(function (error) {
        // handle error
        alert("something went wrong");
        console.log(error);
      });
  };

  const handleInputChange = (e: ChangeEvent) => {
    setValue((e.target as HTMLTextAreaElement).value);
    console.log(value);
  };
  return (
    <div className={styles.container}>
      <Head>IMDB Search</Head>

      <main className={styles.main}>
        <Typography variant={matchLg ? "h3" : "h2"}>
          Looking for a movie?
        </Typography>
        <Typography sx={{ marginTop: "2em" }} variant="h5">
          These are the hot ones on BoxOffice
        </Typography>
        <Featured
          setModalTitle={setModalTitle}
          setModalVisibility={setModalVisibility}
          featuredTitles={props.featuredTitles}
        />
        <Typography sx={{ margin: "2em 0" }} variant="h5">
          Or...Tell me what's in your mind...
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            sx={{ width: "20em" }}
            color="primary"
            label="Enter here"
            variant="filled"
            onChange={handleInputChange}
          />
          <Button sx={{ marginTop: "1em" }} type="submit">
            {" "}
            Search
          </Button>
        </form>
        <Fade in={isLoading} unmountOnExit>
          <CircularProgress />
        </Fade>
        <Grid sx={{ marginTop: "2em" }} justifyContent="center" container>
          {searchArray.map((title: any) => (
            <Grid key={title.id} item>
              <TitleCard
                setModalTitle={setModalTitle}
                setModalVisibility={setModalVisibility}
                title={title}
              />
            </Grid>
          ))}
        </Grid>
        <Modal
          setModalVisibility={setModalVisibility}
          title={modalTitle}
          visibility={modalVisibility}
        />
      </main>

      <footer className={styles.footer}>
        IMDB API TASK DONE by: Hamid Lotfipour.
      </footer>
    </div>
  );
};

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data from external API
  const res = await fetch(`https://imdb-api.com/en/API/BoxOffice/k_5ubt4su2`);
  const featuredTitles: featuredTitles = await res.json();

  // Pass data to the page via props
  return { props: { featuredTitles } };
};
export default Home;
