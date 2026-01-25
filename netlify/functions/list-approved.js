exports.handler = async () => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "list-approved.js is wired up",
        approved: []
      })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
