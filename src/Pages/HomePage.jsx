import React from 'react'
import {
    Routes,
    Route,
    Link,
    useNavigate,
    useLocation,
    Navigate,
    Outlet
  } from "react-router-dom";

export default function HomePage() {

    let auth = useAuth();
    let navigate = useNavigate();

    if (!auth.user) {
        return <p>You are not logged in.</p>;
    }

    return (
    <p>
        Welcome {auth.user}!{" "}
    <button
        onClick={() => {
            auth.signout(() => navigate("/"));
        }}>
    Sign out
    </button>
    </p>
  );
}
