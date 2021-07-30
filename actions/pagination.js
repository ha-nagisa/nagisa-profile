import { useSWRInfinite } from "swr";
import { getArticle } from "actions";

export const useGetBlogsPages = ({ filter }) => {
  const result = useSWRInfinite((index, previousPageData) => {
    if (index === 0) {
      return `/api/blogs?date=${filter.date.asc ? "asc" : "desc"}`;
    }

    if (!previousPageData.length) {
      return null;
    }

    return `/api/blogs?offset=${index * 6}&date=${filter.date.asc ? "asc" : "desc"}`;
  }, getArticle);

  const { data, error, size, isValidating } = result;
  const isLoadingInitialData = !data && !error;
  const isLoadingMore = isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < 6);
  const isRefreshing = isValidating && data && data.length === size;

  return { ...result, isLoadingInitialData, isLoadingMore, isEmpty, isReachingEnd, isRefreshing };
};

export const useGetWorksPages = ({ filter }) => {
  const result = useSWRInfinite((index, previousPageData) => {
    if (index === 0) {
      return `/api/works?date=${filter.date.asc ? "asc" : "desc"}`;
    }

    if (!previousPageData.length) {
      return null;
    }

    return `/api/works?offset=${index * 6}&date=${filter.date.asc ? "asc" : "desc"}`;
  }, getArticle);

  const { data, error, size, isValidating } = result;
  const isLoadingInitialData = !data && !error;
  const isLoadingMore = isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < 6);
  const isRefreshing = isValidating && data && data.length === size;

  return { ...result, isLoadingInitialData, isLoadingMore, isEmpty, isReachingEnd, isRefreshing };
};
