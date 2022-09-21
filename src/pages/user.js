import { Box, Button, Link, Paper, Toolbar, Typography } from "@mui/material";
import { useLoaderData, useNavigate } from "react-router-dom";
import Links from "../components/links";
import Milestones from "../components/milestones";

function User() {
  const navigate = useNavigate();
  const profile = useLoaderData();

  return (
    <Box>
      <Toolbar>
        <Button onClick={() => navigate(-1)}>Back</Button>
      </Toolbar>
      <Box
        sx={{
          backgroundColor: "transparent",
        }}
      >
        <Typography>{profile.name}</Typography>
        <Typography>{profile.bio}</Typography>
        <Links links={profile.links} />
        {profile.milestones && <Milestones milestones={profile.milestones} />}
      </Box>
    </Box>
  );
}

export default User;
