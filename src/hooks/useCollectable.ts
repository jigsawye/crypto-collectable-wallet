import useSWR from 'swr';
import { Collectable } from '../types';

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error('Something went wrong!');
    }

    return res.json();
  });

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
