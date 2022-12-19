import React from "react";
import { Route, Navigate } from "react-router-dom";

import Users from "./layouts/users";
import UserPage from "./components/page/userPage";
import Login from "./layouts/login";
import Main from "./layouts/main";
import NavBar from "./components/ui/navBar";
import { Routes } from "react-router-dom";
import RegisterForm from "./components/ui/registerForm";
import EditUserPage from "./components/page/editUserPage/EditUserPage";
import { ToastContainer } from "react-toastify";
import UserProvider from "./hooks/useUsers";
import { ProfessionProvider } from "./hooks/useProfession";
import { QualitiesProvider } from "./hooks/useQualities";

function App() {
    return (
        <div>
            <NavBar />
            <QualitiesProvider>
                <ProfessionProvider>
                    <UserProvider>
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="/login" element={<Login />}>
                                <Route
                                    path=":type"
                                    element={<RegisterForm />}
                                />
                            </Route>
                            <Route path="/users">
                                <Route index element={<Users />} />
                                <Route path=":userID">
                                    <Route index element={<UserPage />} />
                                    <Route
                                        path="edit"
                                        element={<EditUserPage />}
                                    />
                                </Route>
                            </Route>
                            
                            <Route
                                path="*"
                                element={<Navigate to={"/"} replace />}
                            />
                        </Routes>
                    </UserProvider>
                </ProfessionProvider>
            </QualitiesProvider>
            <ToastContainer />
        </div>
    );
}

export default App;
