import mysql from "serverless-mysql";


export const db = mysql({
    config: {
        host: "l6glqt8gsx37y4hs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        database: "zhkcu9m0hc9kaxts",
        user: "o4df6vmumhtysfos",
        password: "vm1tosa23w74tqt4",
        port: 3306
    }
});

export async function query(query, params){
    try{
        const results = await db.query(query, params);
        await db.end();
        return {status: {code: 200, message: 'OK'}, data: results}
    }catch (e) {
        console.log(e)
        return{status: {code: 400, message: 'Bad Request'}};
    }
}