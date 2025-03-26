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
import AddStudentPopUp from "./components/AddStudentPopUp";

const AdminHomePage: React.FC = () => {

    const { data, error, isLoading } = useGetAdminQuery({});
    const [openPopup, setOpenPopup] = useState("");

    const handleClickOpen = (popup: string) => {
        setOpenPopup(popup);
    };
    const handleClose = () => {
        setOpenPopup("");
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
                    icon={<Diversity3Icon fontSize="large" sx={{ color: "#1087dc" }} />}
                    text={"Students"}
                    number={data && data.students.length}
                    addIcon={<PersonAddIcon fontSize="small" sx={{ color: "#1087dc" }} onClick={() => handleClickOpen("student")} />}
                />
                <DashboardCard
                    icon={<Groups2Icon fontSize="large" sx={{ color: "#1087dc" }} />}
                    text={"Teachers"}
                    number={data && data.teachers.length}
                    addIcon={<PersonAddIcon fontSize="small" sx={{ color: "#1087dc" }} onClick={() => handleClickOpen("teacher")} />}
                />
            </Stack>
            {openPopup === "student" && <AddStudentPopUp open={openPopup === "student"} selectedValue="default" onClose={handleClose} />}
            {openPopup === "teacher" && <AddTeacherPopUp open={openPopup === "teacher"} selectedValue="default" onClose={handleClose} />}
        </Box>
    )
}

export default AdminHomePage