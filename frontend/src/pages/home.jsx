import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css";
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {


    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");


    const {addToUserHistory} = useContext(AuthContext);
    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }

const handleCreateMeeting = async () => {
    const code = Math.random().toString(36).substring(2, 10);

    await addToUserHistory(code);
    navigate(`/${code}`);
};

    return (
        <>

            <div className="navBar">

                <div style={{ display: "flex", alignItems: "center" }}>

                    <h2 style={{ color: "#F9FAFB", fontWeight: "700" }}>
    NovaMeet
</h2>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                    <IconButton onClick={
                        () => {
                            navigate("/history")
                        }
                    }>
                        <RestoreIcon />
                    </IconButton>
                  <p
    style={{
        color: "#F9FAFB",
        fontWeight: "600",
        marginRight: "10px",
    }}
>
    History
</p>

                   <Button
    onClick={() => {
        localStorage.removeItem("token");
        navigate("/auth");
    }}
    variant="outlined"
    sx={{
        ml: 2,
        color: "#A855F7",
        borderColor: "#A855F7",
        borderRadius: "10px",
        textTransform: "none",
        fontWeight: "bold",
        "&:hover": {
            borderColor: "#9333EA",
            backgroundColor: "rgba(168,85,247,0.08)",
        }
    }}
>
    Logout
</Button>
                </div>


            </div>


            <div className="meetContainer">
                <div className="leftPanel">
                    <div>
                       <h1
    style={{
        color: "#F9FAFB",
        fontSize: "48px",
        fontWeight: "700",
        lineHeight: "1.2",
        marginBottom: "20px",
    }}
>
    Welcome to NovaMeet 👋
</h1>

<p
    style={{
        color: "#D1D5DB",
        fontSize: "18px",
        maxWidth: "520px",
        lineHeight: "1.7",
        marginBottom: "30px",
    }}
>
    Connect, collaborate and communicate securely with your team from anywhere in the world.
</p>

<h3
    style={{
        color: "#F9FAFB",
        marginBottom: "12px",
    }}
>
    Join an existing meeting
</h3>

                       <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>

    <Button
        onClick={handleCreateMeeting}
        variant="contained"
        sx={{
            background: "linear-gradient(90deg, #8B5CF6, #A855F7)",
            borderRadius: "12px",
            px: 3,
            textTransform: "none",
            fontWeight: "bold",
            boxShadow: "0 8px 20px rgba(139,92,246,0.35)",
            "&:hover": {
                background: "linear-gradient(90deg, #7C3AED, #9333EA)",
            }
        }}
    >
        + New Meeting
    </Button>

    <TextField
        onChange={(e) => setMeetingCode(e.target.value)}
        label="Meeting Code"
        variant="outlined"
        sx={{
            width: "300px",
            "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                backgroundColor: "#FAFAFA",
            }
        }}
    />

    <Button
        onClick={handleJoinVideoCall}
        variant="contained"
        sx={{
            px: 4,
            borderRadius: "12px",
            background: "linear-gradient(90deg, #8B5CF6, #A855F7)",
            fontWeight: "bold",
            textTransform: "none",
            boxShadow: "0 8px 20px rgba(139,92,246,0.35)",
            "&:hover": {
                background: "linear-gradient(90deg, #7C3AED, #9333EA)",
            }
        }}
    >
        Join
    </Button>

</div> 
                    </div>
                </div>
                <div className='rightPanel'>
                    <img srcSet='/logo3.png' alt="" />
                </div>
            </div>
        </>
    )
}


export default withAuth(HomeComponent)