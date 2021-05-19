import { useCallback } from 'react';
import { useSWRInfinite } from 'swr';

import { API_ENDPOINT, PAGE_SIZE } from '../constants';
import { fetcher } from '../utils';
import { Collectable } from '../types';

import { useAccountContext } from './useAccountContext';

const useCollectables = (): {
  collectables: Collectable[];
  loading: boolean;
  error?: Error;
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
  }, fetcher);

  const collectables = data
    ? data.reduce<Collectable[]>((acc, curr) => [...acc, ...curr.assets], [])
    : [];

  const loadingInitialData = !data && !error;
  const loading =
    (loadingInitialData ||
      // If we switch to next page but the data is undefined
      (size > 0 && data && typeof data[size - 1] === 'undefined')) ??
    false;
  // data length of first page is 0
  const empty = data?.[0]?.assets.length === 0;
  const reachingEnd =
    (empty ||
      // The data length of last page is small than page size
      (data && data[data.length - 1]?.assets.length < PAGE_SIZE)) ??
    false;

  const loadMore = useCallback(
    () => setSize((prevSize) => prevSize + 1),
    [setSize]
  );

  return {
    collectables,
    loading,
    error,
    loadMore,
    empty,
    reachingEnd,
  };
};

export { useCollectables };
