require('dotenv').config();
const { Pool } = require('pg'); // Importa a biblioteca pg para se comunicar com o PostgreSQL


// Observação importante:
// - Se o back-end roda LOCALMENTE (fora do Docker), use host "localhost".
// - Se o back-end rodar DENTRO do mesmo docker-compose, use host "postgres" (nome do serviço).
const pool = new Pool({
    user: process.env.PGUSER || 'seu_usuario_pg',
    host: process.env.PGHOST || 'localhost',
    database: process.env.PGDATABASE || 'ia_project_db',
    password: process.env.PGPASSWORD || 'sua_senha_pg',
    port: Number(process.env.PGPORT) || 5432, // Porta padrão
});

const createTable = async () => {                       //Criar tabela caso ela nao exista
    const queryText = `
        CREATE TABLE IF NOT EXISTS topics (        
         id primary key,
         title VARCHAR (255) UNIQUE NOT NULL,
         description TEXT NOT NULL
        );
    `;
    await pool.query(queryText); 
};

createTable();  

    const createTopic = async (title, description) => {
        const res = await pool.query('INSERT INTO potics (title, description) ')
    }





module.exports = pool;