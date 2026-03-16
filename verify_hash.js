import crypto from 'crypto';

const hashPasswordManual = (password) => {
  return crypto.createHash('sha256').update(password).digest('hex');
};

const passwords = ['testeoapli#1999', 'admin', 'admin123', 'admin1234', '123456', 'password'];
const expectedHash = '984b648316df080753086eb01e6a256976a47012678822f36070622416805164';

passwords.forEach(password => {
  const actualHash = hashPasswordManual(password);
  console.log(`Password: ${password.padEnd(15)} | Match: ${actualHash === expectedHash}`);
  if (actualHash === expectedHash) {
    console.log(`MATCH FOUND: ${password}`);
  }
});
