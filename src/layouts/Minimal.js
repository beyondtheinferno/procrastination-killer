import withStyles from "react-jss"
import colors from "../styles/colors"

const styles = {
  header: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "2rem",
    color: colors.white,
  },
  heading: {
    fontSize: "calc(46px + (54 - 46) * ((100vw - 300px) / (1600 - 300)))",
    fontWeight: 600,
    textAlign: "center",
    lineHeight: 1.3,
    marginBottom: "1rem",
  },
  red: {
    fontSize: "calc(82px + (96 - 82) * ((100vw - 300px) / (1600 - 300)))",
    // color: colors.green,
    color: colors.yellow,
  },
}

const Minimal = ({ classes, weeksRemaining, totalWeeks }) => {
  return (
    <header className={classes.header}>
      <h1 className={classes.heading}>
        <span className={classes.red}>{weeksRemaining}</span> out of{" "}
        {totalWeeks} remain
      </h1>
    </header>
  )
}

export default withStyles(styles)(Minimal)
