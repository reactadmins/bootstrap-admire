import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import style from "../../assets/scss/Sidebar.module.scss";
import { useDashboardDataContext } from "../../context/dashboardDataContext";

export function Sidebar({ children }) {
    const [selectSize, setSelectSize] = useState(null);
    const { sidebarMini, setSidebarMini } = useDashboardDataContext();

    let dropRef = useRef();
    useEffect(() => {
        window.onresize = function () {
            setSelectSize(window.screen.width);
        };
        if (selectSize === 1024 || selectSize > 2) {
            document.addEventListener("mousedown", (e) => {
                if (dropRef.current && !dropRef.current.contains(e.target)) {
                    setSidebarMini(false);
                }
            });
        }
    }, [selectSize, setSidebarMini]);

    return (
        <div
            ref={dropRef}
            className={`${style.sidebar} ${sidebarMini ? style.collapse : ""}`}
        >
            {children}
        </div>
    );
}

export function Menu({ children }) {
    return <ul className={style.nav}>{children}</ul>;
}

export function SubMenu({ icon, label, children }) {
    const [subMenu, setSubMenu] = useState(label);

    return (
        <li className={style.nav_item}>
            <a
                className="d-flex align-items-center justify-content-between"
                onClick={() => setSubMenu(subMenu === !label ? true : false)}
            >
                <div className="d-flex align-items-center">
                    {icon}
                    <span>{label}</span>
                </div>
                <i
                    className={`${style.arrow} ${
                        subMenu
                            ? "fa-solid fa-caret-up"
                            : "fa-solid fa-caret-down"
                    }`}
                />
            </a>
            <ul
                data-submenu-expanded={subMenu ? false : true}
                className={style.submenu}
            >
                {children}
            </ul>
        </li>
    );
}

export function MenuItem({ routeLink, hrefUrl, children }) {
    return (
        <li className={style.nav_item}>
            {routeLink ? (
                <NavLink to={routeLink}>{children}</NavLink>
            ) : (
                <a href={hrefUrl} target="_blank">
                    {children}
                </a>
            )}
        </li>
    );
}

export function Logo({ children }) {
    return (
        <div
            className={`${style.logo_wrapper} d-flex align-items-center justify-content-between`}
        >
            {children}
        </div>
    );
}

export function NavTitle({ children }) {
    return <li className={style.nav_title}>{children}</li>;
}

export function SidebarBg({ bgImg, bgColor, children }) {
    return (
        <div
            className={style.sidebar_background}
            data-bg-color={bgColor}
            style={{
                backgroundImage: `url(${bgImg ? bgImg : ""})`,
            }}
        >
            {children}
        </div>
    );
}

export function SidebarToggle({ children }) {
    return <div className={style.sidebar_toggle}>{children}</div>;
}

