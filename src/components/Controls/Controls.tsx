import { useDispatch } from 'react-redux';
import { resetGame } from '../../app/gameReducer';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import AutorenewIcon from '@mui/icons-material/Autorenew';

function Controls() {
    const dispatch = useDispatch();

    const reset = () => dispatch(resetGame())

    return (
        <Box display="flex" justifyContent="center" marginTop={4}>
            <Button variant="contained" endIcon={<AutorenewIcon />} onClick={reset}>reset game</Button>
        </Box>
    )
}

export default Controls;