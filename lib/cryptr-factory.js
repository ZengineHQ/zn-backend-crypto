'use strict';

const Cryptr = require('cryptr');

/**
 * Instantiate Cryptr
 *
 * @param	{String}	cipherKey
 * @return	{Object}	Instance of Cryptr
 */
module.exports = function(key) {

	return new Cryptr(key);

};
