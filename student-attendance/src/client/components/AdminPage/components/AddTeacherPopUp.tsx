import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { usePostTeacherMutation } from '../../../../redux/api';

const AddTeacherPopUp = (props: AddTeacherPopUpProps) => {
    const [name, setName] = useState("");
    const [snackOpen, setSnackOpen] = useState(false);
    const [addTeacher] = usePostTeacherMutation();

    const { onClose, selectedValue, open } = props;
    const handleClose = () => {
        onClose(selectedValue);
    };
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault();
            const result = await addTeacher({ teacherName: name });
            if ("data" in result) {
                console.log("Teacher successfully added")
            } else if ('error' in result) {
                // Error occurred
                console.log("Error adding teacher");
            }
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>
                <Typography
                    className='center'
                    sx={{ fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.1rem', color: "#1FA2FF", mb: 3 }}>
                    Add Teacher
                </Typography>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}>
                    <Stack
                        direction="column"
                        spacing={2} >
                        <TextField
                            id="username-form"
                            label="Teacher's name"
                            variant="outlined"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            sx={{ width: 300 }}
                        />
                        <div className="center">
                            <button type="submit" className='auth-button'>
                                Add Teacher
                            </button>
                        </div>
                    </Stack>
                </Box>
            </DialogTitle>
        </Dialog>
    );
}

export default AddTeacherPopUp;

