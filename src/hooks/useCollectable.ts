import useSWR from 'swr';

import { fetcher } from '../utils';
import { Collectable } from '../types';

const useCollectable = ({
  address,
  tokenId,
}: {
  address?: string;
  tokenId?: string;
}): {
  collectable?: Collectable;
  loading: boolean;
  error?: Error;
} => {
  const { data, error } = useSWR<Collectable, Error>(
    address && tokenId
      ? `https://api.opensea.io/api/v1/asset/${address}/${tokenId}?format=json`
      : null,
    fetcher
  );

  return {
    collectable: data,
    loading: !data,
    error,
  };
};

export { useCollectable };
