import { useCallback } from 'react';
import { useSWRInfinite } from 'swr';
import { Collectable } from '../types';

const PAGE_SIZE = 20;
const OWNER = '0x960DE9907A2e2f5363646d48D7FB675Cd2892e91';

const useCollectables = (): {
  collectables: Collectable[];
  loading: boolean;
  loadMore: () => void;
  empty: boolean;
  reachingEnd: boolean;
} => {
  const { data, error, size, setSize } = useSWRInfinite<{
    assets: Collectable[];
  }>((pageIndex, previousPageData) => {
    if (previousPageData && previousPageData.assets.length === 0) {
      return null;
    }

    return `https://api.opensea.io/api/v1/assets?format=json&limit=${PAGE_SIZE}&owner=${OWNER}&offset=${
      pageIndex * PAGE_SIZE
    }`;
  });

  const collectables = data
    ? data.reduce<Collectable[]>((acc, curr) => [...acc, ...curr.assets], [])
    : [];

  const loadingInitialData = !data && !error;
  const loading =
    (loadingInitialData ||
      (size > 0 && data && typeof data[size - 1] === 'undefined')) ??
    false;
  const empty = data?.[0]?.assets.length === 0;
  const reachingEnd =
    (empty || (data && data[data.length - 1]?.assets.length < PAGE_SIZE)) ??
    false;

  const loadMore = useCallback(
    () => setSize((prevSize) => prevSize + 1),
    [setSize]
  );

  return { collectables, loading, loadMore, empty, reachingEnd };
};

export { useCollectables };
