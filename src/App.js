/*global chrome*/
import { useState, useEffect, useMemo } from "react"
import withStyles from "react-jss"
import globalStyles from "./styles/global"
import fonts from "./styles/fonts"
import { Header, Home, Minimal } from "./layouts"
import { getFullData, isObjectEqual } from "./utils/helper"
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
  const [globals, setGlobals] = useState({
    name: "Archie",
    startYear: 1998,
    deadlineYear: 2077,
  })

  const updateGlobals = (newGlobals) => {
    if (!isObjectEqual(globals, newGlobals)) {
      setGlobals(newGlobals)
      if (chrome && chrome.storage && chrome.storage.local) {
        chrome.storage.local.set({ globals: newGlobals })
      }
    }
  }

  const data = useMemo(() => getFullData(globals), [globals])
  const [minimal, setMinimal] = useState(true)

  useEffect(() => {
    if (chrome && chrome.storage && chrome.storage.local) {
      chrome.storage.local.get(["minimal"], (data) => {
        if (data.minimal !== minimal) {
          setMinimal(data.minimal)
        }
      })
      chrome.storage.local.get(["globals"], (data) => {
        updateGlobals(data.globals)
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

  const [showSettings, setShowSettings] = useState(false)

  return (
    <div className={classes.app}>
      {minimal ? (
        <Minimal
          weeksRemaining={data.weeksRemaining}
          totalWeeks={data.totalWeeks}
        />
      ) : (
        <>
          <Header name={globals.name} weeksRemaining={data.weeksRemaining} />
          <Home data={data} />
        </>
      )}
      <IconTray
        minimal={minimal}
        switchMinimalMode={switchMinimalMode}
        setShowSettings={setShowSettings}
      />
      {showSettings ? (
        <SettingsModal
          globals={globals}
          updateGlobals={updateGlobals}
          setShowSettings={setShowSettings}
        />
      ) : null}
    </div>
  )
}

export default withStyles(styles)(App)
