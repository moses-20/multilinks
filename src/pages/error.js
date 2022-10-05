import { Stack, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";
import Layout from "./_layout";

function ErrorPage({ message }) {
  const error = useRouteError();

  console.error(error);

  return (
    <Layout>
      <Stack direction="row" justifyContent="center" sx={{ mt: 5 }}>
        <Typography textAlign="center" variant="h3">
          {JSON.stringify(error)}
        </Typography>
      </Stack>
    </Layout>
  );
}

export default ErrorPage;
