import { useState } from "react"
import withStyles from "react-jss"
import { CloseIcon } from "../assets/icons"
import colors from "../styles/colors"
import { isDeadlinesInputValid, getDateInputFormat } from "../utils/helper"

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
    background: colors.black,
    color: colors.white,
    border: `1px solid ${colors.white}`,
    padding: "2.5rem",
    borderRadius: "10px",
    maxHeight: "80vh",
    overflowY: "scroll",
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

const DeadlinesModal = ({
  classes,
  globals,
  updateGlobals,
  setShowSettings,
}) => {
  const [globalsCopy, setGlobalsCopy] = useState({ ...globals })

  const handleChange = (e, id, type) => {
    const mapping = {
      name: e.target.value,
      dueOn: e.target.value,
    }
    const updatedDeadlines = globalsCopy.deadlines.map((d) => {
      if (d.id === id)
        return {
          ...d,
          [type]: mapping[type],
        }
      return d
    })
    setGlobalsCopy((d) => ({
      ...d,
      deadlines: updatedDeadlines,
    }))
  }

  const createNewDeadline = () => {
    const id = globalsCopy.deadlines.length
    const newDeadline = { id, name: "", dueOn: getDateInputFormat() }
    setGlobalsCopy((d) => ({
      ...d,
      deadlines: [...d.deadlines, newDeadline],
    }))
  }

  const deleteDeadline = (id) => {
    const newDeadlines = globalsCopy.deadlines.filter((d) => d.id !== id)
    setGlobalsCopy((d) => ({
      ...d,
      deadlines: newDeadlines,
    }))
  }

  const closeSettings = () => {
    if (isDeadlinesInputValid(globalsCopy)) {
      updateGlobals(globalsCopy)
    }
    setShowSettings(false)
  }

  return (
    <div className={classes.fullWidth}>
      <div className={classes.container}>
        <h4 className={classes.heading}>Defaults</h4>
        {globalsCopy.deadlines.length
          ? globalsCopy.deadlines.map((d) => (
              <div className={classes.row} key={d.id}>
                <p className={classes.label}>Name</p>
                <input
                  className={classes.input}
                  type="text"
                  placeholder="Enter the deadline"
                  value={d.name}
                  onChange={(e) => handleChange(e, d.id, "name")}
                />
                <p className={classes.label}>Due On</p>
                <input
                  type="date"
                  value={d.dueOn}
                  onChange={(e) => handleChange(e, d.id, "dueOn")}
                  // min="2018-01-01"
                  // max="2018-12-31"
                />
                <button onClick={() => deleteDeadline(d.id)}>
                  Delete this deadline!
                </button>
              </div>
            ))
          : null}
        <button onClick={createNewDeadline}>Add a new deadline!</button>
        {/* <div className={classes.row}>
          <p className={classes.label}>Name</p>
          <input
            className={classes.input}
            type="text"
            placeholder="Enter your name"
            value={globalsCopy.name}
            onChange={(e) => handleChange(e, "name")}
          />
        </div> */}
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

export default withStyles(styles)(DeadlinesModal)
