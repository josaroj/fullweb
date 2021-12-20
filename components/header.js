import Head from 'next/head';
import Link from 'next/link';
import {useRouter} from "next/router";
import styles from './header.module.css';

import { useEffect, useState } from 'react';
import { checkLogin } from '../lib/auth';
import Cookies from 'js-cookie';

export default function Header() {
    const router = useRouter();
    const [profile, setProfile] = useState(false);

    useEffect(async () => {
        const token = Cookies.get('token');
        if(token) setProfile(await checkLogin(token))
    }, []);

    async function handleLogout(e){
        e.preventDefault();
        Cookies.remove('token');
        Cookies.remove('user');
        router.push('/');
    }

    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Mystore
                </a>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul class="nav nav-pills">
                        <li class="nav-item">
                            <Link href="/">
                                <a className={router.pathname == "/" ? "nav-link active " + styles.linkactive : "nav-link"} aria-current="page">
                                    Home
                                </a>
                            </Link>
                        </li>
                        {
                            profile ? 
                            <li class="nav-item">
                            <Link href={"/cart/user/" + profile.id}>
                                <a className={router.pathname == "/cart/user/[userid]" ? "nav-link active " + styles.linkactive : "nav-link"}>
                                    Cart
                                </a>
                            </Link>
                            </li>
                            :
                            ''
                        }
                        
                        <li class="nav-item">
                            <Link href="/about">
                                <a className={router.pathname == "/about" ? "nav-link active " + styles.linkactive : "nav-link"}>About</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            {profile ? (
                <form class="d-flex">
                    <button 
                        class="btn btn-outline-success" 
                        type="submit" 
                        onClick={handleLogout}
                        >
                          Logout
                    </button>
              </form>
            ) : (
                <Link href="/login">
                    <a className="nav-link">Login</a>
                </Link>
            )}
        </nav>
    
}