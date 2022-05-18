import withStyles from "react-jss"
import colors from "../styles/colors"

const styles = {
  fullWidth: {
    width: "100%",
    height: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "green",
  },
  container: {
    width: "90vw",
    maxWidth: "1400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: colors.black,
    color: colors.white,
  },
}

const SettingsModal = ({ classes, globals, setGlobals }) => {
  return (
    <div className={classes.fullWidth}>
      <div className={classes.container}>
        <h4>Defaults</h4>
      </div>
    </div>
  )
}

export default withStyles(styles)(SettingsModal)
