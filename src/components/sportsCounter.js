import { useState } from "react";
import React from "react";
import img from "../assets/istockphoto-1471979698-612x612(2).png";
import { Col, Row } from "antd";

const SportsCounter = () => {
  const storedTeamTwoPoints = localStorage.getItem("teamTwo");
  const initialTeamTwoPoints = storedTeamTwoPoints
    ? parseInt(storedTeamTwoPoints)
    : 0;

  const storedTeamOnePoints = localStorage.getItem("teamTwo");
  const initialTeamOnePoints = storedTeamOnePoints
    ? parseInt(storedTeamTwoPoints)
    : 0;
  const [teamOnePoints, setTeamOnePoints] = useState(initialTeamOnePoints);

  const [teamTwoPoints, setTeamTwoPoints] = useState(initialTeamTwoPoints);
  const [teamOneName, setTeamOneName] = useState("alr");
  const [teamTwoName, setTeamTwoName] = useState("nay");

  const addTeamOne = () => {
    let i = teamOnePoints;
    setTeamOnePoints(i + 1);
    localStorage.setItem("teamOne", teamOnePoints);
  };
  const addTeamTwo = () => {
    let i = teamTwoPoints;

    setTeamTwoPoints(i + 1);
    localStorage.setItem("teamTwo", teamTwoPoints);
  };

  return (
    <div className="sports-container">
      <img src={img} alt="img" className="img"></img>
      <Row>
        <Col span={2}>
          <Row justify={"center"}>
            <h1 onClick={addTeamOne}>{teamOneName}</h1>
          </Row>
        </Col>
        <Col span={2}>
          <Row justify={"center"}>
            <h1>{teamOnePoints}</h1> <h1>-</h1> <h1>{teamTwoPoints}</h1>
          </Row>
        </Col>
        <Col span={2}>
          <Row justify={"center"}>
            <h1 onClick={addTeamTwo}>{teamTwoName}</h1>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default SportsCounter;
