import { useMemo, useState } from "react"
import withStyles from "react-jss"
import colors from "../styles/colors"
import { DeadlinesModal, IconTray } from "../components"
import { getDeadlinesData } from "../utils/helper"

const styles = {
  header: {
    width: "100%",
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
  subheading: {
    fontSize: "calc(18px + (22 - 18) * ((100vw - 300px) / (1600 - 300)))",
    fontWeight: 400,
    textAlign: "center",
    color: colors.grey,
  },
  red: {
    fontSize: "calc(60px + (66 - 60) * ((100vw - 300px) / (1600 - 300)))",
    color: colors.yellow,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  deadlinsContainer: {
    display: "flex",
    flexDirection: "column",
    color: colors.white,
    margin: "1rem",
  },
  name: {
    fontSize: "36px",
    color: colors.blue,
  },
  text: {
    fontSize: "28px",
    color: colors.yellow,
    fontWeight: 800,
  },
  bold: {
    color: colors.white,
    fontSize: "18px",
    fontWeight: 400,
  },
  date: {
    fontSize: "24px",
    color: colors.white,
    fontWeight: 800,
  },
}

const DeadlinesPage = ({
  classes,
  globals,
  updateGlobals,
  switchMinimalMode,
}) => {
  const { name, minimal, deadlines } = globals
  const [showSettings, setShowSettings] = useState(false)
  const data = useMemo(
    () => getDeadlinesData(globals.deadlines),
    [globals.deadlines]
  )

  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.heading}>
          {name}, you have{" "}
          <span className={classes.red}>{deadlines.length}</span> deadlines
          approaching.
        </h1>
        <p className={classes.subheading}>What are you doing about theses?</p>
        <IconTray
          minimal={minimal}
          switchMinimalMode={switchMinimalMode}
          setShowSettings={setShowSettings}
        />
      </header>
      <main className={classes.container}>
        {data.length
          ? data.map((d) => (
              <div className={classes.deadlinsContainer} key={d.id}>
                <h2 className={classes.name}>{d.name}</h2>
                <p className={classes.date}>{d.formattedDueOn}</p>
                <p className={classes.text}>
                  {d.days} <span className={classes.bold}>days</span>
                </p>
                <p className={classes.text}>
                  {d.weeks} <span className={classes.bold}>weeks</span>
                </p>
                <p className={classes.text}>
                  {d.months}
                  <span className={classes.bold}> months</span>
                </p>
                <p className={classes.text}>
                  {d.years} <span className={classes.bold}>years</span>
                </p>
              </div>
            ))
          : null}
      </main>
      {showSettings ? (
        <DeadlinesModal
          globals={globals}
          updateGlobals={updateGlobals}
          setShowSettings={setShowSettings}
        />
      ) : null}
    </>
  )
}

export default withStyles(styles)(DeadlinesPage)
