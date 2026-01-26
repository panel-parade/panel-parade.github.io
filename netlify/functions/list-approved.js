exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed"
    };
  }

  try {
    // Parse the JSON sent from the browser
    const body = JSON.parse(event.body || "{}");

    console.log("Received submission:", body);

    return {
      statusCode: 200,
      body: JSON.stringify({
        status: "ok",
        received: body
      })
    };

  } catch (err) {
    console.error("Error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
