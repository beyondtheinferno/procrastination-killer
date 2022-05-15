import withStyles from "react-jss"
import Chart from "../components/Chart"
import colors from "../styles/colors"

const styles = {
  container: {
    paddingBottom: "2rem",
    background: colors.black,
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
