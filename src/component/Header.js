import {Box, IconButton, Toolbar, Typography} from "@mui/material";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const Header = ({handleClick}) => {
    return (
        <>
            <Box sx={{
                display: 'flex',
                marginBottom: {md: 4},
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Toolbar  sx={{justifyContent: 'center', alignItems: 'center'}}>
                    <Typography variant="h4" align={"center"} fontFamily={"Noto Serif"} padding={'0.5rem'}>
                        {"muse"}
                    </Typography>
                    <Typography variant="h8" align={"center"} fontFamily={"Noto Serif"} color={"text.secondary"}>
                        by whr.one
                    </Typography>
                    <IconButton onClick={handleClick} padding={'0.5rem'} sx={{color: '#c4ad95'}}>
                        <AutoAwesomeIcon/>
                    </IconButton>
                </Toolbar>
            </Box>
        </>
    )
}

export default Header;