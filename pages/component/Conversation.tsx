import styledMe from "styled-components";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import { useState, useEffect, memo } from "react";
import { useSession, signOut } from "next-auth/react";
import { server } from "../index";
import clsx from "clsx";

const StyleBox = styledMe(Box)`
  height: 83vh;
  min-height: 50px;
  overflow-y: scroll;
  border-right: 1px solid whitesmoke;
  width: "100%";
  margin-top: 2em;
`;

const ItemLeft = styled(Paper)(({ theme }) => ({
  backgroundColor: "#3e4042b5",
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "white",
  borderRadius: 30,
  maxWidth: "40%",
}));
const ItemRight = styled(Paper)(({ theme }) => ({
  backgroundColor: "rgb(0, 132, 255)",
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "white",
  borderRadius: 30,
  maxWidth: "40%",
  marginRight: 12,
}));
const showMsgCss = {
  display: "none",
};
const showMsgCssA = {};

export const Conversation = ({ props }: { props: any }) => {
  const { data: session, status } = useSession();
  return (
    <>
      <StyleBox>
        <Grid
          container
          rowSpacing={1.5}
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            sx={session?.user?.name == null ? showMsgCss : showMsgCssA}
          >
            <ItemLeft>
              Text chat haha, toi la binh hu ban la ai, hay noi cho toi biet di
              haha lam on di ma :)) Quen mat la phai ghi cho dai ra moi test
              duoc
            </ItemLeft>
          </Grid>
          <Grid item xs={12} sm={12} container justifyContent="flex-end">
            <ItemRight>
              Con lau toi moi noi nha, ban muon biet thi tu di ma tim hieu di
              chu.Doi khi phai biet van dong cai nao
            </ItemRight>
          </Grid>
        </Grid>
      </StyleBox>
    </>
  );
};
