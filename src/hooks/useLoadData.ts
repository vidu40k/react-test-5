import { useCallback, useRef, useState } from "react";

interface IUseLoadDataOptions<TParams> {
    limit: number;
    refetchFn: (params: TParams) => Promise<{ data?: any }>;
    getItems: (data: any) => any[];
    getRequestParams?: (offset: number, limit: number) => TParams;
}

export const useLoadData = <TItem, TParams = any>({
    limit,
    refetchFn,
    getItems,
    getRequestParams,
}: IUseLoadDataOptions<TParams>) => {
    const offsetRef = useRef(0);
    const hasMoreRef = useRef(true);
    const loadingRef = useRef(false);
    const lastRequestedOffsetRef = useRef<number | null>(null);
    const [items, setItems] = useState<TItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const buildRequestParams = useCallback((offset: number, requestLimit: number,): TParams => {
        if (getRequestParams) {
            return getRequestParams(offset, requestLimit);
        }
        return { offset, limit: requestLimit, } as unknown as TParams;
    }, [getRequestParams]);

    const loadData = useCallback(async () => {
        if (loadingRef.current) return;
        const currentOffset = offsetRef.current;
        loadingRef.current = true;
        setIsLoading(true);

        try {
            const params = buildRequestParams(currentOffset, limit);
            const { data } = await refetchFn(params);
            const newItems: TItem[] = getItems(data) ?? [];

            setItems((prev) => [...prev, ...newItems]);
            offsetRef.current += limit;
            hasMoreRef.current = newItems.length === limit;
            lastRequestedOffsetRef.current = currentOffset;
        } catch (error) {
            console.error("Error loading data:", error);
        } finally {
            setIsLoading(false);
            loadingRef.current = false;
        }
    }, [buildRequestParams, limit, refetchFn, getItems]);

    return {
        data: items,
        isLoading,
        hasMore: hasMoreRef.current,
        loadData,
    };
};
