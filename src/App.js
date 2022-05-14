import { useMemo } from "react"
import withStyles from "react-jss"
import globalStyles from "./styles/global"
import fonts from "./styles/fonts"
import { Header, Home } from "./layouts"
import { getWeeksInAYear } from "./utils/helper"

const styles = {
  ...globalStyles,
  ...fonts,
}

const App = () => {
  const data = useMemo(() => getWeeksInAYear(), [])
  return (
    <>
      <Header weeksRemaining={data.weeksRemaining} />
      <Home data={data} />
    </>
  )
}

export default withStyles(styles)(App)
