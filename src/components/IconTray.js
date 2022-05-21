import withStyles from "react-jss"
import { MinimizeIcon, MaximizeIcon, SettingsIcon } from "../assets/icons"
import colors from "../styles/colors"

const styles = {
  container: {
    position: "absolute",
    top: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1.5rem",
    background: colors.black70,
    borderRadius: "12px",
    "& > :first-child": {
      marginLeft: 0,
    },
  },
  icon: {
    width: "2rem",
    height: "2rem",
    cursor: "pointer",
    marginLeft: "1.3rem",
  },
}

const IconTray = ({ classes, minimal, switchMinimalMode, setShowSettings }) => {
  return (
    <div className={classes.container}>
      <img
        className={classes.icon}
        src={SettingsIcon}
        onClick={() => setShowSettings(true)}
        alt="Configure defaults."
      />
      <img
        className={classes.icon}
        src={minimal ? MaximizeIcon : MinimizeIcon}
        onClick={switchMinimalMode}
        alt="Switch to minimal view."
      />
    </div>
  )
}

export default withStyles(styles)(IconTray)
