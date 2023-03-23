import {Box, Container, Link, Typography} from "@mui/material";

const Footer = () => {
    return (
        <>
            <Box component="footer" sx={{py: 6}}>
                <Container>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        color="text.secondary"
                        component="p"
                    >
                        Images and descriptions are from Metropolitan Museum of Art, NY
                    </Typography>
                    <Copyright/>
                </Container>
            </Box>
        </>
    )
}

export const Copyright = () => {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Made by '}
            <Link href="https://www.whr.one/"  underline="hover">
                WHR
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Footer;