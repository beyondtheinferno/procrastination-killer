import withStyles from "react-jss"
import colors from "../styles/colors"

const styles = {
  header: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "2rem",
    background: colors.black,
    color: colors.white,
  },
  heading: {
    fontSize: "calc(46px + (54 - 46) * ((100vw - 300px) / (1600 - 300)))",
    fontWeight: 600,
    textAlign: "center",
    lineHeight: 1.3,
    marginBottom: "1rem",
  },
  subheading: {
    fontSize: "calc(18px + (22 - 18) * ((100vw - 300px) / (1600 - 300)))",
    fontWeight: 400,
    textAlign: "center",
    color: colors.grey,
  },
  red: {
    fontSize: "calc(60px + (66 - 60) * ((100vw - 300px) / (1600 - 300)))",
    // color: colors.green,
    color: colors.yellow,
  },
}

const Header = ({ classes, weeksRemaining }) => {
  return (
    <header className={classes.header}>
      <h1 className={classes.heading}>
        Raagul, only <span className={classes.red}>{weeksRemaining}</span> weeks
        remain
      </h1>
      <p className={classes.subheading}>
        How are you going to spend these weeks?
      </p>
    </header>
  )
}

export default withStyles(styles)(Header)
