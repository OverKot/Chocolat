export default (client, message) => client.emit("commandMessage", message);