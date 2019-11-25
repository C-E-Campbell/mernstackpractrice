import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: 1,
      name: "Charles Campbell",
      image:
        "https://media.licdn.com/dms/image/C4E03AQFiWFNCsF2oJA/profile-displayphoto-shrink_200_200/0?e=1580342400&v=beta&t=VE1Y__QTuXUGotyaT0brQ8gpHKqACTuqnDV3aIexUmU",
      places: 2
    }
  ];
  return <UsersList items={USERS} />;
};

export default Users;
