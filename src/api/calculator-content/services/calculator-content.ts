/**
 * calculator-content service
 */
"use strict";
import { factories } from "@strapi/strapi";

export default factories.createCoreService(
  "api::calculator-content.calculator-content"
);

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  "api::calculator-content.calculator-content",
  ({ strapi }) => ({
    async publishDocument(id) {
      return await strapi
        .documents("api::calculator-content.calculator-content")
        .publish({ documentId: id });
    },
  })
);

module.exports = createCoreService(
  "api::calculator-content.calculator-content",
  ({ strapi }) => ({
    // Extend core service with custom document management functions

    async publishDocument(id) {
      return await strapi
        .documents("api::calculator-content.calculator-content")
        .publish({
          documentId: id,
        });
    },

    async unpublishDocument(id) {
      return await strapi
        .documents("api::calculator-content.calculator-content")
        .unpublish({
          documentId: id,
        });
    },

    async discardDraftDocument(id) {
      return await strapi
        .documents("api::calculator-content.calculator-content")
        .discardDraft({
          documentId: id,
        });
    },
  })
);
