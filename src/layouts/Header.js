import withStyles from "react-jss"

const styles = {
  header: {},
}

const Header = ({ classes }) => {
  return <header className={classes.header}></header>
}

export default withStyles(styles)(Header)
