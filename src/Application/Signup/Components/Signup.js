import { useState, React } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import CardMedia from "@mui/material/CardMedia";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import { useDispatch } from "react-redux";
import logo from "../../../Logo/logoSign.png";
import { authApi } from "../../../APIs/axios";
import Select from "@mui/material/Select";
import axios from "axios";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      <Link color="inherit" to="/">
        Already Signed Up? Login
      </Link>
      {"."}
    </Typography>
  );
}
const mdTheme = createTheme();
const theme = createTheme();

function Signup() {
  const [data, setData] = useState({
    rollNo: "",
    password: "",
    userName: "",
    lastName: "",
    role: "",
    
  });
  // isAlumni: "",
    // companyName: "",
    // designation: "",
    // email: "",
    // shortIntro: "",
    // bio: "",
    // socialGithub: "",
    // socialLinkedin: "",
    // socialTwitter: "",
    // socialYoutube: "",
    // socialWebsite: "",
  //   const navigate = useNavigate();
  const handleSubmit = async (event) => {
    authApi.post("registeralumni/", data).then((res) => {
      localStorage.setItem("userData", JSON.stringify(res.data.data));
    });
  };

  const Validation = () => {
    // if (data.roll_no.trim().length === 0 || data.password.trim().length === 0) {
    //   alert("You must fill in every detail");
    //   return false;
    // }
    return true;
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: `linear-gradient(${"#00005b"},${"#5a0006"})`,
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                m: 27,
                height: 500,
                width: 500,
              }}
              image={logo}
              alt="random"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign Up
              </Typography>
              <Box
                component="form"
                noValidate
                //onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} md={12}>
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={4}>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            label="Role"
                            value={data.role}
                            onChange={(e) =>
                              setData({ ...data, role: e.target.value })
                            }
                          >
                            <MenuItem value={"T"}>Teacher/Staff</MenuItem>
                            <MenuItem value={"A"}>Alumni</MenuItem>
                            <MenuItem value={"S"}>Student</MenuItem>
                          </Select>
                        </Grid>
                        <Grid item xs={4}>
                          <TextField
                            required
                            fullWidth
                            name="firstName"
                            label="First Name"
                            id="firstName"
                            value={data.firstName}
                            onChange={(e) =>
                              setData({ ...data, firstName: e.target.value })
                            }
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <TextField
                            required
                            fullWidth
                            name="lastName"
                            label="Last Name"
                            id="lastName"
                            value={data.lastName}
                            onChange={(e) =>
                              setData({ ...data, lastName: e.target.value })
                            }
                          />
                        </Grid>
                        {/* <Grid item xs={4}>
                      <EditIcon
                        onClick={() => {
                          setIsDisabled(false);
                        }}
                      />
                    </Grid> */}
                        <Grid item xs={12}>
                          <TextField
                            autoComplete="email"
                            name="email"
                            required
                            fullWidth
                            id="email"
                            value={data?.email}
                            label="Email"
                            onChange={(e) =>
                              setData({ ...data, email: e.target.value })
                            }
                          />
                        </Grid>
                        {/* <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            id="bio"
                            label="Bio"
                            name="bio"
                            multiline
                            rows={4}
                            value={data?.bio}
                            onChange={(e) =>
                              setData({ ...data, bio: e.target.value })
                            }
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            fullWidth
                            name="socialGithub"
                            label="GitHub"
                            id="socialGithub"
                            value={data?.socialGithub}
                            onChange={(e) =>
                              setData({
                                ...data,
                                socialGithub: e.target.value,
                              })
                            }
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            fullWidth
                            name="socialLinkedin"
                            label="LinkedIn"
                            value={data?.socialLinkedin}
                            id="socialLinkedin"
                            onChange={(e) =>
                              setData({
                                ...data,
                                socialLinkedin: e.target.value,
                              })
                            }
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            fullWidth
                            name="socialTwitter"
                            label="Twitter"
                            id="socialTwitter"
                            value={data?.socialTwitter}
                            onChange={(e) =>
                              setData({
                                ...data,
                                socialTwitter: e.target.value,
                              })
                            }
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            fullWidth
                            name="socialWebsite"
                            label="Website"
                            id="socialWebsite"
                            value={data?.socialWebsite}
                            onChange={(e) =>
                              setData({ ...data, bio: e.target.value })
                            }
                          />
                        </Grid>

                        <Grid item xs={6}>
                          <TextField
                            fullWidth
                            id="companyName"
                            label="Current Company"
                            name="companyName"
                            value={data?.companyName}
                            onChange={(e) =>
                              setData({ ...data, companyName: e.target.value })
                            }
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            fullWidth
                            id="designation"
                            label="Designation"
                            name="designation"
                            value={data?.designation}
                            onChange={(e) =>
                              setData({ ...data, designation: e.target.value })
                            }
                          />
                        </Grid> */}
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            id="password"
                            type="password"
                            onChange={(e) =>
                              setData({ ...data, password: e.target.value })
                            }
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                  {/* <Grid item xs={12}>
                <Paper
                  sx={{ p: 2, display: "flex", flexDirection: "column" }}
                ></Paper>
              </Grid> */}
                </Grid>

                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Sign Up
                </Button>

                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default Signup;
