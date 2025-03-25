import { useState } from "react";
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import Toolbar from '@mui/material/Toolbar';
import { Link } from "react-router-dom";
import Groups2Icon from '@mui/icons-material/Groups2';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { useGetAdminQuery } from "../../../redux/api";
import DashboardCard from "./components/DashboardCard";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddTeacherPopUp from "./components/AddTeacherPopUp";

const AdminHomePage: React.FC = () => {

    const { data, error, isLoading } = useGetAdminQuery({});
    const [open, setOpen] = useState(false);
    
    const handleClickOpen = () => {
      setOpen(true);
    };
    
    const handleClose = (value: string) => {
      setOpen(false);
    };
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
                <DashboardCard
                    icon={<Diversity3Icon fontSize="large" sx={{ color: "#1087dc"}}/>}
                    text={"Students"}
                    number={0}
                    addIcon={<PersonAddIcon fontSize="small" sx={{ color: "#1087dc"}} onClick={handleClickOpen} />}
                />
                <DashboardCard
                    icon={<Groups2Icon fontSize="large" sx={{ color: "#1087dc"}}/>}
                    text={"Teachers"}
                    number={0}
                    addIcon={<AddTeacherPopUp open={open} onClose={handleClose} selectedValue="" />}
                />
            </Stack>
        </Box>
    )
}

export default AdminHomePage