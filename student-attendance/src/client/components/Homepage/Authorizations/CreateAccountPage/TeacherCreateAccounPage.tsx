import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import TeacherRegister from "../Forms/Teacher/TeacherRegister";

const TeacherCreateAccountPage: React.FC = () => {
    return (
        <Box>
            <Card
                sx={{ p: 3 }}
                className="center">
                    <TeacherRegister />
            </Card>
        </Box>
    )
}

export default TeacherCreateAccountPage