const bcrypt = require('bcrypt');
const hashPassword = async (pw) => {
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(pw, salt);
    //OR
    const autoSaltHash = await bcrypt.hash(pw, 12);
}
const login = async (pw, hashedPw) => {
    const res = await bcrypt.compare(pw, hashedPw);
}

// hashPassword('monkey');
login('monkey', '$2b$12$PbKJ1K2A21K4Bfa32CQMe.tCcT5enVRfDxx1a9S3lBSyVEFPNmTa');