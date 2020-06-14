import React, { useContext } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { LoginStyle } from "../css/global";
import UserPool from "../UserPool";
import { AccountContext } from "./Accounts";
import { deleteProcess, getProcess } from "../hooks/getApi";
import Button from "@material-ui/core/Button";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "50%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export function ProcessDetail(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState({
    created_at: "",
    location: "",
    location_expediente: "",
    movements: [],
    office: {},
    parties: {
      Demandante: [],
      Demandado: [],
    },
    radicated_at: "",
    tier: "",
    type_proc: "",
    updated_at: "",
  });
  const { getSession } = useContext(AccountContext);

  React.useEffect(() => {
    if (!UserPool.getCurrentUser()) {
      window.location.href = "#/";
    }
    if (loading) {
      getSession().then((session) => {
        getProcess(props.match.params.processId, session).then((response) => {
          setLoading(false);
          setData(response);
        });
      });
    }
  });

  let demandante;
  let demandado;
  let otros;


  Object.keys(data.parties).map((field) => {
    if (field.includes("Demandado")) {
      if (data.parties[field].length > 1) {
	demandado = data.parties[field].join(", ");
      }
      else {
	demandado = data.parties[field];
      }
    } else if (field.includes("Demandante")) {
      if (data.parties[field].length > 1) {
	demandante = data.parties[field].join(", ");
      }
      else {
	demandante = data.parties[field];
      }
    } else {
      if (data.parties[field].length > 1) {
	otros = data.parties[field].join(", ");
      }
      else {
	otros = data.parties[field];
      }
    }
  });

  const handleChangePanel = (panel) => (event, isExpanded) => {
    event;
    setExpanded(isExpanded ? panel : false);
  };
  const handleChange = (event, newValue) => {
    event;
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  if (loading) {
    return $("#waiting").show();
  }
  return (
    <div className={classes.root}>
      <Button variant="contained" color="secondary" href="#/home">
        Volver al Home
      </Button>
      <LoginStyle>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Datos Generales del proceso" {...a11yProps(0)} />
            <Tab label="Partes del Proceso" {...a11yProps(1)} />
            <Tab label="Actuaciones del Proceso" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <ExpansionPanel
              expanded={expanded === "panel1"}
              onChange={handleChangePanel("panel1")}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography component={"span"} className={classes.heading}>
                  Fecha de Radicacion
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography component={"span"}>{data.radicated_at}</Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              expanded={expanded === "panel2"}
              onChange={handleChangePanel("panel2")}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography component={"span"} className={classes.heading}>
                  Despacho&nbsp;
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography component={"span"}>{data.office.name}</Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              expanded={expanded === "panel3"}
              onChange={handleChangePanel("panel3")}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography component={"span"} className={classes.heading}>
                  Ubicacion del expediente
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography component={"span"}>
                  {data.location_expediente}
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              expanded={expanded === "panel4"}
              onChange={handleChangePanel("panel4")}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography component={"span"} className={classes.heading}>
                  Tipo de proceso
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography component={"span"}>{data.type_proc}</Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <ExpansionPanel
              expanded={expanded === "panel1"}
              onChange={handleChangePanel("panel1")}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography component={"span"} className={classes.heading}>
                  Demandante - Parte Activa
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography component={"span"}>{demandante}</Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              expanded={expanded === "panel2"}
              onChange={handleChangePanel("panel2")}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography component={"span"} className={classes.heading}>
                  Demandado - Parte pasiva
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography component={"span"}>{demandado}</Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              expanded={expanded === "panel3"}
              onChange={handleChangePanel("panel3")}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography component={"span"} className={classes.heading}>
                  <h4>Otros - Terceros - Intervinientes</h4>
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography component={"span"}>{otros != null ? otros : "No interviene terceros"}</Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
	    {data.movements.map((actuacion, index) => {
	      return(
		<ExpansionPanel
		  key={index}
                  expanded={expanded === `panel${index}`}
                  onChange={handleChangePanel(`panel${index}`)}
                >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography component={"span"} className={classes.heading}>
                      {actuacion["Fecha de Actuación"]}
                    </Typography>
                    <Typography
                      component={"span"}
                      className={classes.secondaryHeading}
                    >
		      {actuacion.Actuación}
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography className={classes.heading} component={"span"}>
                      <h4>Anotación:</h4> {actuacion.Anotación}
                    </Typography>
		    <Typography className={classes.secondaryHeading} component={"span"} >
		      <h4>Fecha inicia término:</h4> {actuacion["Fecha Inicia Término"] ? actuacion["Fecha Inicia Término"] : "No se registra fecha"}
		    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
	      )
	    })}
          </TabPanel>
        </SwipeableViews>
      </LoginStyle>
    </div>
  );
}

export function ProcessDetailDelete(props) {
  if (!UserPool.getCurrentUser()) {
    window.location.href = "#/";
  }
  const { getSession } = useContext(AccountContext);

  getSession().then((session) => {
    deleteProcess(props.match.params.processId, session).then((response) => {
      response;
      window.location.href = "#/home";
    });
  });

  return $("#waiting").show();
}
