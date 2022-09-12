import axios from "axios";
import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoute({ children }) {
  const userState = useSelector((state) => state.user.user);
  const [data, setData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    const verification = async () => {
      const result = await axios({
        method: "POST",
        url: `http://localhost:8000/clients/payment`,
        data: {
          token: userState.token,
        },
        headers: {
          Authorization: `Bearer ${userState.token}`,
        },
      });
      return result.data;
    };
    verification().then((verify) => {
      console.log(verify);
      if (verify.error) {
        setData(false);
        setIsLoading(false);
      } else if (verify.success) {
        setData(true);
        setIsLoading(false);
      }
    });
  }, []);
  if (isLoading) {
    return <h2>loading</h2>;
  } else {
    console.log(data);
    return data ? children : <Navigate to="/login" replace />;
  }
}
