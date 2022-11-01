import React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import {
    AppBar,
    Badge,
    Box,
    Button, Container,
    CssBaseline, Divider,
    Drawer, Grid,
    IconButton,
    List,
    ListItem, ListItemButton, ListItemIcon, ListItemText, Paper,
    Toolbar,
    Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const mdTheme = createTheme();
const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


function BasicLayout1(props) {

    const [open, setOpen] = React.useState(true);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={mdTheme}>

            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                         onClick={toggleDrawer}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Menus
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>

            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <Paper>
                        <h1>First Row</h1>
                    </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    {props.children}
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper>
                            <h1>Third Row</h1>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

        </ThemeProvider>
    );
}

export default BasicLayout1;