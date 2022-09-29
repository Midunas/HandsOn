import config from 'config';

const { serverAddress } = config;
const collectionName = 'marketingInterests';

const fetchMany = async (): Promise<Category[]> => {
  const response = await fetch(`${serverAddress}/${collectionName}`);
  const fetchedMarketingInterests = await response.json();

  return fetchedMarketingInterests as MarketingInterest[];
};

const MarketingInterestsService = {
  fetchMany,
};

export default MarketingInterestsService;
