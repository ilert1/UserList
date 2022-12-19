import React, { useContext } from "react"
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import qualitiesService from "../services/qualities.service";

const QualitiesContext = React.createContext();

export const useQualities = () => {
    return useContext(QualitiesContext);
}

export const QualitiesProvider = ({ children }) => {
    const [qualities, setQualities] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getQualities();
    }, [])


    useEffect(() => {
        if (error !== null) {
            toast(error)
            setError(null);
        }
    }, [error]);

    async function getQualities() {
        try {
            const { content } = await qualitiesService.fetchAll();
            setQualities(content);
            setLoading(false);
        } catch (error) {
            errorCatcher(error);
        }
    }

    function getQualityById(id) {
        return qualities.find((q) => q._id === id);
    }

    function errorCatcher(error) {
        console.log(error);
        const { message } = error.response.data;
        setError(message);
        setLoading(false);
    }

    return (
        <QualitiesContext.Provider value={{ qualities, isLoading, getQualityById }}>
            {children}
        </QualitiesContext.Provider>
    )
}


