module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        uri: "mongodb+srv://Betik2Database:Btkblg2020@cluster0.c6vfg.mongodb.net/Betik2?retryWrites=true&w=majority",
        database: "Betik2",
      },
      options: {
        ssl: true,
      },
    },
  },
});
