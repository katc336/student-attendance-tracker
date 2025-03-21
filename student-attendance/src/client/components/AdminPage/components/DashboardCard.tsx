import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
const DashboardCard: React.FC<Card> = ({ icon, text, number, addIcon }) => {

    return (
        <Box>
            <Card
                elevation={10}
                sx={{ m: 1 }}>
                <Stack direction={"row"}>
                    <Box sx={{ m: 1 }}>
                        {icon}
                    </Box>
                    <Typography sx={{ color: "#1087dc", fontFamily: 'monospace', m: 1 }}>
                        {text}
                    </Typography>
                </Stack>
                <Typography
                    className="center"
                    sx={{ color: "#1087dc", fontFamily: 'monospace', mx: 1 }}>
                    {number}
                </Typography>
                <Box sx={{ mx: 1 }} dir="rtl">
                    {addIcon}
                </Box>
            </Card>
        </Box>
    )
}
export default DashboardCard