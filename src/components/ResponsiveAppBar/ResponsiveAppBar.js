import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "./logo.png";
import { useEffect } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

//const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = ({ pages, settings, isUser, isAdmin }) => {
  useEffect(() => {
    console.log(settings);
    
  }, []);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            {" "}
            <Tooltip title=" Home Page" placement="right">
              <img
                src={logo}
                width="198"
                height="82"
                style={{ cursor: "pointer" }}
                onClick={
                  isAdmin === true ? (
                    () => {
                      window.location.href = "/AdminHomepage";
                    }
                  ) : isUser === true ? (
                    () => {
                      window.location.href = "../HomePage";
                    }
                  ) : (
                    <></>
                  )
                }
              />
            </Tooltip>
          </Typography>

          {pages.length !== 0 ? (
            <>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </>
          ) : (
            <></>
          )}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <Tooltip title=" Home Page" placement="right">
              <img
                src={logo}
                width="198"
                height="82"
                style={{ cursor: "pointer" }}
                onClick={
                  isAdmin === true ? (
                    () => {
                      window.location.href = "/AdminHomepage";
                    }
                  ) : isUser === true ? (
                    () => {
                      window.location.href = "../HomePage";
                    }
                  ) : (
                    <></>
                  )
                }
              />
            </Tooltip>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={
                  page === "Create Flight"
                    ? () => {
                        window.location.href = "../createFlight";
                      }
                    : page === "Reserved Flights" && isUser === true
                    ? () => {
                        window.location.href = "../ReservedFlights";
                      }
                    : handleCloseNavMenu
                }
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            
            {settings.length!== 0 ? (
              <>
              <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src={"AccountCircleOutlinedIcon"} />
              </IconButton>
            </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting}  onClick={
                    setting === "profile"
                      ? () => {
                          window.location.href = "../UserProfile";
                        }
                      : handleCloseNavMenu
                  }>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
              </>
            ) : (
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src={"AccountCircleOutlinedIcon"} />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
