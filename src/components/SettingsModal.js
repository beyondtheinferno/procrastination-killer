import { useState } from "react"
import withStyles from "react-jss"
import { CloseIcon } from "../assets/icons"
import colors from "../styles/colors"
import { isInputValid } from "../utils/helper"

const BREAKPOINT = 430

const styles = {
  fullWidth: {
    width: "100%",
    height: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#111111d4",
  },
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    background: colors.black,
    color: colors.white,
    border: `1px solid ${colors.white}`,
    padding: "2.5rem",
    borderRadius: "10px",
    [`@media only screen and (max-width: ${BREAKPOINT}px)`]: {
      width: "100%",
      minWidth: "100%",
      maxWidth: "100%",
      borderRadius: 0,
    },
  },
  heading: {
    fontSize: "calc(26px + (32 - 26) * ((100vw - 300px) / (1600 - 300)))",
    marginBottom: "1rem",
  },
  row: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    padding: "0.5rem 0",
    width: "100%",
  },
  label: {
    marginBottom: "0.2rem",
  },
  input: {
    width: "30vw",
    minWidth: "300px",
    maxWidth: "500px",
    // height: "3rem",
    background: colors.white,
    border: 0,
    padding: "0.8rem 1rem",
    borderRadius: "6px",
    [`@media only screen and (max-width: ${BREAKPOINT}px)`]: {
      width: "100%",
      minWidth: "100%",
      maxWidth: "100%",
    },
  },
  close: {
    position: "absolute",
    top: "2.8rem",
    right: "2rem",
    width: "2rem",
    cursor: "pointer",
  },
}

const SettingsModal = ({
  classes,
  globals,
  updateGlobals,
  setShowSettings,
}) => {
  const [globalsCopy, setGlobalsCopy] = useState(globals)

  const handleChange = (e, type) => {
    const mapping = {
      name: e.target.value,
      startYear: Number(e.target.value),
      deadlineYear: Number(e.target.value),
    }
    setGlobalsCopy((d) => ({
      ...d,
      [type]: mapping[type],
    }))
  }

  const closeSettings = () => {
    if (!isInputValid(globalsCopy)) return
    updateGlobals(globalsCopy)
    setShowSettings(false)
  }

  return (
    <div className={classes.fullWidth}>
      <div className={classes.container}>
        <h4 className={classes.heading}>Defaults</h4>
        <div className={classes.row}>
          <p className={classes.label}>Name</p>
          <input
            className={classes.input}
            type="text"
            placeholder="Enter your name"
            value={globalsCopy.name}
            onChange={(e) => handleChange(e, "name")}
          />
        </div>
        <div className={classes.row}>
          <p className={classes.label}>Birth Year</p>
          <input
            className={classes.input}
            type="number"
            placeholder="Enter your birth year"
            value={globalsCopy.startYear}
            onChange={(e) => handleChange(e, "startYear")}
          />
        </div>
        <div className={classes.row}>
          <p className={classes.label}>Deadline Year</p>
          <input
            className={classes.input}
            type="number"
            placeholder="Enter your deadline year"
            value={globalsCopy.deadlineYear}
            onChange={(e) => handleChange(e, "deadlineYear")}
          />
        </div>
        <img
          className={classes.close}
          src={CloseIcon}
          alt="Click to close the settings popup."
          onClick={closeSettings}
        />
      </div>
    </div>
  )
}

export default withStyles(styles)(SettingsModal)
