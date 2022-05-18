import withStyles from "react-jss"
import { Chart } from "../components"

const styles = {
  container: {
    paddingBottom: "2rem",
  },
}

const Home = ({ classes, data }) => {
  return (
    <section className={classes.container}>
      <Chart data={data} />
    </section>
  )
}

export default withStyles(styles)(Home)
