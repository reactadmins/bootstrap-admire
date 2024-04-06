import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useDashboardDataContext } from "@/context/dashboardDataContext";
import styles from "@/assets/scss/Layouts.module.scss";
import Navbar from "../components/Navbars/Navbar";

const Layouts = () => {
    const { sidebarMini, navbarFixed } = useDashboardDataContext();

    return (
        <div className={styles.layout}>
            <Sidebar />
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

