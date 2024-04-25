import { Link, Outlet } from "react-router-dom";
import { useDashboardDataContext } from "@/context/dashboardDataContext";
import styles from "@/assets/scss/Layouts.module.scss";
import Navbar from "../components/Navbars/Navbar";
import {
    Logo,
    Menu,
    MenuItem,
    NavTitle,
    Sidebar,
    SidebarBg,
    SidebarToggle,
    SubMenu,
} from "../components/Sidebar/Sidebar";

import lightLogo from "../assets/image/logo.png";
import lightMini from "../assets/image/mini-logo.png";
import darkLogo from "../assets/image/black-logo.png";
import darkMini from "../assets/image/black-mini-logo.png";
import { Fragment } from "react";

const Layouts = () => {
    const {
        isDark,
        sidebarMini,
        setSidebarMini,
        navbarFixed,
        sidebarBgImg,
        sidebarBgColor,
    } = useDashboardDataContext();

    return (
        <div className={styles.layout}>
            <Sidebar>
                <SidebarBg bgImg={sidebarBgImg} bgColor={sidebarBgColor}>
                    <Logo>
                        <Link to="/">
                            {isDark ? (
                                <Fragment>
                                    <img
                                        data-logo="mini-logo"
                                        src={lightMini}
                                        alt="logo"
                                    />
                                    <img
                                        data-logo="logo"
                                        src={lightLogo}
                                        alt="logo"
                                    />
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <img
                                        data-logo="mini-logo"
                                        src={
                                            sidebarBgColor === "white"
                                                ? darkMini
                                                : lightMini
                                        }
                                        alt="logo"
                                    />
                                    <img
                                        data-logo="logo"
                                        src={
                                            sidebarBgColor === "white"
                                                ? darkLogo
                                                : lightLogo
                                        }
                                        alt="logo"
                                    />
                                </Fragment>
                            )}
                        </Link>
                        <SidebarToggle>
                            <button
                                type="button"
                                onClick={() => setSidebarMini(!sidebarMini)}
                            >
                                <i className="fa-solid fa-bars-progress" />
                            </button>
                        </SidebarToggle>
                    </Logo>
                    <Menu>
                        <MenuItem routeLink="/dashboard">
                            <i className="fa fa-dashboard" />
                            <span>Dashboard</span>
                        </MenuItem>
                        <NavTitle>
                            <span>UI elements</span>
                        </NavTitle>
                        <SubMenu
                            label="Components"
                            icon={<i className="fa fa-puzzle-piece" />}
                        >
                            <MenuItem routeLink="/components/buttons">
                                <i className="fa fa-puzzle-piece" />
                                <span>Buttons</span>
                            </MenuItem>
                            <MenuItem routeLink="/components/badges">
                                <i className="fa fa-id-badge" />
                                <span>Badges</span>
                            </MenuItem>
                            <MenuItem routeLink="/components/socials">
                                <i className="fa fa-share-square" />
                                <span>Social Buttons</span>
                            </MenuItem>
                            <MenuItem routeLink="/components/cards">
                                <i className="fa fa-id-card" />
                                <span>Cards</span>
                            </MenuItem>
                            <MenuItem routeLink="/components/alerts">
                                <i className="fa fa-exclamation-triangle" />
                                <span>Alerts</span>
                            </MenuItem>
                            <MenuItem routeLink="/components/progressbars">
                                <i className="fa fa-share-square" />
                                <span>Progress Bars</span>
                            </MenuItem>
                            <MenuItem routeLink="/components/modals">
                                <i className="fa fa-fire" />
                                <span>Modals</span>
                            </MenuItem>
                            <MenuItem routeLink="/components/grids">
                                <i className="fa fa-th" />
                                <span>Grids</span>
                            </MenuItem>
                            <MenuItem routeLink="/components/typography">
                                <i className="fa fa-file-word" />
                                <span>Typography</span>
                            </MenuItem>
                        </SubMenu>
                        <MenuItem routeLink="/tables">
                            <i className="fa fa-table" />
                            <span>Tables</span>
                        </MenuItem>
                        <SubMenu
                            label="Forms"
                            icon={<i className="fa fa-pencil-square" />}
                        >
                            <MenuItem routeLink="/forms/basic-form">
                                <i className="fa fa-pencil-square" />
                                <span>Basic Form</span>
                            </MenuItem>
                            <MenuItem routeLink="/forms/advanced-form">
                                <i className="fa fa-pencil-square" />
                                <span>Advanced Form</span>
                            </MenuItem>
                        </SubMenu>
                        <MenuItem routeLink="/icons">
                            <i className="fa fa-star" />
                            <span>Icons</span>
                        </MenuItem>
                        <MenuItem routeLink="/widgets">
                            <i className="fa fa-calculator" />
                            <span>Widgets</span>
                        </MenuItem>
                        <SubMenu
                            label="Charts"
                            icon={<i className="fa fa-pie-chart" />}
                        >
                            <MenuItem routeLink="/charts/chartjs">
                                <i className="fa fa-line-chart" />
                                <span>Chart Js</span>
                            </MenuItem>
                            <MenuItem routeLink="/charts/recharts">
                                <i className="fa fa-line-chart" />
                                <span>Recharts</span>
                            </MenuItem>
                        </SubMenu>
                        <SubMenu
                            label="Maps"
                            icon={<i className="fa-solid fa-location-dot" />}
                        >
                            <MenuItem routeLink="/maps/google-map">
                                <i className="fa fa-map" />
                                <span>Google Map</span>
                            </MenuItem>
                            <MenuItem routeLink="/maps/leaflet-maps">
                                <i className="fa fa-street-view" />
                                <span>Leaflet Maps</span>
                            </MenuItem>
                        </SubMenu>
                        <NavTitle>
                            <span>Extras</span>
                        </NavTitle>
                        <SubMenu
                            label="Pages"
                            icon={<i className="fa fa-paperclip" />}
                        >
                            <MenuItem routeLink="/login">
                                <i className="fa fa-sign-in" />
                                <span>Login</span>
                            </MenuItem>
                            <MenuItem routeLink="/register">
                                <i className="fa fa-sign-in" />
                                <span>Register</span>
                            </MenuItem>
                            <MenuItem routeLink="/page404">
                                <i className="fa fa-paper-plane" />
                                <span>Page 404</span>
                            </MenuItem>
                            <MenuItem routeLink="/page500">
                                <i className="fa fa-paper-plane" />
                                <span>Page 500</span>
                            </MenuItem>
                        </SubMenu>
                        <MenuItem hrefUrl="https://demo.reactadmin.com/bootstrap/adminx/docs/">
                            <i className="fa-solid fa-file-lines" />
                            <span>Docs</span>
                        </MenuItem>
                        <MenuItem hrefUrl="https://www.reactadmin.com/adminx">
                            <i className="fa fa-shopping-cart" />
                            <span>Purchase</span>
                        </MenuItem>
                    </Menu>
                </SidebarBg>
            </Sidebar>
            <div
                className={styles.content}
                style={{
                    width: `${
                        sidebarMini ? "calc(100% - 70px)" : "calc(100% - 280px)"
                    }`,
                }}
            >
                <Navbar />
                <div
                    className="p-4"
                    style={{
                        marginTop: `${navbarFixed ? "80px" : "0"}`,
                    }}
                >
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layouts;

