exports.handler = async () => {
  try {
    const { getStore } = require("@netlify/blobs");
    const store = getStore("submissions");

    // Get all stored submission keys
    const keys = await store.list();
    const submissions = [];

    // Load each submission JSON
    for (const key of keys.blobs) {
      const data = await store.getJSON(key);

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
