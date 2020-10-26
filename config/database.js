module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: "ec2-54-246-87-132.eu-west-1.compute.amazonaws.com",
        database: "da6uisp1rras4t",
        username: "vypfqrngmolare",
        password: "4b4dd3c72158729fdf651142367e70def451c0a64e41ac0370cd221e2a8808c1",
        ssl: { rejectUnauthorized: false },
      },
      options: {},
    },
  },
});
