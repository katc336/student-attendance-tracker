import { useState } from "react";
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import { Link } from "react-router-dom";
import AdminRegister from "../Forms/Admin/AdminRegister";

const AdminCreateAccountPage: React.FC = () => {
    return (
        <Box>
            <Card
                sx={{ p: 3 }}
                className="center">
                <AdminRegister />
            </Card>
        </Box>
    )
}

export default AdminCreateAccountPage
