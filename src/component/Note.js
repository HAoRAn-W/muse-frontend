import {ButtonBase, Card, CardActions, CardContent, Grid, Paper, Typography} from "@mui/material";

const Note = ({artwork}) => {
    return (
        <Paper sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem'}} elevation={0}>
            <Card sx={{minWidth: 320, maxWidth: 600}}>
                <CardContent sx={{alignItems: 'flex-start'}}>
                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom fontFamily={"Noto Serif"}>
                        {`${artwork.objectName} - ${artwork.objectDate}`}
                    </Typography>
                    <Typography variant="h5" component="div" fontFamily={"Noto Serif"}>
                        {artwork.title}
                    </Typography>
                    {artwork.artistDisplayName ?  <Typography sx={{mb: 1.5}} color="text.secondary" fontFamily={"Noto Serif"}>
                        {`${artwork.artistDisplayName} (${artwork.artistBeginDate} - ${artwork.artistEndDate})`}
                    </Typography> :
                    <br/>
                    }

                    <Typography variant="body2" fontFamily={"Noto Serif"}>
                        {`Accession Year: ${artwork.accessionYear}`}
                        <br/>
                        {`Department: ${artwork.department}`}
                        <br/>
                        {`Source: ${artwork.creditLine}`}
                    </Typography>
                </CardContent>
                <Grid container sx={{justifyContent: 'flex-end'}}>
                    <Grid item>
                        <CardActions>
                            <ButtonBase>
                                <a href={artwork.objectURL}>
                                    <img src={require('../met-logo.jpg')} width={30} height={30} alt={'MET'}/>
                                </a>
                            </ButtonBase>
                        </CardActions>
                    </Grid>
                    {artwork.objectWikidata_URL &&
                        <Grid item>
                            <CardActions>
                                <ButtonBase>
                                    <a href={artwork.objectWikidata_URL}>
                                        <img src={require('../wikipedia.png')} width={30} height={30} alt={'WIKI'}/>
                                    </a>
                                </ButtonBase>
                            </CardActions>
                        </Grid>
                    }

                </Grid>


            </Card>
        </Paper>
    )
}


export default Note;