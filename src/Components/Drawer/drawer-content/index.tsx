import { useCallback, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import CastenIcon from "../../../assets/icons/Casten.png";
import { Skeleton } from "@material-ui/lab";
import "./drawer-content.scss";
import DocsIcon from "../../../assets/icons/stake.svg";
import classnames from "classnames";
import { useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DataThresholdingIcon from "@mui/icons-material/DataThresholding";
import Person2Icon from "@mui/icons-material/Person2";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

function NavContent() {
  const [active, setActive] = useState("security");
  const navigate = useNavigate();
  const navigateToPage = (route: string) => {
    navigate(route);
    setActive(route.substring(1));
  };

  const check = localStorage.getItem("borrower");

  return (
    <div className="dapp-sidebar">
      <div className="dapp-nav">
        {check === "true" ? (
          <div
            className={
              active === "dashboard"
                ? "dapp-menu-item-special"
                : "dapp-menu-item"
            }
            onClick={() => navigateToPage("/borrowerDash")}
          >
            <DashboardIcon color="primary" />
            <p
              style={{ color: "rgb(230,179,82)" }}
              className={active === "" ? "text-special" : "text"}
            >
              Dashboard
            </p>
          </div>
        ) : (
          <div
            className={
              active === "dashboard"
                ? "dapp-menu-item-special"
                : "dapp-menu-item"
            }
            onClick={() => navigateToPage("/dashboard")}
          >
            <DashboardIcon color="primary" />
            <p
              style={{ color: "rgb(230,179,82)" }}
              className={active === "" ? "text-special" : "text"}
            >
              Dashboard
            </p>
          </div>
        )}

        {check !== "true" && (
          <div
            className={
              active === "portfolio"
                ? "dapp-menu-item-special"
                : "dapp-menu-item"
            }
            onClick={() => navigateToPage("/portfolio")}
          >
            <DataThresholdingIcon color="primary" />
            <p
              style={{ color: "rgb(230,179,82)" }}
              className={active === "portfolio" ? "text-special" : "text"}
            >
              Portfolio Manager
            </p>
          </div>
        )}

        {check === "true" && (
          <div
            className={
              active === "borrower"
                ? "dapp-menu-item-special"
                : "dapp-menu-item"
            }
            onClick={() => navigateToPage("/borrower")}
          >
            <Person2Icon color="primary" />
            <p
              style={{ color: "rgb(230,179,82)" }}
              className={active === "borrower" ? "text-special" : "text"}
            >
              Borrower Profile
            </p>
          </div>
        )}

        {check !== "true" && (
          <div
            className={
              active === "invest" ? "dapp-menu-item-special" : "dapp-menu-item"
            }
            onClick={() => navigateToPage("/invest")}
          >
            <CurrencyExchangeIcon color="primary" />
            <p
              style={{ color: "rgb(230,179,82)" }}
              className={active === "invest" ? "text-special" : "text"}
            >
              Invest
            </p>
          </div>
        )}
      </div>

      {/* <Social /> */}
    </div>
  );
}

export default NavContent;
