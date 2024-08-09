import mysql2 from "mysql2/promise"

const newConnection = async () => {
    const conection = await mysql2.createConnection({
        host: "localhost",
        user: "root",
        database: "tasks_db"      
    })
    
    return conection

}

export {
    newConnection
}