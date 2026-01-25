exports.handler = async () => {
  try {
    // TODO: connect to R2 and list files in the "approved/" folder
    // TODO: load metadata/gallery.json and merge with filenames

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "list-approved.js is wired up and ready",
        approved: [] // will be filled with real data later
      })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
