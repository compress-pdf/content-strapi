/**
 * calculator-content controller
 */
"use strict";
import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::calculator-content.calculator-content"
);
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::calculator-content.calculator-content",
  ({ strapi }) => ({
    async publish(ctx) {
      try {
        const { id } = ctx.params;
        const result = await strapi
          .service("api::calculator-content.calculator-content")
          .publishDocument(id);
        ctx.send(result);
      } catch (err) {
        ctx.throw(500, err);
      }
    },

    async unpublish(ctx) {
      try {
        console.log("hello hello hello");
        const { id } = ctx.params;
        const result = await strapi
          .service("api::calculator-content.calculator-content")
          .unpublishDocument(id);
        ctx.send(result);
      } catch (err) {
        ctx.throw(500, err);
      }
    },

    async discard(ctx) {
      try {
        const { id } = ctx.params;
        const result = await strapi
          .service("api::calculator-content.calculator-content")
          .discardDraftDocument(id);
        ctx.send(result);
      } catch (err) {
        ctx.throw(500, err);
      }
    },
  })
);
