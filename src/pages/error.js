import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function ErrorPage() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDone(true);
    }, 3000);
  });

  if (done) {
    return <Navigate to="/" />;
  }

  return <Box>there was an error</Box>;
}

export default ErrorPage;
