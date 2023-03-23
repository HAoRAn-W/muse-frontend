import {Box, Paper} from "@mui/material";
import Image from 'mui-image'

const Artwork = ({artwork}) => {
    return (
        <Paper sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} elevation={0}>
            <Box
                sx={{
                    height: {xs: '70%', sm: '40%', md: 700}
                }}
            >
                <Image src={artwork.primaryImage}
                       fit={'contain'}
                />
            </Box>
        </Paper>


    )
}

export default Artwork;

