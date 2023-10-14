import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import AutorenewIcon from '@mui/icons-material/Autorenew';

function Controls() {
    return (
        <Box display="flex" justifyContent="center" marginTop={4}>
            <Button variant="contained" endIcon={<AutorenewIcon />}>reset game</Button>
        </Box>
    )
}

export default Controls;