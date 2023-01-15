'use strict';

/**
 * maid service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::maid.maid');
