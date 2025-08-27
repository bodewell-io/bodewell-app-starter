import React, { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
// Correct the import to pull from our UI library
import { type ColDef } from '@bodewell/ui';

// Import AG Grid styles and the enterprise package directly
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import 'ag-grid-enterprise';

// Simple mock data for the test
const testData = [
  { group: 'A', value: 1 },
  { group: 'A', value: 2 },
  { group: 'B', value: 3 },
  { group: 'B', value: 4 },
];

const DirectAgGridTestPage: React.FC = () => {
  // Simple column definitions to test grouping
  const columnDefs = useMemo<ColDef[]>(() => [
    { field: 'group', rowGroup: true, hide: true },
    { field: 'value', headerName: 'Value' },
  ], []);

  return (
    <div className="space-y-6">
      <div className="p-4 bg-card rounded-lg">
        <h1 className="text-2xl font-bold">Direct AG Grid Enterprise Test</h1>
        <p className="text-muted-foreground mt-2">
          This page bypasses our custom DataTable component and uses AgGridReact directly. If the data below is grouped by "A" and "B", then the AG Grid Enterprise package itself is working correctly.
        </p>
      </div>

      <div className="ag-theme-quartz" style={{ height: '400px', width: '100%' }}>
        <AgGridReact
          rowData={testData}
          columnDefs={columnDefs}
          groupDefaultExpanded={-1}
        />
      </div>
    </div>
  );
};

export default DirectAgGridTestPage;