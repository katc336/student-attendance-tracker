import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { useGetAdminQuery } from '../../../redux/api';
const AdminNav: React.FC = () => {
    const [activePage, setActivePage] = useState("");
    const location = useLocation();
    useEffect(() => {
        setActivePage(location.pathname);
    }, [location]);
    const { data, error, isLoading } = useGetAdminQuery({});
    if (isLoading) {
        return <div></div>
    }
    if (error) {
        console.error(error)
    }
    return (
        <div>
            <Drawer
                PaperProps={{ sx: { backgroundColor: "#efffff" } }}
                variant="permanent"
                anchor="left">
                <Toolbar />
                <Typography variant="h5" sx={{ mx: 2, color: "#1087dc", fontFamily: 'monospace', my: 1 }}>
                    {data && data.name}
                </Typography>
                <img
                    width="110px"
                    style={{ marginLeft: 10 }} />
                <Link to="/admin_home">
                    <Button sx={{ textTransform: "none", color: "#0A1D56", mx: 1, my: 3, border: activePage === "/dashboard" ? "5px solid orange" : "", borderRadius: "50px" }}>
                        <Typography sx={{ color: "#00212c", fontFamily: 'monospace', my: 1 }}>
                            Home
                        </Typography>
                    </Button>
                </Link>
                <Link to="">
                    <Button sx={{ textTransform: "none", color: "#0A1D56", mx: 1, my: 3, border: activePage === "/dashboard" ? "5px solid orange" : "", borderRadius: "50px" }}>
                        <Typography sx={{ color: "#00212c", fontFamily: 'monospace', my: 1 }}>
                            Teachers
                        </Typography>
                    </Button>
                </Link>
                <Link to="">
                    <Button sx={{ textTransform: "none", color: "#0A1D56", mx: 1, my: 3, border: activePage === "/dashboard" ? "5px solid orange" : "", borderRadius: "50px" }}>
                        <Typography sx={{ color: "#00212c", fontFamily: 'monospace', my: 1 }}>
                            Students
                        </Typography>
                    </Button>
                </Link>
            </Drawer>
        </div>
    )
}
export default AdminNav