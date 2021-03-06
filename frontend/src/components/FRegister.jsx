import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { getUser, updateUser } from "../hooks/getApi";
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
import { LoginStyle } from "../css/global";
import { FregisterStyle } from "../css/fregister";

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
  const [lastName, setLastName] = React.useState("");
  const [tipoId, setTipoID] = React.useState("");
  const [numberId, setNumberID] = React.useState("");
  const [numberTel, setNumberTel] = React.useState("");
  const [datosPersonales, setDatosPersonales] = React.useState({});
  const { getSession } = useContext(AccountContext);
  const [status, setStatus] = React.useState(false);

  const updateData = () => {
    const data = {};
    if (name) {
      data["first_name"] = name;
    }
    if (lastName) {
      data["last_name"] = lastName;
    }
    if (tipoId) {
      data["person_id_type"] = tipoId;
    }
    if (numberId) {
      data["person_id"] = numberId;
    }
    if (numberTel) {
      data["cel"] = numberTel;
    }
    $(".waiting").css("display", "flex");
    getSession().then((session) => {
      data["e_mail"] = session.idToken.payload.email;
      updateUser(
        data,
        session.idToken.payload.sub,
        session.idToken.jwtToken
      ).then((response) => {
        setStatus(false);
        getData();
        $(".waiting").css("display", "none");
      });
    });
  };

  const getData = () => {
    if (!status) {
      getSession().then((session) => {
        getUser(session).then((data) => {
          setDatosPersonales(data);
          setStatus(true);
        });
      });
    }
  };

  useEffect(() => {
    if (!UserPool.getCurrentUser()) {
      window.location.href = "#/login";
    }
    getData();
  });

  const showData = (event) => {
    event.preventDefault;
    $(".data").show();
    $(".update-data").hide();
  };

  const showUpdate = (event) => {
    event.preventDefault;
    $(".update-data").show();
    $(".data").hide();
  };

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        href="#/home"
        id="back-home"
      >
        Volver al Home
      </Button>
      <LoginStyle>
        <FregisterStyle />
        <div className="form-style">
          <div className="options">
            <ul>
              <li>
                <button onClick={showData}> Tus Datos</button>
              </li>
              <li>
                <button onClick={showUpdate}> Actualiza tus datos</button>
              </li>
            </ul>
          </div>
          <div className="views">
            <Grid item xs={5} className="data">
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
                    <ListItemText
                      primary="Nombre"
                      secondary={
                        datosPersonales.first_name
                          ? datosPersonales.first_name
                          : "No hay datos"
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <PermContactCalendarIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Apellido"
                      secondary={
                        datosPersonales.last_name
                          ? datosPersonales.last_name
                          : "No hay datos"
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <DashboardIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Tipo de identificacion"
                      secondary={
                        datosPersonales.person_id_type
                          ? datosPersonales.person_id_type
                          : "No hay datos"
                      }
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
                      secondary={
                        datosPersonales.person_id
                          ? datosPersonales.person_id
                          : "No hay datos"
                      }
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
                      secondary={
                        datosPersonales.cel
                          ? datosPersonales.cel
                          : "No hay datos"
                      }
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid item xs={5} className="update-data">
              <Paper elevation={3} className={classes.paper}>
                <SettingsIcon style={{ fontSize: 50 }} />
                <h2>Configura los datos de tu cuenta</h2>
                <ListItem>
                  <TextField
                    label="Ingresa tu Nombre"
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  />
                </ListItem>
                <ListItem>
                  <TextField
                    label="Ingresa tu Apellido"
                    value={lastName}
                    onChange={(event) => {
                      setLastName(event.target.value);
                    }}
                  />
                </ListItem>
                <br />
                <ListItem>
                  <Select
                    displayEmpty
                    value={tipoId}
                    onChange={(event) => {
                      setTipoID(event.target.value);
                    }}
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
                  <TextField
                    label="Numero de ID"
                    value={numberId}
                    onChange={(event) => {
                      setNumberID(event.target.value);
                    }}
                  />
                </ListItem>
                <ListItem>
                  <TextField
                    label="Numero Telefonico"
                    value={numberTel}
                    onChange={(event) => {
                      setNumberTel(event.target.value);
                    }}
                  />
                </ListItem>
                <Button
                  className={classes.button}
                  size="large"
                  variant="contained"
                  color="primary"
                  onClick={updateData}
                >
                  Actualizar Datos
                </Button>
              </Paper>
            </Grid>
          </div>
        </div>
      </LoginStyle>
    </div>
  );
};
