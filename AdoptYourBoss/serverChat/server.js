 // PARTIE CHAT //
    
 const server = require("http").createServer();
 const io = require("socket.io")(server, {
   cors: {
     origin: "*",
   },
 });
 
 const PORTCHAT = 4000;
 const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";
 
 io.on("connection", (socket) => {
   
   // Join a conversation
   const { roomId } = socket.handshake.query;
   socket.join(roomId);
 
   // Listen for new messages
   socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
     io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data);
   });
 
   // Leave the room if the user closes the socket
   socket.on("disconnect", () => {
     socket.leave(roomId);
   });
 });
 
 server.listen(PORTCHAT, () => {
   console.log(`Listening on port ${PORTCHAT}`);
 });
 
// FIN PARTIE CHAT //