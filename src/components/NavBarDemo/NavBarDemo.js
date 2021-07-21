import { Box, Grid, Button, SvgIcon, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    box: {
        display: "flex",
        justifyContent: "space-between",
        margin:24
    }, root: {
        // these symbols signifiy that all the children within the root class will have the following properties
        '& > *': {
            marginLeft: 8,
        }
    }

}));

// creating our own custom icon with SvgIcon 
function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

export default function NavBar() {
    // don't forget to declare a variable that calls the makeStyles custom hook! you'll run into some custom hook errors if you don't
    const styles = useStyles();
    return (
        <div>
            <Box className={styles.box}>
                <HomeIcon />
                {/* using the styles.root on this grid gives our button a left margin of 8 pixels */}
                <Grid className={styles.root}> 
                    <Button>
                        <Typography>My Functionality</Typography>
                    </Button>
                    <Button>Other Page</Button>
                    <Button>Sign In</Button>
                    <Button>Sign Up</Button>
                </Grid>
            </Box>
        </div>
    );
}
