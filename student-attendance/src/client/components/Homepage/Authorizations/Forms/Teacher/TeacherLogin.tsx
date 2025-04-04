import { useState } from 'react';
import { useTeacherLoginMutation } from '../../../../../../redux/api';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const TeacherLogin: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(false);
    const [login] = useTeacherLoginMutation();
    const navigate = useNavigate();
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault();
            const result = await login({ username, password });
            if ("data" in result) {
                // Successful login
                setLoginError(false);
                console.log("Successful Login");
                navigate("");
            } else if ('error' in result) {
                // Error occurred
                setLoginError(true);
                console.log("Incorrect login credentials: Check username and or password");
            }
        } catch (error) {

        }
    };
    return (
        <div>
            <Box
                component="form"
                noValidate
                autoComplete="off" >
                <Typography variant={"h4"} sx={{ mb: 3 }}>
                    Teacher Login
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Stack
                        direction="column"
                        spacing={2}
                        sx={{}}
                    >
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
                        <div className="center">
                            <button className='auth-button'>
                                Login
                            </button>
                        </div>
                    </Stack>
                </form>
            </Box>
        </div>
    )
}
export default TeacherLogin