import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import Layout from "../../components/layout";
import React, { useState, useEffect } from "react";

import Cookies from "js-cookie";
import Router from "next/router";

export default function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin(e){
        e.preventDefault();
        axios.post("http://localhost:3000/api/auth",
        {
            email: email, password: password
        }).then((res) => {
            console.log(res);
            Cookies.set("token", "Bearer " + res.data.token);
            Cookies.set("user", JSON.stringify(res.data.data));
            Router.push('/');
        }).catch((err) => {
            alert('Wrong email and password')
        });
    }

    return(
        <Layout>
            <form class="row g-3">
                <div class="col-auto">
                    <label for="staticEmail2" class="visually-hidden">
                        Email
                    </label>
                    <input 
                        type="email" 
                        readonly 
                        class="form-control" 
                        id="staticEmail2" 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div class="col-auto">
                    <label for="inputPassword2" class="visually-hidden">
                        Password
                    </label>
                    <input 
                        type="password" 
                        class="form-control" 
                        id="inputPassword2" 
                        placeholder="Password" 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3" onClick={handleLogin}>
                        Login
                    </button>
                </div>
            </form>
        </Layout>
    );
}