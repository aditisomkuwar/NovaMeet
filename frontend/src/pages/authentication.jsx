import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
 
import InputAdornment from '@mui/material/InputAdornment';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../contexts/AuthContext';
import { Snackbar } from '@mui/material';



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Authentication() {

    

    const [username, setUsername] = React.useState();
    const [password, setPassword] = React.useState();
    const [name, setName] = React.useState();
    const [error, setError] = React.useState();
    const [message, setMessage] = React.useState();


    const [formState, setFormState] = React.useState(0);

    const [open, setOpen] = React.useState(false)


    const { handleRegister, handleLogin } = React.useContext(AuthContext);

    let handleAuth = async () => {
        try {
            if (formState === 0) {

                let result = await handleLogin(username, password)


            }
            if (formState === 1) {
                let result = await handleRegister(name, username, password);
                console.log(result);
                setUsername("");
                setMessage(result);
                setOpen(true);
                setError("")
                setFormState(0)
                setPassword("")
            }
        } catch (err) {

            console.log(err);
            let message = (err.response.data.message);
            setError(message);
        }
    }


    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
    item
    xs={false}
    sm={4}
    md={7}
    sx={{
        background: "linear-gradient(135deg, #111827 0%, #1F2937 60%, #8B5CF6 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
        p: 4,
    }}
>
    <img
        src="/mobile.png"
        alt="NovaMeet"
        style={{
            width: "65%",
            maxWidth: "420px",
            marginBottom: "20px",
        }}
    />

    <Typography variant="h3" sx={{ fontWeight: "bold", color: "#F9FAFB" }}>
        NovaMeet
    </Typography>

    <Typography
        variant="h6"
        sx={{ mt: 2, color: "#D1D5DB", maxWidth: "450px" }}
    >
        Connect, collaborate and communicate securely from anywhere.
    </Typography>
</Grid>
               <Grid
    item
    xs={12}
    sm={8}
    md={5}
    component={Paper}
    elevation={10}
    sx={{
        borderTopLeftRadius: "30px",
        borderBottomLeftRadius: "30px",
        background: "#F9FAFB",
    }}
>
                    <Box
    sx={{
        my: 6,
        mx: 4,
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "20px",
        background: "#FFFFFF",
        boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
    }}
>
                       <Avatar
    sx={{
        m: 1,
        bgcolor: "#8B5CF6",
        width: 60,
        height: 60,
    }}
>
                            <LockOutlinedIcon />
                        </Avatar>
<Typography
    variant="h4"
    fontWeight="bold"
    sx={{ mt: 2, color: "#111827" }}
>
    {formState === 0 ? "Welcome Back 👋" : "Create Account"}
</Typography>

<Typography
    sx={{
        color: "#6B7280",
        mb: 3,
        mt: 1,
    }}
>
    {formState === 0
        ? "Login to continue your meetings."
        : "Join NovaMeet in just a few seconds."}
</Typography>

                       <div
    style={{
        display: "flex",
        gap: "12px",
        marginBottom: "20px",
        marginTop: "10px",
    }}
>
    <Button
        variant={formState === 0 ? "contained" : "outlined"}
        onClick={() => setFormState(0)}
        sx={{
            borderRadius: "10px",
            textTransform: "none",
            fontWeight: "bold",
            px: 4,
            background:
                formState === 0
                    ? "linear-gradient(90deg,#8B5CF6,#A855F7)"
                    : "transparent",
            color: formState === 0 ? "#fff" : "#8B5CF6",
            borderColor: "#8B5CF6",
            "&:hover": {
                background: "#9333EA",
                color: "#fff",
            },
        }}
    >
        Sign In
    </Button>

    <Button
        variant={formState === 1 ? "contained" : "outlined"}
        onClick={() => setFormState(1)}
        sx={{
            borderRadius: "10px",
            textTransform: "none",
            fontWeight: "bold",
            px: 4,
            background:
                formState === 1
                    ? "linear-gradient(90deg,#8B5CF6,#A855F7)"
                    : "transparent",
            color: formState === 1 ? "#fff" : "#8B5CF6",
            borderColor: "#8B5CF6",
            "&:hover": {
                background: "#9333EA",
                color: "#fff",
            },
        }}
    >
        Sign Up
    </Button>
</div>

                        <Box component="form" noValidate sx={{ mt: 1 }}>
                            {formState === 1 ? <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Full Name"
                                name="username"
                                value={name}
                                autoFocus
                                onChange={(e) => setName(e.target.value)}
                                                     sx={{
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    backgroundColor: "#FAFAFA",
    transition: "0.3s",

    "& fieldset": {
      borderColor: "#D1D5DB",
    },

    "&:hover fieldset": {
      borderColor: "#8B5CF6",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#8B5CF6",
      borderWidth: "2px",
      boxShadow: "0 0 10px rgba(139,92,246,0.20)",
    },
  },
}}
                            /> : <></>}

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"

                                InputProps={{
    startAdornment: (
        <InputAdornment position="start">
            <PersonOutlineIcon sx={{ color: "#8B5CF6" }} />
        </InputAdornment>
    ),
}}
                                name="username"
                                value={username}
                                autoFocus
                                onChange={(e) => setUsername(e.target.value)}
                                sx={{
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    backgroundColor: "#FAFAFA",
    transition: "0.3s",

    "& fieldset": {
      borderColor: "#D1D5DB",
    },

    "&:hover fieldset": {
      borderColor: "#8B5CF6",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#8B5CF6",
      borderWidth: "2px",
      boxShadow: "0 0 10px rgba(139,92,246,0.20)",
    },
  },
}}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"

                                InputProps={{
    startAdornment: (
        <InputAdornment position="start">
            <LockOutlinedIcon sx={{ color: "#8B5CF6" }} />
        </InputAdornment>
    ),
}}
                                value={password}
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}

                                id="password"
                                sx={{
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    backgroundColor: "#FAFAFA",
    transition: "0.3s",

    "& fieldset": {
      borderColor: "#D1D5DB",
    },

    "&:hover fieldset": {
      borderColor: "#8B5CF6",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#8B5CF6",
      borderWidth: "2px",
      boxShadow: "0 0 10px rgba(139,92,246,0.20)",
    },
  },
}}
                            />

                            <p style={{ color: "red" }}>{error}</p>

  <Button
    type="button"
    fullWidth
    variant="contained"
    onClick={handleAuth}
    sx={{
        mt: 3,
        mb: 2,
        py: 1.6,
        borderRadius: "14px",
        fontWeight: "bold",
        fontSize: "16px",
        textTransform: "none",
        background: "linear-gradient(90deg, #8B5CF6, #A855F7)",
        boxShadow: "0 8px 20px rgba(139,92,246,0.35)",
        transition: "0.3s",
        "&:hover": {
            background: "linear-gradient(90deg, #7C3AED, #9333EA)",
            transform: "translateY(-3px)",
            boxShadow: "0 12px 28px rgba(139,92,246,0.45)"
        }
    }}
>
                            
                                {formState === 0 ? "Login " : "Register"}
                            </Button>

                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Snackbar

                open={open}
                autoHideDuration={4000}
                message={message}
            />

        </ThemeProvider>
    );
}