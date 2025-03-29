import WebSocket, { WebSocketServer } from "ws";

const server = new WebSocketServer({ port: 8080 });

server.on("connection", (socket: WebSocket) => {
    console.log("Client connected");

    socket.on("message", (data: string) => {
        console.log(`Received: ${data}`);

        server.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({ message: data }));
            }
        });
    });

    socket.on("close", () => console.log("Client disconnected"));
});


console.log("WebSocket server running on ws://localhost:8080");
