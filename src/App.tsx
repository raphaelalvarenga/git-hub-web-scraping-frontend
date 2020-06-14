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
    TableBody,
    Snackbar,
    CircularProgress
} from "@material-ui/core";
import { GitHub, Search } from "@material-ui/icons";
import FileInterface from "./interfaces/file-interface";
import FolderInterface from "./interfaces/folder-interface";
import RequestInterface from "./interfaces/request-interface";
import ResponseInterface from "./interfaces/response-interface";

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

    const [files, setFiles] = React.useState<FileInterface[]>([]);
    const [folders, setFolders] = React.useState<FolderInterface[]>([]);
    const [url, setUrl] = React.useState<string>("");
    const [snackbar, setSnackbar] = React.useState<{open: boolean, message: string}>({open: false, message: ""});
    const [isSearching, setIsSearching] = React.useState<boolean>(false);

    const getData = async (url: string) => {
        const bodyContent: RequestInterface = {
            action: "getRepoData", url
        };

        await fetch("https://git-hut-web-scraping.herokuapp.com/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bodyContent)
        })
            .then((res: Response) => res.json())
            .then((json: ResponseInterface) => {

                if (json.success) {
                    setFiles(json.files);
                    setFolders(json.folders);
                } else {
                    setSnackbar({open: true, message: json.message});
                }

                setIsSearching(false);
            })
            .catch((error: any) => console.log(error))
    }

    const handleClick = (origin: string, newUrl?: string) => {
        if (origin === "search" && url === "") {
            setSnackbar({open: true, message: "Please, inform a repo link!"});
            return false;
        }

        setIsSearching(true);
        setFolders([]);
        setFiles([]);
        
        newUrl ? getData(newUrl) : getData(url);
        
    };
    
    const classes = useStyles();
    
    return (
        <CssBaseline>
            <Grid container spacing = {3} className = {classes.gridContainer}>
                <Paper className = {classes.paper}>
                    <Grid item xs = {12} className = {classes.gridCenter}>
                        <GitHub color = "primary" style = {{fontSize: 80}} />
                    </Grid>

                    <Grid item xs = {12} className = {classes.gridCenter}>
                        <TextField
                            label = "Insert a GitHub repository link"
                            value = {url}
                            className = {classes.textField}
                            onChange = {(e) => setUrl(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs = {12} className = {classes.gridCenter}>
                        <Button
                            color = "primary"
                            variant = "outlined"
                            onClick = {() => handleClick("search")}
                        ><Search />Search...</Button>
                        <Snackbar
                            anchorOrigin = {{vertical: "top", horizontal: "right"}}
                            open = {snackbar.open}
                            message = {snackbar.message}
                            autoHideDuration = {5000}
                            onClose={() => setSnackbar({...snackbar, open: false})}
                            action = {
                                <React.Fragment>
                                    <Button
                                        color = "secondary"
                                        onClick = {() => setSnackbar({...snackbar, open: false})}
                                    >Close</Button>
                                </React.Fragment>
                            }
                        />
                    </Grid>
                </Paper>

                {
                    files.length > 0 && (
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
                    )
                }
                

                {
                    folders.length > 0 && (
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
                                            <TableRow key = {folder.name}>
                                                <TableCell>{folder.name}</TableCell>
                                                <TableCell>
                                                    <Button
                                                        color = "primary"
                                                        variant = "contained"
                                                        onClick = {() => handleClick("access", folder.url)}
                                                    >Access</Button>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                    )
                }
                {
                    isSearching && (
                        <Grid item xs = {12} className = {classes.gridCenter}>
                            <CircularProgress size = {60} />
                        </Grid>
                    )
                }
                
            </Grid>
        </CssBaseline>
    )
}
export default App;