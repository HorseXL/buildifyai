import Header from '../component/header';
import Footer from '../component/footer';
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

function Layout({ data, activePage }) {
    const accountType = window.localStorage.getItem("accountType");

    return (
        <div className="d-flex flex-column flex-root app-root" id="kt_app_root" style={{ backgroundColor: '#f4f6fa' }}>
            {/* Header */}
            <Header />
            
            {/* Main content */}
            <div className="d-flex flex-row flex-1">
                {/* Sidebar */}
                <div className="d-none d-md-block">
                <Sidebar style={{ height: '100%' }}>
                    <Menu>
                        <SubMenu label="Business Hub" className='react-side-menu sidebar_tab' >
                        <Link className='text-dec' to="../buildersummary/"><MenuItem className='sidebar_tab'>Summary</MenuItem></Link>
                            <Link className='text-dec' to={"../viewsalesleads/"}><MenuItem className="sidebar_tab">Sales/ Leads </MenuItem></Link>
                            <Link className='text-dec' to={"../viewbusinessfinances/"}><MenuItem className="sidebar_tab">Business Finances </MenuItem></Link>
                            <Link className='text-dec' to={"../subcontractor/"}><MenuItem className="sidebar_tab">Sub Contractors </MenuItem></Link>
                            <Link className='text-dec' to={"../manageteam/"}><MenuItem className="sidebar_tab">Manage Team </MenuItem></Link>
                            <Link className='text-dec' to={"#"}><MenuItem className="sidebar_tab">Insights </MenuItem></Link>
                            <Link className='text-dec' to={"/calender"}><MenuItem className="sidebar_tab">Calendar </MenuItem></Link>
                        </SubMenu >
                        <SubMenu label="Project Managment" className='react-side-menu sidebar_tab' >
                        <Link className="text-dec" to={"#"}><MenuItem className="sidebar_tab">Summary</MenuItem></Link>
                            <Link className="text-dec" to={"#"}><MenuItem className="sidebar_tab">Task</MenuItem></Link>
                            <Link className="text-dec" to={"#"}><MenuItem className="sidebar_tab">Schedule</MenuItem></Link>
                            <Link className="text-dec" to={"../projectmanagement/"}><MenuItem className="sidebar_tab">Progression Notes</MenuItem></Link>
                            <Link className="text-dec" to={"#"}><MenuItem className="sidebar_tab">Purchase Order</MenuItem></Link>
                            <Link className="text-dec" to={""}><MenuItem className="sidebar_tab">Change Orders</MenuItem></Link>
                            <Link className="text-dec" to={"../specificationdetail/"}><MenuItem className="sidebar_tab">Specifications</MenuItem></Link>
                            <Link className="text-dec" to={"#"}><MenuItem className="sidebar_tab">Selections</MenuItem></Link>
                        </SubMenu >
                        
                        <SubMenu label="Bids" className='react-side-menu sidebar_tab' >
                        <Link className="text-dec" to="../builderaddbid/"><MenuItem className="sidebar_tab">Create Bid</MenuItem></Link>
                        <Link className="text-dec" to="#"><MenuItem className="sidebar_tab">View Bid</MenuItem></Link>
                       
                        </SubMenu >
                        <SubMenu label="Finance" className='react-side-menu sidebar_tab' >
                            <Link className="text-dec" to="#"><MenuItem className="sidebar_tab">Estimate & Budget</MenuItem></Link>
                            <Link className="text-dec" to="#"><MenuItem className="sidebar_tab">Cost and Performance</MenuItem></Link>
                            <Link className="text-dec" to="#"><MenuItem className="sidebar_tab">Payables</MenuItem></Link>
                            <Link className="text-dec" to="#"><MenuItem className="sidebar_tab">Recievables</MenuItem></Link>
                            <Link className="text-dec" to="#"><MenuItem className="sidebar_tab">Reports</MenuItem></Link>
                        </SubMenu >
                        <SubMenu label="Tools" className='react-side-menu sidebar_tab' >
                            <Link className="text-dec" to="#"><MenuItem className="sidebar_tab" menu>Take Off</MenuItem></Link>
                            <Link className="text-dec" to="#"><MenuItem className="sidebar_tab">Inspiration Page</MenuItem></Link>
                        </SubMenu >
                        <SubMenu label="Files" className='react-side-menu sidebar_tab' >
                            <Link className="text-dec" to="#"><MenuItem className="sidebar_tab">Document</MenuItem></Link>
                            <Link className="text-dec" to="#"><MenuItem className="sidebar_tab">Photos/Videos</MenuItem></Link>
                        </SubMenu >
                        
                        {/* <MenuItem label="Chat" className='react-side-menu' >
                        </MenuItem > */}
                    </Menu>
                </Sidebar>
                </div>


                {/* Main content */}
                <div className="flex-1 w-100">
                    {/* Toolbar */}
                    <div id="kt_app_toolbar" className="app-toolbar pt-6 pb-15">
                        <div id="kt_app_toolbar_container" className="app-container container-xxl d-flex align-items-start">
                            <div className="d-flex flex-column flex-row-fluid">
                                <div className="d-flex align-items-center pt-2">
                                    <ul className="breadcrumb breadcrumb-separatorless fw-semibold">
                                        <li className="breadcrumb-item text-white fw-bold lh-1">
                                            <Link to={accountType == "OWNER" ? `../ownerdashboard/` : accountType == "BUILDER" ? '../builderdashboard/' : '../subcontractordashboard/'} style={{ color: '#5E6278' }}>
                                                <i className="ki-outline ki-home text-gray-700 fs-6"></i>
                                            </Link>
                                        </li>
                                        <li className="breadcrumb-item" style={{ color: '#5E6278' }}>
                                            <i className="ki-outline ki-right fs-7 text-gray-700 mx-n1"></i>
                                        </li>
                                        <li className="breadcrumb-item fw-bold fs-4 lh-1" style={{ color: 'white' }}>{activePage} </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main content */}
                    <div className="app-container container-xxl">
                        <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
                            {/* Content */}
                            {data}
                        </div>
                        {/* Footer */}
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;
