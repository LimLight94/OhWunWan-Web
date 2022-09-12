import {BottomNavigation, BottomNavigationAction} from '@mui/material';
import {Home, FitnessCenter, LocalDining, OndemandVideo, Person} from '@mui/icons-material';
import {useState} from 'react';
import {Link} from "react-router-dom";


const BottomNav = () => {
    const [value, setValue] = useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <BottomNavigation
            sx={{width: '100%', position: 'absolute', bottom: 0}}
            value={value}
            onChange={(event, newValue) => {
                handleChange(event, newValue);
            }}
        >
            <BottomNavigationAction label='홈' icon={<Home/>} component={Link} to='/home'/>
            <BottomNavigationAction label='오운완' icon={<FitnessCenter/>} component={Link} to='/ohwunwan'/>
            <BottomNavigationAction label='식단공유' icon={<LocalDining/>} component={Link} to='/recipe'/>
            <BottomNavigationAction label='쇼츠' icon={<OndemandVideo/>} component={Link} to='/shorts'/>
            <BottomNavigationAction label='MyPage' icon={<Person/>} component={Link} to='/mypage'/>
        </BottomNavigation>
    );
}
export default BottomNav;