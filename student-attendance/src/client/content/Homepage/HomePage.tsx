import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import TeacherLogin from './TeacherLogin';

const HomePage: React.FC = () => {

    return (
        <div className='center'>
            <Card>
                <CardContent>
                  <TeacherLogin />
                </CardContent>
            </Card>
        </div>
    )
}
export default HomePage