'use strict';

const cryptrFactory = require('./lib/cryptr-factory');

/**
 * Encrypt
 *
 * @param	{String}	cipherKey
 * @param	{String}	String to be encrypted
 */
function encrypt(key, str) {

	const cryptr = cryptrFactory(key);

	return cryptr.encrypt(str);

}

module.exports = encrypt;
