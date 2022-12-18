import React from "react";
import { TextInput } from "./TextInput";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Conversation } from "./Conversation";

export default function ChatMsg({ props }: { props: any }) {
  const [groupId, setGroupId] = useState(1);
  useEffect(() => {
    if (props !== undefined) {
      setGroupId(props);
    }
  }, [props]);
  const handleChangData = (data: any) => {
    console.log(data);
    return;
  };

  return (
    <>
      <Grid>
        <Grid item xs={12}>
          <Conversation props={props}></Conversation>
        </Grid>
        <Grid item xs={12}>
          <TextInput props={handleChangData}></TextInput>
        </Grid>
      </Grid>
    </>
  );
}
