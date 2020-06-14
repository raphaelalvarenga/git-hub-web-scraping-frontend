import * as React from "react";
import { Button, CssBaseline, Grid, TextField, TableContainer, Paper, Table, TableHead, TableRow, TableCell, makeStyles, TableBody } from "@material-ui/core";
import { GitHub, Search } from "@material-ui/icons";

const useStyles = makeStyles({
    gridContainer: {
        maxWidth: "1200px",
        margin: "auto",
        width: "100%",
        marginTop: "20px"
    },

    paper: {
        padding: "20px 0",
        width: "100%",
        marginBottom: "40px"
    },

    gridCenter: {
        textAlign: "center"
    },

    textField: {
        minWidth: "600px",
        margin: "20px 0"
    }
})

const App: React.FunctionComponent = () => {

    const classes = useStyles();
    
    return (
        <CssBaseline>
            <Grid container spacing = {3} className = {classes.gridContainer}>
                <Paper className = {classes.paper}>
                    <Grid item xs = {12} className = {classes.gridCenter}>
                        <GitHub color = "primary" style = {{fontSize: 80}} />
                    </Grid>

                    <Grid item xs = {12} className = {classes.gridCenter}>
                        <TextField label = "Insert a GitHub repository link" className = {classes.textField} />
                    </Grid>

                    <Grid item xs = {12} className = {classes.gridCenter}>
                        <Button color = "primary" variant = "outlined"><Search />Search...</Button>
                    </Grid>
                </Paper>

                <Paper className = {classes.paper} style = {{padding: "0 30px"}}>
                    <h2>Files</h2>

                    <TableContainer style = {{marginTop: "30px"}}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Extension</TableCell>
                                    <TableCell>Size</TableCell>
                                    <TableCell>Total of Lines</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                <TableRow>
                                    <TableCell>.gitignore</TableCell>
                                    <TableCell>.gitignore</TableCell>
                                    <TableCell>13 Bytes</TableCell>
                                    <TableCell>1 Lines</TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>Procfile</TableCell>
                                    <TableCell>Procfile</TableCell>
                                    <TableCell>17 Bytes</TableCell>
                                    <TableCell>1 Lines</TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>README.md</TableCell>
                                    <TableCell>.md</TableCell>
                                    <TableCell>91 Bytes</TableCell>
                                    <TableCell>2 Lines</TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>package-lock.json</TableCell>
                                    <TableCell>.json</TableCell>
                                    <TableCell>77.8 KB</TableCell>
                                    <TableCell>2051 Lines</TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>package.json</TableCell>
                                    <TableCell>.json</TableCell>
                                    <TableCell>1.09 KB</TableCell>
                                    <TableCell>40 Lines</TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>tsconfig.json</TableCell>
                                    <TableCell>.json</TableCell>
                                    <TableCell>5.93 KB</TableCell>
                                    <TableCell>69 Lines</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>

                <Paper className = {classes.paper} style = {{padding: "0 30px"}}>
                    <h2>Folders</h2>

                    <TableContainer style = {{marginTop: "30px"}}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Link</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                <TableRow>
                                    <TableCell>dist</TableCell>
                                    <TableCell>
                                        <Button color = "primary" variant = "contained">Access</Button>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>src</TableCell>
                                    <TableCell>
                                        <Button color = "primary" variant = "contained">Access</Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Grid>
        </CssBaseline>
    )
}
export default App;