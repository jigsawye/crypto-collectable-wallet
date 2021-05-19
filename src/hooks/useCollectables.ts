import { useCallback } from 'react';
import { useSWRInfinite } from 'swr';

import { API_ENDPOINT, PAGE_SIZE } from '../constants';
import { Collectable } from '../types';

import { useAccountContext } from './useAccountContext';

const useCollectables = (): {
  collectables: Collectable[];
  loading: boolean;
  loadMore: () => void;
  empty: boolean;
  reachingEnd: boolean;
} => {
  const account = useAccountContext();

  const { data, error, size, setSize } = useSWRInfinite<{
    assets: Collectable[];
  }>((pageIndex, previousPageData) => {
    if (previousPageData && previousPageData.assets.length === 0) {
      return null;
    }

    return `${API_ENDPOINT}/assets?format=json&limit=${PAGE_SIZE}&owner=${account}&offset=${
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
