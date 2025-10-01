require('dotenv').config();
const http = require('http');                     //cria um servidor HTTP
const express = require('express');               //framework web para Node.js, para gerenciar rotas e requisições
const { Server } = require("socket.io");          //importa a classe server do socket.io

const app = express();
app.use(express.json());                          // Aceita JSON no corpo das requisições

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

// listeners do socket.io
io.on('connection', (socket) => {
    console.log('Um usuário se conectou:', socket.id);

    // Exemplo de listener que será implementado no controller
    // socket.on('getTopicInfo', (topic) => { ... });

    socket.on('disconnect', () => {
        console.log('Usuário desconectado:', socket.id);
    });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});