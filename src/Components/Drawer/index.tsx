import { Drawer } from "@mui/material";
import DrawerContent from "./drawer-content";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    background: "#151419 !important",
    borderRight: "3px solid #212025 !important",
  },
});

function Sidebar() {
  const styles = useStyles();
  return (
    <Drawer variant="permanent" anchor="left" classes={{ paper: styles.paper }}>
      <DrawerContent />
    </Drawer>
  );
}

export default Sidebar;
