import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import { LandingStyle } from "../css/LandingStyle";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Procesos Web
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(15, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(1),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    width: "100%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 2,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    width: "100%",
  },
  buttonRegister: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  buttonLogin: {
    border: 0,
    borderRadius: 3,
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
}));

export default function Landing() {
  const classes = useStyles();
  const [data, setData] = React.useState([]);
  const [state, setState] = React.useState(false);
  const URL =
    "https://docs.google.com/spreadsheets/d/1oxyWbgWaR21WkSUbS_qyP1uILTDW12JB4qYFc9cK0D0/";
  const setInfo = (info, tableTop) => {
    setData(info);
    setState(true);
  };

  if (!state) {
    Tabletop.init({
      key: URL,
      callback: setInfo,
      simpleSheet: true,
    });
  }
  return (
    <div className={classes.root}>
      <LandingStyle />
      <AppBar style={{ backgroundColor: "#2c8493" }}>
        <Toolbar>
          <BusinessCenterIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Procesos Web
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container width="100%">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
              style={{ fontSize: "2.5em" }}
            >
              ProcesosWeb - ScraLaw
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Maneja, observa y gestiona los movimientos de tus procesos en un
              solo lugar
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={3} justify="center">
                <Grid item>
                  <Button href="#/register" className={classes.buttonRegister}>
                    Registro
                  </Button>
                </Grid>
                <Grid item>
                  <Button href="#/login" className={classes.buttonLogin}>
                    Ingreso
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth={2}>
          {/* End hero unit */}
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://procesosweb.consulting/images/tablet-min.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Organiza tu tiempo y tus procesos en un solo lugar
                    </Typography>
                    <Typography>
                      El tiempo es más valioso que el oro, no lo pierdas,
                      gestiona tus procesos con nosotros y tendras un perfil
                      donde podras tener la informacion de todos tus procesos,
                      dedícale tiempo a tus clientes y al litigio estratégico,
                      no pierdas el tiempo buscando uno por uno tus procesos, en
                      procesosWeb solo tienes que ingresar una sola vez el
                      número y tendrás la información actualizada siempre.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Grid item style={{ margin: "0 auto" }}>
                      <Button
                        href="#/register"
                        className={classes.buttonRegister}
                      >
                        Regístrate ahora
                      </Button>
                    </Grid>
                  </CardActions>
                </Card>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://procesosweb.consulting/images/Images2-min.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Vigilancia de procesos legales
                    </Typography>
                    <Typography>
                      Crea tu cuenta con nosotros y vigila todos tus procesos en
                      una sola página; tendrás toda la información del portal de
                      la rama judicial unificada en un sistema solo para ti, y
                      lo mejor, es GRATIS, puedes usar este servicio de forma
                      gratuita siempre, más adelante desarrollaremos otros
                      servicios y podrás elegir si los adquieres o no, ¿Qué
                      esperas?
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Grid item style={{ margin: "0 auto" }}>
                      <Button
                        href="#/register"
                        className={classes.buttonRegister}
                      >
                        Registrate ahora
                      </Button>
                    </Grid>
                  </CardActions>
                </Card>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://s3.amazonaws.com/procesosweb.consulting/images/segura.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Mantén toda tu información segura
                    </Typography>
                    <Typography>
                      Tus datos de usuario y los datos de tus procesos están
                      protegidos con una infraestructura bastante robusta basada
                      en los servicios de Amazon Web Services, los certificados
                      de seguridad SSL permiten la transmisión de la información
                      de forma encriptada, ten la tranquilidad de que almacenas
                      tus datos de forma confiable.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Grid item style={{ margin: "0 auto" }}>
                      <Button
                        href="#/register"
                        className={classes.buttonRegister}
                      >
                        Registrate ahora
                      </Button>
                    </Grid>
                  </CardActions>
                </Card>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <div className="slider">
                  <h3>Creado por:</h3>
                  <ul>
                    {data.map((row) => {
                      return (
                        <li>
                          <div>
                            <div className="text">
                              <h3>{row.Nombre}</h3>
                              <p>{row.Descripcion}</p>
                              <p>Encuéntrame en:</p>
                              <ul>
                                <li>
                                  <a href={row.Github}>Github</a>
                                </li>
                                <li>
                                  <a href={row.Twitter}>Twitter</a>
                                </li>
                                <li>
                                  <a href={row.LinkedIn}>LinkedIn</a>
                                </li>
                              </ul>
                            </div>
                            <div className="img">
                              <img
                                src={row.Imagen}
                                width="320px"
                                alt={row.Nombre}
                              />
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  &nbsp;
                  <div>
                    <h4>Descripción del proyecto:</h4>
                    &nbsp;
                    <p>
                      Esta aplicación permite a los usuarios manejar y
                      administrar los procesos legales que quiera, solamente
                      debe crear su cuenta e ingresar el número de
                      identificación del proceso que consta de 23 dígitos, podrá
                      mantener el número de procesos que quiera y consultarlos
                      en su cuenta de usuario.
                    </p>
                    &nbsp;
                    <p>
                      Este proyecto está construido en ReactJS para el frontend,
                      Python para el backend y la infraestructura funciona en
                      Amazon Web Services.
                    </p>
                    &nbsp;
                    <h4>
                      Puedes ver el código de nuestro proyecto en estos enlaces:
                    </h4>
                    &nbsp;
                    <ul>
                      <li>
                        <a href="https://github.com/cbayonao/Frontend_Proyecto_final_HBS">
                          Repositorio del Frontend
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/jzamora5/ScraLaw_API">
                          Repositorio del Backend
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Procesos Web - ScrapLaw
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Generando justicia al alcance de todos
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </div>
  );
}
