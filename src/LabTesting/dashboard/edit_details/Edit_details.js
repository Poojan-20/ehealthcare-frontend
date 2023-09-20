import React, { useState, useEffect } from "react";
import { db } from "../../../firebase.mjs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Grid, Typography } from "@mui/material";
import Address from "./Address";

const theme = createTheme();

const Edit_Details = (props) => {
  const [Tester, setTester] = useState([]);

  // FETCHING PATIENT'S DATA FROM DB
  useEffect(() => {
    db.collection("LabTester").onSnapshot((snapshot) => {
      setTester(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        {Tester.map((tester) => {
          if (tester.uid === props.uid)
            return (
              <Grid container spacing={1} key={tester.uid}>
                <Grid item xs={10}>
                  <Typography variant="subtitle2" gutterBottom>
                    Edit your details
                  </Typography>
                </Grid>

                <Grid item xs={10}>
                  <Typography>Name: {tester.name}</Typography>
                </Grid>

                <Grid item xs={10}>
                  <Grid container>
                    <Grid item xs={10}>
                      <Typography>
                        Address: {tester.address1}, {tester.address2},
                        <br />
                        {tester.city}, {tester.state}, {tester.country},{" "}
                        {tester.pincode}
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Address uid={tester.uid} />
                    </Grid>
                  </Grid>
                </Grid>

                <br />
                <Grid item xs={10}>
                  <Typography variant="subtitle2">
                    Last updated at : 
                    {new Date(
                      tester.updatedAt.seconds * 1000
                    ).toLocaleDateString("en-US")}
                    , {new Date(tester.updatedAt.seconds * 1000).getHours()}:
                    {new Date(tester.updatedAt.seconds * 1000).getMinutes()}
                  </Typography>
                </Grid>
              </Grid>
            );
        })}
      </Box>
    </ThemeProvider>
  );
};
export default Edit_Details;
