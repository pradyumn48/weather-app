import React, { useState } from 'react';
import { Box, styled } from '@mui/material';
import Information from '../components/Information';


const Component = styled(Box)({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    width: '65%'
})

const WeatherDetails = () => {
    const [result, setResult] = useState({});

    return (
        <Component>
            <Box style={{ width: '73%', height: '80%' }}>
                <Information result={result} />
            </Box>
        </Component>
    )
}

export default WeatherDetails;
