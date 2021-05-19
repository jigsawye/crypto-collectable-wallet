const fetcher = <T>(url: string): Promise<T> =>
  fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error('Something went wrong!');
    }

    return res.json();
  });

export { fetcher };
