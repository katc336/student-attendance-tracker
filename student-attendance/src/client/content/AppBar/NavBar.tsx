import { useState } from "react";
import Typography from "@mui/material/Typography"
import AppBar from "@mui/material/AppBar"
import Toolbar from '@mui/material/Toolbar';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar: React.FC = () => {
    return (
        <div>
            <AppBar sx={{ backgroundColor: "#efffff" }}>
                <Toolbar disableGutters>
                    <Typography
                        variant="h5"
                        sx={{
                            ml: "5vw",
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: "#1FA2FF",
                            textDecoration: 'none',
                        }}
                    >
                        Pedagogy Path
                    </Typography>
                    <button className="nav-bar-button">
                        <Typography>
                            Create Account
                        </Typography>
                    </button>
                    <button className="login-button">
                        <Typography>
                            Login
                        </Typography>
                    </button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar