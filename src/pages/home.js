import { useContext } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { MdBookmarkBorder, MdOutlineSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { HomeContext } from "../contexts/home.context";
import Layout from "./_layout";

function Home() {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { query, result, handleQuery } = useContext(HomeContext);

  return (
    <Layout>
      <Paper
        elevation={1}
        sx={{
          py: 1,
          px: 2,
          mb: 5,
          mx: "auto",
          display: "flex",
          maxWidth: { md: "70%" },
          flexDirection: "row",
        }}
      >
        <InputBase
          placeholder="Search profiles..."
          value={query}
          sx={{ flex: 1, mr: 2 }}
          onChange={handleQuery}
          onKeyPress={handleQuery}
        />
        {isMobile ? (
          <IconButton disabled={query.length >= 4 ? false : true}>
            <MdOutlineSearch />
          </IconButton>
        ) : (
          <Button
            disabled={query.length >= 4 ? false : true}
            onClick={handleQuery}
          >
            Search
          </Button>
        )}
      </Paper>

      <Box px={{ xs: 0, sm: 2, md: 5 }} py={1}>
        {result.length > 0 ? (
          <Grid container spacing={3}>
            {result.map((res, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  onClick={() => navigate(`/${res.item.username}`)}
                  sx={{
                    transition: "all .15s",
                    "&:hover": {
                      cursor: "pointer",
                      transform: "scale(1.05)",
                      backgroundColor: (theme) => theme.palette.action.focus,
                    },
                  }}
                >
                  <CardHeader
                    action={
                      <IconButton>
                        <MdBookmarkBorder />
                      </IconButton>
                    }
                    avatar={
                      <Avatar
                        alt={res.item.name}
                        src={res.item.avatar}
                        sx={{ height: 70, width: 70 }}
                      />
                    }
                  />
                  <CardContent>
                    <Typography variant="h6" noWrap={true}>
                      {res.item.name}
                    </Typography>
                    <Typography>{res.item.username}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box>
            <Typography textAlign="center" variant="h1">
              Welcome to Multilinks
            </Typography>
          </Box>
        )}
      </Box>
    </Layout>
  );
}

export default Home;
