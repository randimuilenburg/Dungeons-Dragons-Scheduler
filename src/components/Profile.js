import React, { useState, useEffect, useSyncExternalStore } from "react";
// import useFetch from "./DataFetching";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";

const UserPage = () => {
  const currentUrl = window.location.href;
  const currentUrlUser = currentUrl.split("/");
  const lastPartCurrentUser = currentUrlUser[currentUrlUser.length - 1];

  return (
    <div>
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
        const fetchUrl = `${url}${lastPartCurrentUser}`;
        const response = await fetch(fetchUrl);
        console.log(fetchUrl);
        if (!response.ok) {
          throw new Error("Network response worked!");
        }
        console.log(response);
        const data = await response.json();
        // {check for response code 404, display error msg accordingly}
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
          <p>Player name: {userData.personalInfo.name}</p>
          {userData.characters.map((character) => (
            <div key={character.id}>
              <p>Character name: {character.name}</p>
              <p>Character nickname: {character.nickname}</p>
              <p>Character race: {character.information.race}</p>
              <p>Character class: {character.information.class}</p>
            </div>
          ))}
          <p>Contact:</p>
          <p>Email: {userData.personalInfo.contact.email}</p>
          <p>Phone: {userData.personalInfo.contact.phone}</p>
        </div>
      ) : (
        <p>Looking for user data...</p>
      )}
    </div>
  );
};

export default UserPage;
