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

const cards = [1, 2, 3];

export default function Album() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar>
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
                    image="https://source.unsplash.com/collection/10732248/1600x900"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Organiza tu tiempo y tus procesos en un solo lugar
                    </Typography>
                    <Typography>
                      El tiempo es mas valioo que el oro, no lo pierdas,
                      gestiona tus procesos con nosotros y tendras un perfil
                      donde podras tener la informacion de todos tus procesos,
                      dedicale tiempo a tus clientes y al litigio estrategico,
                      no pierdas el tiempo buscando uno por uno tus procesos, en
                      procesosWeb solo tienes que ingresa una sola vez el numero
                      y tendras la informacion actualizada siempre.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Grid item>
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
                    image="https://source.unsplash.com/hpjSkU2UYSU/1600x900"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Vigilancia de procesos legales
                    </Typography>
                    <Typography>
                      Crea tu cuenta con nosotros y vigila todos tus procesos en
                      una sola pagina; Tendras toda la informacion del portal de
                      la rama judicial unificada en un sistema solo para ti, y
                      lo mejor es GRATIS, puedes usar este servicio de forma
                      gratuita siempre, mas adelante desarrollaremos otros
                      servicios y podras elegir si los adquieres o no, Que
                      esperas?
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Grid item>
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