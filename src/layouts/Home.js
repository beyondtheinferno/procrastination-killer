import withStyles from "react-jss"
import Chart from "../components/Chart"

const styles = {
  container: {},
}

const Home = ({ classes, data }) => {
  return (
    <section className={classes.container}>
      <Chart data={data} />
    </section>
  )
}

export default withStyles(styles)(Home)
