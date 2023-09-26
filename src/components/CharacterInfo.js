import React, { useState, useEffect, useSyncExternalStore } from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import PlayerAvailability from "./PlayerAvailability";
import { Link } from "react-router-dom";

const sayHi = () => {
  return <hi>Hi!</hi>;
};

export default sayHi;
