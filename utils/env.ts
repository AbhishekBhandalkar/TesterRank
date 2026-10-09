const email = process.env.TEST_USERNAME;
const password = process.env.TEST_PASSWORD;

if (!email || !password) {
    throw new Error(
        'Missing TEST_USERNAME or TEST_PASSWORD in environment configuration'
    );
}

export const env = {
    email,
    password,
};