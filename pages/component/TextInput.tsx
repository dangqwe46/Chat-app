import React from "react";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";

const Item = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "white",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const inputProps = {
  autoFocus: true,
  fullWidth: false,
  size: "medium",
};

export const TextInput = () => {
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
                id="outlined-password-input"
                label="Message"
                type="text"
                autoComplete="current-password"
                inputProps={inputProps}
                multiline={true}
                maxRows={8}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6} md={6}>
            <Item>
              <Button variant="contained" color="primary">
                <SendIcon />
              </Button>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
