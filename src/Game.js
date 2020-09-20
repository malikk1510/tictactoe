import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Icons from "./Icons";
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
//
let cardArray = new Array(9).fill("empty");

function Game() {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    cardArray.fill("empty");
  };

  const checkWinner = () => {
    if (
      cardArray[0] === cardArray[1] &&
      cardArray[0] === cardArray[2] &&
      cardArray[0] !== "empty"
    ) {
      setWinMessage(`${cardArray[0]} Won`);
    } else if (
      cardArray[3] === cardArray[4] &&
      cardArray[3] === cardArray[5] &&
      cardArray[3] !== "empty"
    ) {
      setWinMessage(`${cardArray[3]} Won`);
    } else if (
      cardArray[6] === cardArray[7] &&
      cardArray[6] === cardArray[8] &&
      cardArray[6] !== "empty"
    ) {
      setWinMessage(`${cardArray[6]} Won`);
    } else if (
      cardArray[0] === cardArray[3] &&
      cardArray[0] === cardArray[6] &&
      cardArray[0] !== "empty"
    ) {
      setWinMessage(`${cardArray[0]} Won`);
    } else if (
      cardArray[1] === cardArray[4] &&
      cardArray[1] === cardArray[7] &&
      cardArray[1] !== "empty"
    ) {
      setWinMessage(`${cardArray[1]} Won`);
    } else if (
      cardArray[2] === cardArray[5] &&
      cardArray[2] === cardArray[8] &&
      cardArray[2] !== "empty"
    ) {
      setWinMessage(`${cardArray[2]} Won`);
    } else if (
      cardArray[0] === cardArray[4] &&
      cardArray[0] === cardArray[8] &&
      cardArray[0] !== "empty"
    ) {
      setWinMessage(`${cardArray[0]} Won`);
    } else if (
      cardArray[2] === cardArray[4] &&
      cardArray[2] === cardArray[6] &&
      cardArray[2] !== "empty"
    ) {
      setWinMessage(cardArray[2] + " Wins");
    }
  };

  const changeCardArray = (indexNumber) => {
    if (cardArray[indexNumber] === "empty") {
      cardArray[indexNumber] = isCross ? "circle" : "cross";
      setIsCross(!isCross);
    } else {
      toast.error("Already filled ! " + cardArray[indexNumber]);
    }
    console.log(cardArray[indexNumber]);
  };

  return (
    <>
      <Container className="p-5 first1">
        <ToastContainer position="bottom-center" color="black" />
        <Row>
          <Col md={6} className="offset-md-3">
            {winMessage !== "" ? (
              <div className="mb-2 mt-2">
                <h1 className=" text-uppercase text-center text-info ">
                  {winMessage}
                </h1>
                <Button
                  color="success text-uppercase"
                  block
                  onClick={reloadGame}
                >
                  Reload game
                </Button>
              </div>
            ) : (
              <h1 className=" text-warning text-uppercase text-center ">
                {isCross ? "Circle" : "Cross"} turn
              </h1>
            )}
            <div className="grid">
              {cardArray.map((value, indexNumber) => {
                return (
                  <Card
                    key={indexNumber}
                    id={indexNumber}
                    onClick={() => {
                      changeCardArray(indexNumber);
                      checkWinner();
                    }}
                  >
                    <CardBody className="box">
                      <Icons name={value} />
                    </CardBody>
                  </Card>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Game;
