module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: "ec2-52-208-175-161.eu-west-1.compute.amazonaws.com",
        port: "5432",
        database: "d3eq46euch719l",
        username: "osptkceaacdvoo",
        password: "4cb2144ec883f97a7c79268d8e3d082ab1ee9f7220d0c2425878c696e1935f92",
        ssl: { rejectUnauthorized: false },
      },
      options: {},
    },
  },
});
