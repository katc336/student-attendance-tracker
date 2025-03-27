import { useState } from 'react';
import { useTeacherRegisterMutation } from '../../../../../../redux/api';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const TeacherRegister: React.FC = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [schoolCode, setSchoolCode] = useState("");
    const [registerError, setRegisterError] = useState(false);
    const [register] = useTeacherRegisterMutation();
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault();
            const result = await register({ teacherCode: schoolCode, name, username, password });
            if ("data" in result) {
                // Successful login
                setRegisterError(false);
                console.log("Successful Teacher Registration");
                navigate("/teacher_home");
            } else if ('error' in result) {
                // Error occurred
                setRegisterError(true);
                console.log("Error when registering");
            }
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <div>
            <Box
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <Typography variant={"h4"} sx={{ mb: 3 }}>
                    Create Teacher Account with a School Code
                </Typography>
                <Box className={"center-horizontal"}>
                    <Stack
                        direction="column"
                        spacing={2} >
                        <TextField
                            id="name-form"
                            label="name"
                            variant="outlined"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            sx={{ width: 300 }}
                        />
                        <TextField
                            id="username-form"
                            label="username"
                            variant="outlined"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                            sx={{ width: 300 }}
                        />
                        <TextField
                            id="password-form"
                            label="password"
                            variant="outlined"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            sx={{ width: 300 }}
                        />
                        <TextField
                            id="school-code-form"
                            label="school code"
                            variant="outlined"
                            value={schoolCode}
                            onChange={(event) => setSchoolCode(event.target.value)}
                            sx={{ width: 300 }}
                        />
                        <div className="center">
                            <button type="submit" className='auth-button'>
                                Sign In
                            </button>
                        </div>
                    </Stack>
                </Box>
            </Box>
        </div>
    )
}

export default TeacherRegister;