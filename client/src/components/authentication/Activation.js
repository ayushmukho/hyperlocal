import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as api from "../../api/index";

function Activation() {
  const { id } = useParams();
  const [message, setMessage] = useState("");

  const activation = async () => {
    try {
      const response = await api.activation(id);
      console.log(response.data.message);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };
  useEffect(() => {
    activation();
  }, []);
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default Activation;
