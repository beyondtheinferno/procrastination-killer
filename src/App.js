import withStyles from "react-jss"
import globalStyles from "./styles/global"
import fonts from "./styles/fonts"
import { Home } from "./layouts"

const styles = {
  ...globalStyles,
  ...fonts,
  app: {},
}

const App = ({ classes }) => {
  return (
    <div className={classes.app}>
      <Home />
    </div>
  )
}

export default withStyles(styles)(App)
