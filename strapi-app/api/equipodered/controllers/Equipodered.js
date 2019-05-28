'use strict';

/**
 * Equipodered.js controller
 *
 * @description: A set of functions called "actions" for managing `Equipodered`.
 */

module.exports = {

  /**
   * Retrieve equipodered records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.equipodered.search(ctx.query);
    } else {
      return strapi.services.equipodered.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a equipodered record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.equipodered.fetch(ctx.params);
  },

  /**
   * Count equipodered records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.equipodered.count(ctx.query);
  },

  /**
   * Create a/an equipodered record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.equipodered.add(ctx.request.body);
  },

  /**
   * Update a/an equipodered record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.equipodered.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an equipodered record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.equipodered.remove(ctx.params);
  }
};
