import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import withStyles from "@mui/material/Grid";
import defaultChatMsgStyles from "@mui/material/Grid";
import { TextInput } from "./TextInput";

export default function ChatMsg({ props }: { props: any }) {
  return (
    <>
      <h1>{props}</h1>
      <TextInput></TextInput>
    </>
  );
}
