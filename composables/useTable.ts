import type { sortObject } from '@/types/interfaces';

export default function useTable () {
    const tableState = reactive<sortObject>({
        ascending: true,
        column: 'firstname'
    });

    const tableData = reactive([]);

    const sortedData = computed<Record<string, unknown>[]>(() => {
        if (!tableData.length) {
            return [];
        }

        return tableData.sort((a, b) => {
            const modifier = tableState.ascending ? 1 : -1;
            if (a[tableState.column] < b[tableState.column]) { return -1 * modifier; }
            if (a[tableState.column] > b[tableState.column]) { return 1 * modifier; }
            return 0;
        });
    });

    const sort = (column: string) => {
        if (column !== tableState.column) {
            tableState.column = column;
            tableState.ascending = true;
        } else {
            tableState.ascending = !tableState.ascending;
        }
    };

    const set = (data: Record<string, unknown>[]) => {
        tableData.length = 0;
        tableData.push(...data);
    };

    return {
        tableState,
        set,
        sort,
        sortedData
    };
}
