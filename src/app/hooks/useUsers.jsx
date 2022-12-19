import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import userService from '../services/user.service';

const UserContext = React.createContext();

export const useUser = () => {
    return useContext(UserContext)
}

const UserProvider = ({ children }) => {
    const [users, setUsers] = useState();
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getUsers();
    }, []);

    useEffect(() => {
        if (error !== null) {
            toast(error)
            setError(null);
        }
    }, [error]);


    function errorCatcher(error) {
        console.log(error);
        const { message } = error.response.data;
        setError(message);
        setLoading(false);
    }

    async function getUsers() {
        try {
            const { content } = await userService.get();
            setUsers(content);
            setLoading(false);
        } catch (error) {
            errorCatcher(error);
        }
    }

    return (
        <UserContext.Provider value={{ users }}>
            {!isLoading ? children : "Loading..."}
        </UserContext.Provider>
    )
}

export default UserProvider;
