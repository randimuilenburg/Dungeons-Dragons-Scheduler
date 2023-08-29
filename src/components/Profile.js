import React, { useState, useSyncExternalStore } from "react";
import useFetch from "./DataFetching";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

// DONE Step 1: h1 tag with url ex: <h1>localhost:3000/profiles/8</h1>
// Step 2: now just the number ex: <h1>8</h1>
// Step 3: Add useFetch hook to get data for that user, ex. localhost:4000/api/users/8
// Step 4: save that user data to state

let userPage = () => {
  const currentUrl = window.location.href;
  return (
    <div>
      <h1>The URL is {currentUrl}.</h1>
    </div>
  );
};

// FAILED:
// const FetchUsers = () => {
//   const { data, loading, error } = useFetch("/api/users");
//   return (
//     <div>
//       <Container>
//         <Row>
//           <Col xs={12} lg={8}>
//             <h3>View current players:</h3>
//             {loading ? (
//               <p>Loading...</p>
//             ) : error ? (
//               <p>Error: {error}</p>
//             ) : (
//               <UserPage users={data.users} />
//             )}
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// const UserPage = (users) => {
//   //   return <h1>This is NUMBER's user page!</h1>;
//   const localhostUrl = "localhost:4000/users";
//   return (
//     <div>
//       <h1>This is a profile for {localhostUrl}.</h1>;
//       <ul>
//         {users.ids.map((id) => (
//           <li key={id}>
//             <a href={`${localhostUrl}${id}`}>User's link</a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

export default userPage;
