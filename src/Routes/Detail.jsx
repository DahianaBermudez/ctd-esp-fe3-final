import React from 'react'
import axios from "axios";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const Detail = () => {
 
    const [detail, setDetail] = useState({});
    const { id } = useParams();
    const url = "https://jsonplaceholder.typicode.com/users/" + id;
    useEffect(() => {
      axios(url).then((res) => {
        console.log(url)
        console.log(res.data);
        setDetail(res.data);
      });
    }, []);
  return (
    <>
      <h1>Detail Dentist id {detail.id} </h1>
        <h3>Name: {detail.name}</h3>
        <h3>Email: {detail.email}</h3>
        <h3>Phone: {detail.phone}</h3>
        <h3>Website: {detail.website}</h3>
    </>
  )
}

export default Detail