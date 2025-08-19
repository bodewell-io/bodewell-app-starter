// src/pages/DataGridPage.tsx
import React, { useState, useMemo, useCallback } from 'react';
import {
  Button,
  Card,
  DataTable,
  Input,
  PageHeader,
  useDataFetch,
  type ColDef,
  type ICellRendererParams,
  type IRowNode,
} from '@bodewell/ui';
import { mockTableData } from '../data/mockData';

// Custom Cell Renderer Example
const ElectricCarRenderer: React.FC<ICellRendererParams> = (props) => {
  return <span>{props.value ? '⚡ Electric' : '⛽ Gasoline'}</span>;
};

const DataGridPage: React.FC = () => {
  const { data: fetchedTableData, loading: tableLoading, error: tableError, fetchData } = useDataFetch(null, mockTableData);
  const [filterText, setFilterText] = useState<string>('');
  const [gridApi, setGridApi] = useState<any>(null);

  const onGridReady = useCallback((params: any) => {
    setGridApi(params.api);
  }, []);

  const onFilterTextBoxChanged = useCallback(() => {
    gridApi?.setQuickFilter(filterText);
  }, [filterText, gridApi]);

  const columnDefs: ColDef[] = useMemo(() => [
    {
      field: 'make',
      headerName: 'Manufacturer',
      sortable: true,
      filter: true,
      floatingFilter: true,
      checkboxSelection: true,
      headerCheckboxSelection: true,
      minWidth: 150,
    },
    {
      field: 'model',
      headerName: 'Model Name',
      sortable: true,
      filter: true,
      floatingFilter: true,
      minWidth: 150,
    },
    {
      field: 'price',
      headerName: 'Price ($)',
      sortable: true,
      filter: 'agNumberColumnFilter',
      floatingFilter: true,
      valueFormatter: p => '$' + p.value.toLocaleString(),
      minWidth: 120,
    },
    {
      field: 'electric',
      headerName: 'Type',
      cellRenderer: ElectricCarRenderer,
      minWidth: 120,
    },
  ], []);

  const getSelectedRows = useCallback(() => {
    const selectedNodes: IRowNode[] = gridApi?.getSelectedNodes() || [];
    const selectedData = selectedNodes.map(node => node.data);
    alert(`Selected Rows: \n${JSON.stringify(selectedData, null, 2)}`);
  }, [gridApi]);

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8">
      <PageHeader
        title="Data Grid Showcase"
        description="An advanced example of the AG Grid component with filtering and selection."
      />

      <Card className="p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
          <Input
            type="text"
            placeholder="Quick Filter (searches all columns)..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            onKeyUp={onFilterTextBoxChanged}
            className="flex-1"
          />
          <Button onClick={() => fetchData()} variant="secondary">
            Reload Data
          </Button>
          <Button onClick={getSelectedRows} variant="primary">
            Get Selected Rows
          </Button>
        </div>

        {tableLoading && <p className="text-accent">Loading...</p>}
        {tableError && <p className="text-danger">Error: {tableError}</p>}
        {fetchedTableData && (
          <DataTable
            rowData={fetchedTableData}
            columnDefs={columnDefs}
            height="500px"
            onGridReady={onGridReady}
            rowSelection="multiple"
            pagination={true}
            paginationPageSize={5}
          />
        )}
      </Card>
    </div>
  );
};

export default DataGridPage;