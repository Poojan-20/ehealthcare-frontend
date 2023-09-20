import * as React from "react";
import PropTypes from "prop-types";

const Title = (props) => {
  return (
    <>
      <div className="col-md-6 mb-3">
        {props.children}
      </div>
    </>

  );
};

Title.propTypes = {
  children: PropTypes.node,
};

export default Title