import Header from '../component/header';
import Footer from '../component/footer';
import { Link } from "react-router-dom";

function Layout({ data,activePage }) {
    const accountType = window.localStorage.getItem("accountType");


    return (
        <>
            {/* <!--begin::App--> */}
            <div className="d-flex flex-column flex-root app-root" id="kt_app_root" style={{ backgroundColor: '#f4f6fa' }}>
                {/* <!--begin::Page--> */}
                <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
                    <Header />
                    {/* <!--begin::Wrapper--> */}
                    <div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
                        {/* <!--begin::Toolbar--> */}
                        <div id="kt_app_toolbar" className="app-toolbar pt-6 pb-15">
                            {/* <!--begin::Toolbar container--> */}
                            <div id="kt_app_toolbar_container" className="app-container container-xxl d-flex align-items-start">
                                {/* <!--begin::Toolbar container--> */}
                                <div className="d-flex flex-column flex-row-fluid">
                                    {/* <!--begin::Toolbar wrapper--> */}
                                    <div className="d-flex align-items-center pt-2">
                                        {/* <!--begin::Breadcrumb--> */}
                                        <ul className="breadcrumb breadcrumb-separatorless fw-semibold">
                                            {/* <!--begin::Item--> */}
                                            <li className="breadcrumb-item text-white fw-bold lh-1">
                                                <Link to={accountType == "OWNER" ? `../ownerdashboard/` : accountType == "BUILDER" ? '../builderdashboard/' : '../subcontractordashboard/'} style={{ color: '#5E6278' }}>
                                                    <i className="ki-outline ki-home text-gray-700 fs-6"></i>
                                                </Link>
                                            </li>
                                            {/* <!--end::Item--> */}
                                            {/* <!--begin::Item--> */}
                                            <li className="breadcrumb-item" style={{ color: '#5E6278' }}>
                                                <i className="ki-outline ki-right fs-7 text-gray-700 mx-n1"></i>
                                            </li>
                                            {/* <!--end::Item--> */}
                                            {/* <!--begin::Item--> */}
                                            <li className="breadcrumb-item fw-bold fs-4 lh-1" style={{ color: 'white' }}>{activePage} </li>
                                            {/* <!--end::Item--> */}
                                        </ul>
                                        {/* <!--end::Breadcrumb--> */}
                                    </div>
                                    {/* <!--end::Toolbar wrapper=--> */}
                                </div>
                                {/* <!--end::Toolbar container=--> */}
                            </div>
                            {/* <!--end::Toolbar container--> */}
                        </div>
                        {/* <!--end::Toolbar--> */}
                        {/* <!--begin::Wrapper container--> */}
                        <div className="app-container container-xxl">
                            {/* <!--begin::Main--> */}
                            <div className="app-main flex-column flex-row-fluid" id="kt_app_main"></div>
                            {/* <!--begin::Content--> */}
                            {data}
                            {/* <!--end::Content--> */}
                            <Footer />
                        </div>
                        {/* <!--end::Content wrapper--> */}
                    </div>
                </div>
            </div >
        </>
    );
}

export default Layout;
