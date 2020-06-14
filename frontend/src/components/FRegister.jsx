import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {getUser, updateUser} from "../hooks/getApi";
import { makeStyles } from "@material-ui/core/styles";
import UserPool from "../UserPool";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";
import ListItemText from "@material-ui/core/ListItemText";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import SettingsIcon from "@material-ui/icons/Settings";
import { AccountContext } from "./Accounts";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    maxWidth: 200,
    maxHeight: 1000,
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
  },
  button: {
    marginTop: theme.spacing(2.5),
    marginBottom: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    maxWidth: 500,
    maxHeight: 500,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
export default () => {
  const classes = useStyles();
  const [name, setName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [tipoId, setTipoID] = React.useState("");
  const [numberId, setNumberID] = React.useState("");
  const [numberTel, setNumberTel] = React.useState("");
  const [datosPersonales, setDatosPersonales] = React.useState({});
  const { getSession } = useContext(AccountContext);
  const [status, setStatus] = React.useState(false);

  const updateData = (event) => {
    data = {
      tier: "",
      first_name: "",
      last_name: "",
      person_id_type: "",
      person_id: "",
      email: "",
      cel: ""
    }
  }

  useEffect(() => {
    if (!UserPool.getCurrentUser()) {
      window.location.href = "#/";
    }
    else {
      if (!status) {
	getSession().then(session => {
	  getUser(session).then(data => {
	    if (data.status == 400) {
	      setDatosPersonales({data: "No hay datos"})
	    }
	    else {
	      setDatosPersonales(data);
	    }
	    setStatus(true);
	  });
	});
      }
    }
  });

  const handleChange = (event) => {
    setTipoID(event.target.value);
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={5}>
          <Paper elevation={3} className={classes.paper}>
            <SettingsIcon style={{ fontSize: 50 }} />
            <h2>Configura los datos de tu cuenta</h2>
            <ListItem>
              <TextField id="standard-basic" label="Ingresa tu Nombre" value={name} />
            </ListItem>
            <ListItem>
              <TextField id="standard-basic" label="Ingresa tu Apellido" value={lastname} />
            </ListItem>
            <ListItem>
              <Select
                displayEmpty
                value={tipoId}
                onChange={handleChange}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <p>Tipo de identificacion</p>;
                  }
                  return selected;
                }}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value="">
                  <p>Tipo de identificacion</p>
                </MenuItem>
                <MenuItem value="CC">
                  <p>Cedula de Ciudadania</p>
                </MenuItem>
                <MenuItem value="CE">
                  <p>Cedula de Extranjeria</p>
                </MenuItem>
                <MenuItem value="PA">
                  <p>Pasaporte</p>
                </MenuItem>
              </Select>
            </ListItem>
            <ListItem>
              <TextField id="standard-basic" label="Numero de identificacion" value={numberId}/>
            </ListItem>
            <ListItem>
              <TextField id="standard-basic" label="Numero Telefonico" value={numberTel} />
            </ListItem>
            <Button
              className={classes.button}
              size="large"
              variant="contained"
              color="primary"
            >
              Actualizar Datos
            </Button>
            <Link to="/home">
              <Button
                className={classes.button}
                size="large"
                variant="contained"
                color="warn"
              >
                Regresar al Home
              </Button>
            </Link>
          </Paper>
        </Grid>
        <div></div>
        <Grid item xs={5}>
          <Paper elevation={3} className={classes.paper}>
            <PersonOutlineRoundedIcon style={{ fontSize: 50 }} />
            <h2>Estos son los datos de tu cuenta</h2>
            <List className={classes.root}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <EmojiPeopleIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Nombre" secondary={datosPersonales.data ? "No hay datos" : ""} />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PermContactCalendarIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Apellido" secondary={datosPersonales.data ? "No hay datos" : ""} />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <DashboardIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Tipo de identificacion"
                  secondary={datosPersonales.data ? "No hay datos" : ""}
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <FingerprintIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Numero de identificacion"
                  secondary={datosPersonales.data ? "No hay datos" : ""}
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ContactPhoneIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Numero telefonico"
                  secondary={datosPersonales.data ? "No hay datos" : ""}
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
