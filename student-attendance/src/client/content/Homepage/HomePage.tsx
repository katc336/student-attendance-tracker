import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AdminAuth from './Admin/AdminAuth';
import TeacherAuth from './Teacher/TeacherAuth';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const HomePage: React.FC = () => {
    const [admin, setAdmin] = useState(false);
    const [teacher, setTeacher] = useState(true);
    return (
        <div className='center'>
            <Card>
                <CardContent>
                    {admin &&
                        <div>
                            <AdminAuth />
                            <Stack
                             className='link'
                                sx={{ mx: "20%", mt: 3 }}
                                onClick={() => {
                                    setAdmin(false),
                                        setTeacher(true)
                                }}
                                direction={"row"}>
                                <Typography>
                                    Return to teacher sign in
                                </Typography>
                            </Stack>
                        </div>}
                    {teacher &&
                        <div>
                            <TeacherAuth />
                            <Stack
                            className='link'
                                sx={{ mx: "25%", mt: 3 }}
                                onClick={() => {
                                    setAdmin(true),
                                        setTeacher(false)
                                }}
                                direction={"row"}>
                                <AdminPanelSettingsIcon />
                                <Typography>
                                    Not a teacher?
                                </Typography>
                            </Stack>
                        </div>
                    }
                </CardContent>
            </Card>
        </div>
    )
}
export default HomePage