import { useState } from "react";
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import AppBar from "@mui/material/AppBar"
import Toolbar from '@mui/material/Toolbar';
import { Link } from "react-router-dom";
const NavBar: React.FC = () => {
    return (
        <div>
            <AppBar sx={{ backgroundColor: "#efffff" }}>
                <Toolbar disableGutters>
                    <Box sx={{ ml: "5vw", flexGrow: 1, }}>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: "#1FA2FF",
                                }}>
                                Pedagogy Path
                            </Typography>
                        </Link>
                    </Box>
                    <Link to="/create_account">
                        <button className="nav-bar-button">
                            <Typography>
                                Create Account
                            </Typography>
                        </button>
                    </Link>
                    <Link to="/login_account">
                        <button className="login-button">
                            <Typography>
                                Login
                            </Typography>
                        </button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar