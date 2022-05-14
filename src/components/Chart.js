import withStyles from "react-jss"
import colors from "../styles/colors"
import Waffle from "./Waffle"

const styles = {
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
}

const Chart = ({ classes, data }) => {
  return (
    <section className={classes.container}>
      {data.map((yearData, i) => (
        <Waffle key={i} data={yearData} />
      ))}
    </section>
  )
}

export default withStyles(styles)(Chart)
