import withStyles from "react-jss"
import colors from "../styles/colors"

const BOX_SIZE = 10,
  MARGIN = 1

const styles = {
  container: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    padding: "0.5rem",
  },
  year: {
    fontWeight: 500,
    textAlign: "center",
  },
  box: {
    width: `${BOX_SIZE}px`,
    height: `${BOX_SIZE}px`,
    margin: `${MARGIN}px`,
  },
}

const FullWaffle = ({ classes, total, completed }) => {
  return (
    <div className={classes.container}>
      {[...Array(total).keys()].map((_, i) => (
        <div
          key={i}
          className={classes.box}
          style={{
            // background: completed < i + 1 ? colors.green : colors.red,
            background: completed < i + 1 ? colors.yellow : colors.navyBlue,
          }}
        />
      ))}
    </div>
  )
}

export default withStyles(styles)(FullWaffle)
