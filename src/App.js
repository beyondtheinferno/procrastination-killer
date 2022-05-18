/*global chrome*/
import { useState, useEffect, useMemo } from "react"
import withStyles from "react-jss"
import globalStyles from "./styles/global"
import fonts from "./styles/fonts"
import { Header, Home, Minimal } from "./layouts"
import { getFullData } from "./utils/helper"
import colors from "./styles/colors"
import { IconTray } from "./components"
import SettingsModal from "./components/SettingsModal"

const styles = {
  ...globalStyles,
  ...fonts,
  app: {
    position: "relative",
    minHeight: "100vh",
    background: colors.black,
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

  const switchMinimalMode = () => {
    let newMinimalVal = null
    setMinimal((oldMinimalVal) => {
      newMinimalVal = !oldMinimalVal
      return newMinimalVal
    })
    if (chrome && chrome.storage && chrome.storage.local) {
      chrome.storage.local.set({ minimal: newMinimalVal })
    }
  }

  const [globals, setGlobals] = useState({
    name: "Archie",
    startYear: 1998,
    deadlineYear: 2077,
  })
  const [showSettings, setShowSettings] = useState(true)

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
      <IconTray minimal={minimal} switchMinimalMode={switchMinimalMode} />
      {/* {showSettings ? (
        <SettingsModal globals={globals} setGlobals={setGlobals} />
      ) : null} */}
    </div>
  )
}

export default withStyles(styles)(App)
