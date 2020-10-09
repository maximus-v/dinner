module.exports = {
  // inspired by https://cli.vuejs.org/guide/deployment.html#gitlab-pages
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/" + process.env.CI_PROJECT_NAME + "/"
      : "/",
};
