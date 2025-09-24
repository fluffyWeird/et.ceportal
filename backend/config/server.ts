module.exports = ({ env }) => ({
  host: "0.0.0.0",
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  url: env("PUBLIC_URL", "http://localhost:1337"), // optional
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET"),
    },
  },
  // Add allowedHosts
  allowedHosts: ["nival-phylogenetic-jeffie.ngrok-free.dev"], // <-- your ngrok URL here
});
