/*global chrome*/
import { useState, useEffect, useMemo } from "react"
import withStyles from "react-jss"
import globalStyles from "./styles/global"
import fonts from "./styles/fonts"
import { Header, Home, Minimal } from "./layouts"
import { getFullData } from "./utils/helper"
import colors from "./styles/colors"
import { MinimizeIcon, MaximizeIcon } from "./assets/icons"

const styles = {
  ...globalStyles,
  ...fonts,
  app: {
    position: "relative",
    minHeight: "100vh",
    background: colors.black,
  },
  icon: {
    position: "absolute",
    top: "1.5rem",
    right: "1.8rem",
    width: "2rem",
    height: "2rem",
    cursor: "pointer",
  },
}

const App = ({ classes }) => {
  const data = useMemo(() => getFullData(), [])
  const [minimal, setMinimal] = useState(true)

  useEffect(() => {
    if (chrome && chrome.storage && chrome.storage.local) {
      chrome.storage.local.get(["minimal"], (data) => {
        if (data.minimal !== minimal) {
          setMinimal(data.minimal)
        }
      })
    }
  }, [])

  const handleSwitch = (oldMinimalVal) => {
    const newMinimalVal = !oldMinimalVal
    setMinimal(newMinimalVal)
    if (chrome && chrome.storage && chrome.storage.local) {
      chrome.storage.local.set({ minimal: newMinimalVal })
    }
  }

  return (
    <div className={classes.app}>
      {minimal ? (
        <Minimal
          weeksRemaining={data.weeksRemaining}
          totalWeeks={data.totalWeeks}
        />
      ) : (
        <>
          <Header weeksRemaining={data.weeksRemaining} />
          <Home data={data} />
        </>
      )}
      <img
        className={classes.icon}
        src={minimal ? MaximizeIcon : MinimizeIcon}
        onClick={() => handleSwitch(minimal)}
        alt="Switch to minimal view."
      />
    </div>
  )
}

export default withStyles(styles)(App)
