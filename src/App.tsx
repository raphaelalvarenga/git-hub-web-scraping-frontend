import * as React from "react";
import { Button, CssBaseline, Grid, TextField } from "@material-ui/core";
import { GitHub, Search } from "@material-ui/icons";

const App: React.FunctionComponent = () => (
    <CssBaseline>
        <Grid container spacing = {3} style = {{maxWidth: "1200px", margin: "auto", width: "100%"}}>
            <Grid item xs = {12} style = {{textAlign: "center"}}>
                <GitHub color = "primary" style = {{fontSize: 80}} />
            </Grid>

            <Grid item xs = {12} style = {{textAlign: "center"}}>
                <TextField label = "Insert a GitHub repository link" style = {{minWidth: "600px"}} />
            </Grid>

            <Grid item xs = {12} style = {{textAlign: "center"}}>
                <Button color = "primary" variant = "outlined"><Search />Search...</Button>
            </Grid>

            
        </Grid>
    </CssBaseline>
)

export default App;