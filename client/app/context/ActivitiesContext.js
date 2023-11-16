"use client";
import React, { createContext, useState, useContext, useEffect } from 'react';

const ActivityContext = createContext();

export const useUserContext = () => {
  const context = useContext(ActivityContext);
  if (!context) {
    throw new Error(`ActivityContext provider is not found`);
  }
  return context;
};


export const ActivityContextProvider = ({ children }) => {

    const [ contextActivity, setContextActivity ] = useState({});

    const getData = async () => {
        try {
            const response = await fetch('/api/getdata');
            const res = await response.json();
            const resData = res.data;
            setContextActivity(resData)
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <ActivityContext.Provider
            value={{
                contextActivity,
                //setContextActivity,
            }}
        >
            {children}
        </ActivityContext.Provider>
    );

};

export default ActivityContext;