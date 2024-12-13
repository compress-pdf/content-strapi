// src/api/post/routes/post-actions.js
module.exports = {
  routes: [
    {
      method: "POST",
      path: "/calculator-contents/:id/publish",
      handler: "calculator-content.publish",
      config: {
        auth: {
          strategies: ["api-token"],
        },
      },
    },
    {
      method: "POST",
      path: "/calculator-contents/:id/unpublish",
      handler: "calculator-content.unpublish",
      config: {
        auth: {
          strategies: ["api-token"],
        },
      },
    },
    {
      method: "DELETE",
      path: "/calculator-contents/:id/discard",
      handler: "calculator-content.discard",
      config: {
        auth: {
          strategies: ["api-token"],
        },
      },
    },
  ],
};
