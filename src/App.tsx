import * as React from "react";
import {
    Button,
    CssBaseline,
    Grid,
    TextField,
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    makeStyles,
    TableBody
} from "@material-ui/core";
import { GitHub, Search } from "@material-ui/icons";
import FileInterface from "./interfaces/file-interface";
import FolderInterface from "./interfaces/folder-interface";

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

    const [files, setFiles] = React.useState<FileInterface[]>([
        {
            name: ".gitignore",
            extension: ".gitignore",
            size: "13 Bytes",
            totalLines: "1 lines"
        },
        {
            name: "Procfile",
            extension: "Procfile",
            size: "17 Bytes",
            totalLines: "1 lines"
        },
        {
            name: "README.md",
            extension: "md",
            size: "91 Bytes",
            totalLines: "2 lines"
        },
        {
            name: "package-lock.json",
            extension: "json",
            size: "77.8 KB",
            totalLines: "2051 lines"
        },
        {
            name: "package.json",
            extension: "json",
            size: "1.09 KB",
            totalLines: "40 lines"
        },
        {
            name: "tsconfig.json",
            extension: "json",
            size: "5.93 KB",
            totalLines: "69 lines"
        }
    ]);
    const [folders, setFolders] = React.useState<FolderInterface[]>([
        {
            name: "dist",
            url: "https://github.com/raphaelalvarenga/git-hub-web-scraping/tree/master/dist"
        },
        {
            name: "src",
            url: "https://github.com/raphaelalvarenga/git-hub-web-scraping/tree/master/src"
        }
    ]);
    
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
                                {
                                    files.map(file => (
                                        <TableRow key = {file.name}>
                                            <TableCell>{file.name}</TableCell>
                                            <TableCell>{file.extension}</TableCell>
                                            <TableCell>{file.size}</TableCell>
                                            <TableCell>{file.totalLines}</TableCell>
                                        </TableRow>
                                    ))
                                }
                                
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
                                {
                                    folders.map(folder => (
                                        <TableRow>
                                            <TableCell>{folder.name}</TableCell>
                                            <TableCell>
                                                <Button color = "primary" variant = "contained">Access</Button>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Grid>
        </CssBaseline>
    )
}
export default App;