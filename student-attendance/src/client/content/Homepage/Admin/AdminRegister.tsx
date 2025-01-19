import { useState } from 'react';
import { useAdminRegisterMutation } from '../../../../redux/api';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const AdminRegister: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(false);
    const [register] = useAdminRegisterMutation();
    const navigate = useNavigate();
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault();
            const result = await register({ username, password });
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
            console.error(error)
        }
    };
    return (
        <div>
            <Box
                component="form"
                noValidate
                autoComplete="off" >
                <Typography variant={"h4"} sx={{ mb: 3 }}>
                    Register School
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Stack
                        direction="column"
                        spacing={2}
                        sx={{}}>
                        <TextField
                            id="username-form"
                            label="school account username"
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
                               Sign-Up
                            </button>
                        </div>
                    </Stack>
                </form>
            </Box>
        </div>
    )
}
export default AdminRegister