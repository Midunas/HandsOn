const serverAddress = process.env.REACT_APP_SERVER_API_ADDRESS;

const config = {
  serverAddress,
};

export const checkConfig = () => {
  if (serverAddress === undefined) {
    throw new Error('Please define constants in .env file');
  }
};

export default config;
