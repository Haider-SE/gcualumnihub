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
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import logo from "../../../Logo/logoSign.png";
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
    password: "",
    first_name: "",
    last_name: "",
    role: "",
    is_alumni: "",
    company_name: "",
    designation: "",
    email: "",
    short_intro: "",
    bio: "",
    social_github: "",
    social_linkedin: "",
    social_twitter: "",
    social_youtube: "",
    social_website: "",
  });
  //   const navigate = useNavigate();
  //   const handleSubmit = async (event) => {
  //     Validation() && event.preventDefault();
  //     authApi.post("registeralumni/", data).then((res) => {
  //       dispatch(login(res.data.data));
  //       localStorage.setItem("isLoggedIn", true);
  //       localStorage.setItem("token", JSON.stringify(res.data.token));
  //       localStorage.setItem("userData", JSON.stringify(res.data.data));
  //       navigate("/");
  //     });
  //   };

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
                          <TextField
                            autoComplete="given-roll"
                            name={data.role}
                            required
                            fullWidth
                            id="roll_no"
                            label="Role"
                            autoFocus
                            onChange={(e) =>
                              setData({ ...data, role: e.target.value })
                            }
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <TextField
                            required
                            fullWidth
                            name="first_name"
                            label="First Name"
                            id="first_name"
                            value={data.first_name}
                            onChange={(e) =>
                              setData({ ...data, first_name: e.target.value })
                            }
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <TextField
                            required
                            fullWidth
                            name="last_name"
                            label="Last Name"
                            id="last_name"
                            value={data.last_name}
                            onChange={(e) =>
                              setData({ ...data, last_name: e.target.value })
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
                        <Grid item xs={6}>
                          <TextField
                            fullWidth
                            name="social_github"
                            label="GitHub"
                            id="social_github"
                            value={data?.social_github}
                            onChange={(e) =>
                              setData({
                                ...data,
                                social_github: e.target.value,
                              })
                            }
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            fullWidth
                            name="social_linkedin"
                            label="LinkedIn"
                            value={data?.social_linkedin}
                            id="social_linkedin"
                            onChange={(e) =>
                              setData({
                                ...data,
                                social_linkedin: e.target.value,
                              })
                            }
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            fullWidth
                            name="social_twitter"
                            label="Twitter"
                            id="social_twitter"
                            value={data?.social_twitter}
                            onChange={(e) =>
                              setData({
                                ...data,
                                social_twitter: e.target.value,
                              })
                            }
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            fullWidth
                            name="social_website"
                            label="Website"
                            id="social_website"
                            value={data?.social_website}
                            onChange={(e) =>
                              setData({ ...data, bio: e.target.value })
                            }
                          />
                        </Grid>

                        <Grid item xs={6}>
                          <TextField
                            fullWidth
                            id="company_name"
                            label="Current Company"
                            name="company_name"
                            value={data?.company_name}
                            onChange={(e) =>
                              setData({ ...data, company_name: e.target.value })
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
                        </Grid>
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

                <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
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
