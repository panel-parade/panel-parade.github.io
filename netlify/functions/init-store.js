exports.handler = async () => {
  try {
    const { getStore } = require("@netlify/blobs");
    const store = getStore({
  name: "submissions",
  siteID: process.env.NETLIFY_BLOBS_SITE_ID,
  token: process.env.NETLIFY_BLOBS_TOKEN
});

    await store.setJSON("init", { created: true });

    return {
      statusCode: 200,
      body: "Store initialized"
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: err.message
    };
  }
};
