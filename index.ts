Bun.serve({
  fetch(req, server) {}, // upgrade logic
  websocket: {
    message(ws, message) {
      console.log("Received message:", message);
      ws.send(message); // echo back the message
    },
  },
});