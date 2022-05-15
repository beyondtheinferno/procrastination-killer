import { useState } from "react"
import withStyles from "react-jss"
import FullWaffle from "./FullWaffle"
import Waffle from "./Waffle"

const styles = {
  container: {
    width: "100%",
  },
  chartContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  controls: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
}

const Chart = ({ classes, data }) => {
  const YEAR_WISE = "year-wise",
    FULL = "full"
  const [mode, setMode] = useState(YEAR_WISE)
  return (
    <article className={classes.container}>
      {/* <div className={classes.controls}>
        <button onClick={() => setMode(YEAR_WISE)}>Year Wise</button>
        <button onClick={() => setMode(FULL)}>Full</button>
      </div> */}
      {mode === YEAR_WISE ? (
        <figure className={classes.chartContainer}>
          {data.chartData.map((yearData, i) => (
            <Waffle key={i} data={yearData} />
          ))}
        </figure>
      ) : (
        <figure className={classes.chartContainer}>
          <FullWaffle
            total={data.totalWeeks}
            completed={data.totalWeeks - data.weeksRemaining}
          />
        </figure>
      )}
    </article>
  )
}

export default withStyles(styles)(Chart)
