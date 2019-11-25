import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";
const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    imageUrl:
      "https://static.toiimg.com/thumb/71579199/empire-state-building.jpg?width=748&height=499",
    address: "20 W 34th st, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: "u1"
  },
  {
    id: "p2",
    title: "Empire State Building",
    imageUrl:
      "https://static.toiimg.com/thumb/71579199/empire-state-building.jpg?width=748&height=499",
    address: "20 W 34th st, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: "u2"
  }
];
export default function UserPlaces(props) {
  const userID = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userID);
  return <PlaceList items={loadedPlaces} />;
}
