exports.handler = async () => {
  try {
    const { blobs } = require("@netlify/blobs");
    const store = blobs({ name: "submissions" });

    // Get all stored submission keys
    const keys = await store.list();
    const submissions = [];

    // Load each submission JSON
    for (const key of keys.blobs) {
      const data = await store.getJSON(key);

      // Attach the ID so the dashboard can reference it
      submissions.push({
        id: key,
        ...data
      });
    }

    return {
      statusCode: 200,
      body: JSON.stringify(submissions)
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
