import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useState } from "react";
import Input from "@mui/material/Input";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const gifts = ["CPU i9", "RAM 32G", "RGB Keyboard"];
function generate(element: React.ReactElement) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}
const Test = () => {
  const [gift, setGift] = useState();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length);
    console.log(index);
    setGift(gifts[index] as any);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box
          sx={{ bgcolor: "#cfe8fc", height: "100vh" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <Grid container spacing={3}>
            <Grid item xs>
              <Item>variable width content</Item>
            </Grid>
            <Grid item xs={y}>
              <Item>xs=6</Item>
            </Grid>
            <Grid item xs>
              <Item>xs</Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};
export default Test;
