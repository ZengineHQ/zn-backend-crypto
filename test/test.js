'use strict';

const znCrypto = require('../index');

const encrypt = znCrypto.encrypt;

const decrypt = znCrypto.decrypt;

describe('module', function() {

	it('should encrypt and decrypt', function() {

		const key = 'abcd123456';

		const key2 = 'xyz987654';

		const str = 'my encrypted phrase';

		const str2 = 'my api secret key';

		const encrypted = encrypt(key, str);

		const encrypted2 = encrypt(key, str2);

		const encrypted3 = encrypt(key2, str);

		const decrypted = decrypt(key, encrypted);

		const decrypted2 = decrypt(key, encrypted2);

		const decrypted3 = decrypt(key2, encrypted3);

		// Original Phrase, Original Key
		expect(decrypted).to.equal(str);

		// New Phrase, Original Key
		expect(decrypted2).to.equal(str2);

		// Original Phrase, New Key
		expect(decrypted3).to.equal(str);

		// Different Phrase
		expect(encrypted).not.to.equal(encrypted2);

		// Different Key
		expect(encrypted).not.to.equal(encrypted3);

	});

	it('should not produce the same encrypted value twice', function() {

		const key = 'abcd123456';

		const str = 'my encrypted phrase';

		const encrypted = encrypt(key, str);

		const encrypted2 = encrypt(key, str);

		// Unique Encrypted Value
		expect(encrypted).not.to.equal(encrypted2);

		const decrypted = decrypt(key, encrypted);

		const decrypted2 = decrypt(key, encrypted2);

		// Same Decrypted Value
		expect(decrypted).to.equal(str);

		// Same Decrypted Value
		expect(decrypted2).to.equal(str);

	});

});