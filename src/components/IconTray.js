import withStyles from "react-jss"
import {
  MinimizeIcon,
  MaximizeIcon,
  Settings,
  SettingsIcon,
} from "../assets/icons"

const styles = {
  container: {
    position: "absolute",
    top: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1.5rem",
  },
  icon: {
    width: "2rem",
    height: "2rem",
    cursor: "pointer",
    marginLeft: "1.3rem",
  },
}

const IconTray = ({ classes, minimal, switchMinimalMode }) => {
  return (
    <div className={classes.container}>
      <img
        className={classes.icon}
        src={SettingsIcon}
        onClick={() => {}}
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
