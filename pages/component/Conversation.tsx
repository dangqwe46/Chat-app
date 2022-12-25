import styledMe from "styled-components";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import React from "react";

import { useState, useEffect, memo } from "react";
import { useSession } from "next-auth/react";
import { server } from "../index";

const StyleBox = styledMe(Box)`
  height: 83vh;
  min-height: 50px;
  overflow-y: scroll;
  border-right: 1px solid whitesmoke;
  width: "100%";
  margin-top: 2em;

`;

// display: flex;
// flex-direction: column-reverse;
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

export const Conversation = ({ props }: { props: any }) => {
  const { data: session } = useSession();
  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    // window.scrollTo(0, document.body.scrollHeight);

    fetch(server + `/api/chats/${props}`)
      .then((response) => response.json())
      .then((data) => {
        setChatData(data);
      });
  }, [props]);
  const a = document?.getElementById("divElem");
  a?.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  return (
    <StyleBox id="divElem">
      <Grid
        container
        rowSpacing={1.5}
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        {chatData.map((data: any, index: any) => (
          <React.Fragment key={index}>
            {session?.user?.email != data.from ? (
              <Grid item xs={12} container>
                <ItemLeft>{data.content}</ItemLeft>
              </Grid>
            ) : (
              <Grid item xs={12} container justifyContent="flex-end">
                <ItemRight>{data.content}</ItemRight>
              </Grid>
            )}
          </React.Fragment>
        ))}
      </Grid>
    </StyleBox>
  );
};
