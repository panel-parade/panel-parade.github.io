exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { id, status } = JSON.parse(event.body || "{}");

    if (!id || !status) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing id or status" })
      };
    }

    const { blobs } = require("@netlify/blobs");
    const store = blobs({ name: "submissions" });

    // Load the existing submission
    const data = await store.getJSON(id);

    if (!data) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "Submission not found" })
      };
    }

    // Update status
    data.status = status;
    data.moderatedAt = Date.now();

    // Save updated submission
    await store.setJSON(id, data);

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true })
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
