import { useState } from "react";
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import LoginIcon from '@mui/icons-material/Login';
import { Link } from "react-router-dom";

const CreateAccountPage: React.FC = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", m: 5 }}>
            <Box sx={{ width: "50%", }}>
                <Stack direction={"column"}>
                    <Typography sx={{ color: "#1087dc", fontFamily: 'monospace', my: 1 }} variant="h6">
                        A Free Educational Data Tracker
                    </Typography>
                    <Typography sx={{ color: "#00212c", fontFamily: 'monospace', fontWeight: 700, my: 1 }} variant="h1">
                        Forge your best path!
                    </Typography>
                    <Typography sx={{ color: "#00212c", my: 1 }} variant="h4">
                        How you will you be using Pedagogy Path?
                    </Typography>
                </Stack>
            </Box>
            <Box sx={{ mt: 10, width: "50%" }}>
                <Stack direction={"column"}>
                    <Card elevation={10} sx={{ p: 5, m: 3 }}>
                        <Typography variant="h4" sx={{ color: "#00212c" }}>
                            Are you a School Administrator?
                        </Typography>
                        <Stack direction={"row"}>
                            <Link to="/creat_account_admin" style={{ textDecoration: "none" }}>
                                <Typography sx={{ color: "#1FA2FF" }}>
                                    Set up a school account
                                </Typography>
                            </Link>
                            <LoginIcon sx={{ mx: 1, color: "#1FA2FF" }} />
                        </Stack>
                    </Card>
                    <Card elevation={10} sx={{ p: 5, m: 3 }}>
                        <Typography variant="h4" sx={{ color: "#00212c" }}>
                            Are you a teacher joining your team?
                        </Typography>
                        <Stack direction={"row"}>
                            <Link to="/creat_account_teacher" style={{ textDecoration: "none" }}>
                                <Typography sx={{ color: "#1FA2FF" }}>
                                    Sign in with your email
                                </Typography>
                            </Link>
                            <LoginIcon sx={{ mx: 1, color: "#1FA2FF" }} />
                        </Stack>
                    </Card>
                </Stack>
            </Box>
        </Box>
    )
}

export default CreateAccountPage
