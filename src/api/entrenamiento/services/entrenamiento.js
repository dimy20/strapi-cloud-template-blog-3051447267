'use strict';

/**
 * entrenamiento service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::entrenamiento.entrenamiento');
