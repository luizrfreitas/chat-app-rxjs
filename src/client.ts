import { webSocket } from "rxjs/webSocket";

type ChatMessage = {
    user: string;
    message: string;
};

const chatSocket$ = webSocket<ChatMessage>("ws://localhost:8080");

chatSocket$.next({ user: "Alice", message: "Hello, world!" });

chatSocket$.subscribe({
    next: (msg) => console.log("Received:", msg),
    error: (err) => console.error("WebSocket error:", err),
    complete: () => console.log("WebSocket closed"),
});
