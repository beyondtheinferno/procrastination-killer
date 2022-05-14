import withStyles from "react-jss"
import colors from "../styles/colors"

const BOX_SIZE = 10,
  MARGIN = 1

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: "0.5rem",
  },
  waffleContainer: {
    width: `${BOX_SIZE * 5 + MARGIN * 10}px`,
    display: "flex",
    flexWrap: "wrap",
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

const Waffle = ({ classes, data }) => {
  return (
    <div className={classes.container}>
      <p className={classes.year}>{data.year}</p>
      <div className={classes.waffleContainer}>
        {[...Array(data.count).keys()].map((_, i) => (
          <div
            key={i}
            className={classes.box}
            style={{
              background: data.completed < i + 1 ? colors.green : colors.red,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default withStyles(styles)(Waffle)
