import { useState } from 'react';
import { useAdminRegisterMutation } from '../../../../../redux/api';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const AdminRegister: React.FC = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [registerError, setRegisterError] = useState(false);
    const [register] = useAdminRegisterMutation();
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault();
            const result = await register({ name, username, password });
            if ("data" in result) {
                // Successful login
                setRegisterError(false);
                console.log("Successful Login");
                navigate("/admin_home");
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
                    Register School
                </Typography>
                <Stack
                    direction="column"
                    spacing={2} >
                      <TextField
                        id="username-form"
                        label="school name"
                        variant="outlined"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        sx={{ width: 300 }}
                    />  
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
                        <button type="submit" className='auth-button'>
                            Sign-Up
                        </button>
                    </div>
                </Stack>
            </Box>
        </div>
    )
}

export default AdminRegister;
