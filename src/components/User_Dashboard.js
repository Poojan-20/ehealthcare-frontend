import React, { useState, useEffect } from 'react'
import { db } from '../firebase.mjs';
import { useAuth } from "../context/AuthContext";
import CartuserAccount from './CartuserAccount';
import UserCompleteProfile from './UserCompleteProfile';
import CartNavbar from './CartNavbar';

const User_Dashboard = () => {
    const { currentUser } = useAuth();
    const [shopUsers, setshopUsers] = useState([]);

    // FETCHING PATIENT'S DATA FROM DB
    useEffect(() => {
        db.collection("shopUsers").onSnapshot((snapshot) => {
            setshopUsers(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);

    return (
        <>
            {shopUsers.map((user) => {
                if (user.uid === currentUser.uid) {
                    if (user.isVerified === "false")
                        return <UserCompleteProfile uid={currentUser.uid} />;
                    else if (user.isVerified === "true")
                        return <>
                            <CartuserAccount uid={currentUser.uid} />
                        </>
                }
            })}
        </>
    );
}

export default User_Dashboard