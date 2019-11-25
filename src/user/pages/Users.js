import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: 1,
      name: "Charles Campbell",
      image: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
      places: 3
    }
  ];
  return <UsersList items={USERS} />;
};

export default Users;
