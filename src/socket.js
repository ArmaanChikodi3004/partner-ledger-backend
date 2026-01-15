import { Server } from "socket.io";

let io;

/**
 * Initialize Socket.IO with HTTP server
 */
export function initSocket(server) {
  io = new Server(server, {
    cors: {
      origin: "*", // allow frontend + APK
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", socket => {
    console.log("🔌 Client connected:", socket.id);

    socket.on("disconnect", () => {
      console.log("❌ Client disconnected:", socket.id);
    });
  });
}

/**
 * Emit real-time updates to all clients
 */
export function emitUpdate(event, data) {
  if (!io) {
    console.warn("⚠️ Socket.io not initialized");
    return;
  }

  io.emit(event, data);
}
