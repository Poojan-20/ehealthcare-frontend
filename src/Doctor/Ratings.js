import { Paper, Typography, Rating } from "@mui/material";
import React, { useState, useEffect } from "react";
import { db } from "../firebase.mjs";

const Ratings = (props) => {
  const [feedbacks, setFeedbacks] = useState([]);
  var rating = 0;
  var number = 0;

  useEffect(() => {
    db.collection("doctors")
      .doc(props.uid)
      .collection("feedbacks")
      .onSnapshot((snapshot) => {
        setFeedbacks(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  {
    feedbacks.map((feedback) => {
      rating += feedback.rating;
      number++;
    });
  }

  rating = rating / number;

  return (
    <>
      {/* <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar"> */}
          {/* <div className="ms-content-wrapper">
            <div className="row">
              <div className="col-xl-12 col-md-12">
                <div className="ms-panel"> */}
                  {/* <div className="ms-panel-header ms-panel-custome"> */}
                  <Paper style={{ "p": "2px", "display": "flex", "flexDirection": "column" , "padding":"20px"}}>
                    Average Rating Given by Patients
                    <Rating
                      name="half-rating-read"
                      defaultValue={rating}
                      value={rating}
                      precision={0.5}
                      readOnly
                    />
                    <Typography>{rating}</Typography>
                  </Paper>
                {/* </div>
              </div>
            </div>
          </div> */}
          {/* </div> */}

      {/* </div> */}



    </>
  );
};

export default Ratings;
