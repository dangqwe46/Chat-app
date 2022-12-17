import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import withStyles from "@mui/material/Grid";
import defaultChatMsgStyles from "@mui/material/Grid";
import { TextInput } from "./TextInput";
import { useState, useEffect } from "react";

export default function ChatMsg({ props }: { props: any }) {
  const [groupId, setGroupId] = useState(1);
  useEffect(() => {
    if (props !== undefined) {
      setGroupId(props);
      
    }
  }, [props]);

  return (
    <>
      <h1>{groupId}</h1>
      <TextInput props={groupId}></TextInput>
    </>
  );
}
