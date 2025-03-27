import { useState } from "react";
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import Toolbar from '@mui/material/Toolbar';
import { Link } from "react-router-dom";
import Groups2Icon from '@mui/icons-material/Groups2';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { useGetTeacherQuery } from "../../../redux/api";

const TeacherHomePage: React.FC = () => {

    const { data, error, isLoading } = useGetTeacherQuery({});

    if (isLoading) {
        console.log("Loading...");
    }
    if (error) {
        console.error(error);
    }
    if (data) {
        console.log(data);
    }

    return (
        <Box sx={{ mx: 20 }}>
            <Stack direction={"row"}>
            </Stack>
        </Box>
    )
}

export default TeacherHomePage