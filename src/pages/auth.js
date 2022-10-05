import { Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import Layout from "./_layout";

function Auth() {
  const authData = useLoaderData();

  return (
    <Layout>
      <Typography variant="h1" textAlign="center">
        Get Authenticated
      </Typography>

      <Typography variant="h2" textAlign="center">
        {JSON.stringify(authData)}
      </Typography>
    </Layout>
  );
}

export default Auth;
