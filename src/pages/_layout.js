import { Box, Typography, IconButton, Container, Toolbar } from "@mui/material";
import Logo from "../material/logo";
import Main from "../material/main";
import Page from "../material/page";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Page>
      <Container component="header">
        <Toolbar sx={{ mb: 5 }}>
          <Box sx={{ minWidth: 50 }}>
            {location.pathname !== "/" && (
              <IconButton
                onClick={() => navigate(-1)}
                sx={{
                  fontSize: 15,
                  borderRadius: 1,
                  border: "1px solid grey",
                }}
              >
                <MdOutlineArrowBackIos />
              </IconButton>
            )}
          </Box>
          <Box sx={{ flex: 1, m: 1 }}>
            <Logo> Multilinks </Logo>
          </Box>
        </Toolbar>
      </Container>
      <Main>{children}</Main>
      <Box sx={{ py: 5 }}>
        <Typography textAlign="center">&copy; 2022 Multilinks</Typography>
      </Box>
    </Page>
  );
}

export default Layout;
