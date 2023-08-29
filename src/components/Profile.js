import React, { useState, useEffect, useSyncExternalStore } from "react";
// import useFetch from "./DataFetching";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";

// Step 4: save that user data to state

const UserPage = () => {
  const currentUrl = window.location.href;
  const currentUrlUser = currentUrl.split("/");
  const lastPartCurrentUser = currentUrlUser[currentUrlUser.length - 1];

  return (
    <div>
      {/* <h1>This page is for user {lastPartCurrentUser}.</h1> */}
      <FetchForProfile lastPartCurrentUser={lastPartCurrentUser} />
    </div>
  );
};

const FetchForProfile = ({ lastPartCurrentUser }) => {
  const url = "http://localhost:4000/api/users/";
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${url}${lastPartCurrentUser}`);
        if (!response.ok) {
          throw new Error("Network response worked!");
        }
        console.log(response);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    fetchUserData();
  }, [lastPartCurrentUser]);

  return (
    <div>
      {userData ? (
        <div>
          <p>Player name: {userData.name}</p>
          <p>Character name: {userData.character}</p>
          <p>Character race: {userData["character race"]}</p>
          <p>Character class: {userData["character class"]}</p>
          <p>Contact: {userData.email}</p>
          <p>More data goes here...</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default UserPage;
