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
          <Typography>{children}</Typography>
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
  const [data, setData] = React.useState({});
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

  console.log(data);

  if (loading) {
    return $("#waiting").show();
  }
  return (
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
              <Typography className={classes.heading}>
                <h4>Fecha de Radicacion</h4>
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <p>2014-09-09</p>
              </Typography>
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
              <Typography className={classes.heading}>
                <h4>Despacho</h4>&nbsp;
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <p>JUZGADO 026 LABORAL DE BOGOTÁ</p>
              </Typography>
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
              <Typography className={classes.heading}>
                <h4>Ubicacion del expediente</h4>
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <p>Archivo</p>
              </Typography>
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
              <Typography className={classes.heading}>
                <h4>Tipo de proceso</h4>
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <p>De Ejecución</p>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <h4>Demandante - Parte Activa</h4>
          <p>ICM INGENIEROS SA</p>
          <h4>Demandado - Parte Pasiva</h4>
          <p>MAURICIO ORTIZ BARRERA</p>
          <h4>Otros - Terceros - Intervinientes</h4>
          <p>Vacio</p>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <ExpansionPanel
            expanded={expanded === "panel1"}
            onChange={handleChangePanel("panel1")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>
                Auto decide sobre el recurso
              </Typography>
              <Typography className={classes.secondaryHeading}>
                2019-07-31
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <h4>Fecha Inicia termino</h4>
                <p>2019-07-31</p>
                <h4>Fecha de registro</h4>
                <p>2019-17-07</p>
                <h4>Detalle</h4>
                <p>24 de julio Revoca la decision por X o Y motivo</p>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === "panel2"}
            onChange={handleChangePanel("panel2")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography className={classes.heading}>
                Fijacion de Estado &nbsp;
              </Typography>
              <Typography className={classes.secondaryHeading}>
                17-07-2019
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat
                lectus, varius pulvinar diam eros in elit. Pellentesque
                convallis laoreet laoreet.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === "panel3"}
            onChange={handleChangePanel("panel3")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography className={classes.heading}>
                Auto fija fecha audiencia o diligencia &nbsp;
              </Typography>
              <Typography className={classes.secondaryHeading}>
                17-07-2019
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === "panel4"}
            onChange={handleChangePanel("panel4")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography className={classes.heading}>Al despacho</Typography>
              <Typography className={classes.secondaryHeading}>
                10-05-2019
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </TabPanel>
      </SwipeableViews>
    </LoginStyle>
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
