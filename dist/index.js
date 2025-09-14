// index.ts
Bun.serve({
  fetch(req, server) {},
  websocket: {
    message(ws, message) {
      console.log("Received message:", message);
      ws.send(message);
    }
  }
});
