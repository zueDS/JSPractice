import React from "react";
import PropTypes from "prop-types";

const imgWithClick = { cursor: "pointer"};

const Photo = ({
    index,
    onClick,
    photo,
    margin,
    direction,
    top,
    left,
    key,
}) => { //photo properties for CSS
    const imgStyle = {margin: margin, display: "block"};
    if (direction === "column"){
        imgStyle.position = "absolute";
        imgStyle.left = left;
        imgStyle.top = top;
    }

    // click handler 
    /* there is an arrow function that effectively does the same thing as an event listener.*/
    const handleClick = (event) => {
        onClick(event, {photo, index});
    };

    /* COMPONENT RETURNS CONTENT
        In here what we have is JSX.
            JSK is extension to the JavaScript coding language that allows you to output content
            in an even simple way than when we use the template literal. */
    return (
        <img
        key = {key}
        style = {onClick ? {...imgStyle, ...imgWithClick }: imgStyle }
        {...photo}
        onClick={onClick ? handleClick : null }
        />
    );
};

/* what happening here is the developer has setup a set of rules for what the different
    properties in this component must look like. */
export const photoPropType = PropTypes.shape({
    key: PropTypes.string,
    src: PropType.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    alt: PropTypes.string,
    title: PropTypes.string,
    srcSet: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    sizes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
});

// standard objects
Photo.propTypes = {
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func,
    photo: photoPropType.isRequired,
    margin: PropTypes.number,
    top: (props) => {
      if (props.direction === "column" && typeof props.top !== "number") {
        return new Error(
          "top is a required number when direction is set to `column`"
        );
      }
    },
    left: (props) => {
      if (props.direction === "column" && typeof props.left !== "number") {
        return new Error(
          "left is a required number when direction is set to `column`"
        );
      }
    },
    direction: PropTypes.string,
  };
  
  export default Photo;