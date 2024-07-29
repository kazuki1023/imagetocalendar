const getBaseUrl = () => {
  const env = process.env.NEXT_PUBLIC_VERCEL_BUILD_ENV;
  console.log("env", env);

  switch (env) {
    case "production":
      return "https://imagetocalendar-eta.vercel.app";
    case "development":
      return "http://localhost:3000";
    default:
      return "http://localhost:3000";
  }
};

export default getBaseUrl;
