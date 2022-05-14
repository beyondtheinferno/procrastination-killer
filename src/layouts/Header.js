import withStyles from "react-jss"
import colors from "../styles/colors"

const styles = {
  header: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: "1rem",
  },
  heading: {},
  red: {
    color: colors.red,
  },
}

const Header = ({ classes, weeksRemaining }) => {
  return (
    <header className={classes.header}>
      <h1 className={classes.heading}>
        Raagul, only <span className={classes.red}>{weeksRemaining}</span> weeks
        remain
      </h1>
      <h2 className={classes.subheading}>
        How are you going to spend these weeks?
      </h2>
    </header>
  )
}

export default withStyles(styles)(Header)
