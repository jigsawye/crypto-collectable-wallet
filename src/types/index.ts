/* eslint-disable camelcase */
export type Collectable = {
  id: number;
  token_id: string;
  description: string;
  image_url: string;
  name: string;
  collection: {
    name: string;
  };
  permalink: string;
  asset_contract: {
    address: string;
  };
};
