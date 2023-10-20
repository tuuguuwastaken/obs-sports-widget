import { useState } from "react";
import React from "react";
import img from "../assets/istockphoto-1471979698-612x612(2).png";
import { Col, Row } from "antd";

const SportsCounter = () => {
  const [teamOneName, setTeamOneName] = useState("alr");
  const [teamTwoName, setTeamTwoName] = useState("nay");
  const [teamOnePoints, setTeamOnePoints] = useState(122);
  const [teamTwoPoints, setTeamTwoPoints] = useState(222);

  return (
    <div className="sports-container">
      <img src={img} alt="img" className="img"></img>
      <Row>
        <Col span={2}>
          <Row justify={"center"}>
            <h1>{teamOneName}</h1>
          </Row>
        </Col>
        <Col span={2}>
          <Row justify={"center"}>
            <h1>{teamOnePoints}</h1> <h1>-</h1> <h1>{teamTwoPoints}</h1>
          </Row>
        </Col>
        <Col span={2}>
          <Row justify={"center"}>
            <h1>{teamTwoName}</h1>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default SportsCounter;
