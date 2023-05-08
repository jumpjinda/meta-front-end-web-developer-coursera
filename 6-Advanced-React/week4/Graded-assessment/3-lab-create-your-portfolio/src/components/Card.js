import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <div style={{
      borderRadius: "10px",
      backgroundColor: "white",
      color: "black",
    }}>
      <img src={imageSrc} style={{
        borderRadius: "10px",
        marginBottom: "10px"
      }} />
      <div style={{
        marginLeft: "10px",
        marginRight: "10px"
      }}>
        <p><b>{title}</b></p>
        <p style={{
          marginTop: "10px",
          fontSize: "0.8rem",
          color: "gray"
        }}>{description}</p>
        <p style={{
          marginTop: "10px",
          marginBottom: "10px",
          fontSize: "0.8rem"
        }}>See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></p>
      </div>
    </div>
  );
};

export default Card;
