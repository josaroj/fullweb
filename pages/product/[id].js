import axios from "axios"
import Layout from "../../components/layout"

import cookie from 'cookie';
import { checkLogin } from "../../lib/auth";

export default function ProductPage({data}) {
    return (
        <Layout>
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={data.image} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{data.title}</h5>
                            <p class="card-text">{data.description}</p>
                            <p class="card-text"><small class="text-muted">${data.price}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context){
    const {req} = context

    // const {token, user} = cookie.parse(context.req.headers.cookie)

    if(!req.headers.cookie){
        const {res} = context;
        res.writeHead(301, {Location: "/login"});
        res.end();
        return true;
    }else{
        const {token} = cookie.parse(req.headers.cookie);
        const profile = await checkLogin(token);

        if(!profile){
            const {res} = context;
            res.writeHead(301, {Location: "/login"});
            res.end();
            return true;
        }
    }

    const res = await axios.get('https://fakestoreapi.com/products/' + context.params.id)
    const data = res.data
    return {
        props: {
            data
        }
    }
}