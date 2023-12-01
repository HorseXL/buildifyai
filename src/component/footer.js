import React from 'react'

import { Link } from "react-router-dom";



export default function Login() {
    // document.title = 'Buildify AI | Login'
    return (
        <>
            {/* <!--begin::Footer--> */}
            <div id="kt_app_footer" className="app-footer d-flex flex-column flex-md-row align-items-center flex-center flex-md-stack py-2 py-lg-4">
                {/* <!--begin::Copyright--> */}
                <div className="text-dark order-2 order-md-1">
                    <span className="text-muted fw-semibold me-1">2023&copy;</span>
                    <Link to="/" className="text-gray-800 text-hover-primary">Buildify AI</Link>
                </div>
                {/* <!--end::Copyright--> */}
            </div>
            {/* <!--end::Footer--> */}
        </>
    )
}
