/*global chrome*/
import { useState, useMemo } from "react"
import withStyles from "react-jss"
import globalStyles from "./styles/global"
import fonts from "./styles/fonts"
import { Header, Home, Minimal, DeadlinesPage } from "./layouts"
import { getFullData, isObjectEqual } from "./utils/helper"
import colors from "./styles/colors"
import { IconTray, SettingsModal } from "./components"

const styles = {
  ...globalStyles,
  ...fonts,
  app: {
    position: "relative",
    minHeight: "100vh",
    background: colors.black,
  },
  img: {
    width: "50%",
    height: "50%",
  },
}

const App = ({ classes }) => {
  const [globals, setGlobals] = useState({
    deadlinesPage: true,
    deadlines: [],
    //
    name: "Raagul",
    startYear: 1998,
    deadlineYear: 2077,
    minimal: true,
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

  const switchMinimalMode = () => {
    updateGlobals({
      ...globals,
      minimal: !globals.minimal,
    })
  }

  const [showSettings, setShowSettings] = useState(false)

  return (
    <div className={classes.app}>
      <DeadlinesPage
        globals={globals}
        updateGlobals={updateGlobals}
        switchMinimalMode={switchMinimalMode}
      />
      {/* {globals.minimal ? (
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
        minimal={globals.minimal}
        switchMinimalMode={switchMinimalMode}
        setShowSettings={setShowSettings}
      />
      {showSettings ? (
        <SettingsModal
          globals={globals}
          updateGlobals={updateGlobals}
          setShowSettings={setShowSettings}
        />
      ) : null} */}
    </div>
  )
}

export default withStyles(styles)(App)
