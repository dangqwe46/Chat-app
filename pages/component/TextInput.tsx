import React from "react";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";

const inputProps = {
  minWidth: 350,
  maxWidth: 430,
};

export const TextInput = ({ props }: { props: any }) => {
  const [text, setText] = useState("");
  useEffect(() => {
    setText("");
  }, [props]);
  return (
    <>
      <Box
        sx={{
          flexGrow: 2,
          position: "fixed",
          bottom: 0,
          width: "100%",
          marginBottom: 5,
        }}
      >
        <Grid container spacing={-1}>
          <Grid item xs={6} md={6}>
            <FormControl size="small" fullWidth>
              <TextField
                value={text ? text : ""}
                inputRef={(input) => input && input.focus()}
                id="outlined-password-input"
                label="Message"
                type="text"
                inputProps={inputProps}
                multiline={true}
                maxRows={4}
                onChange={(e) => setText(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6} md={6}>
            <Button
              color="primary"
              sx={{ bottom: 0, position: "fixed", marginBottom: 6.5 }}
            >
              <SendIcon />
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
