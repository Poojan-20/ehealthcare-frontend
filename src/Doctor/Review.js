import React, { useState, useEffect } from "react";
import { db } from "../firebase.mjs";
import { List, ListItem, Paper, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Review = (props) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const listItem = {
    border: "2px solid #0d7da5",
    borderRadius: "25px",
    margin: "2px",
    boxShadow: 2,
    backgroundColor: "#e6f7fd",
    "&:hover": {
      backgroundColor: "#d0f0fb",
      boxShadow: 3,
      border: "3px solid #0d7da5",
    },
  };
  useEffect(() => {
    db.collection("doctors")
      .doc(props.uid)
      .collection("feedbacks")
      .onSnapshot((snapshot) => {
        setFeedbacks(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <Paper style={{"p": "2","display": "flex", 'flexDirection': "column" , "padding":"20px"}}>
      Patient Reviews
      <List>
        {feedbacks.map((feedback) => {
          return (
            <ListItem style={listItem}>
              <ArrowRightIcon />
              <Typography>{feedback.review}</Typography>
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
};

export default Review;
