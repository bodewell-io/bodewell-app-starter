import React, { useMemo } from 'react';
import { DataTable, type ColDef } from '@bodewell/ui';

// Simple mock data for the test
const testData = [
  { group: 'A', value: 1 },
  { group: 'A', value: 2 },
  { group: 'B', value: 3 },
  { group: 'B', value: 4 },
];

const EnterpriseTestPage: React.FC = () => {
  // Simple column definitions
  const columnDefs = useMemo<ColDef[]>(() => [
    { field: 'group', rowGroup: true, hide: true }, // Group by this column
    { field: 'value', headerName: 'Value' },
  ], []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">AG Grid Enterprise Test</h1>
      <p className="mb-4">If you see the data below grouped by "A" and "B", the enterprise features are working correctly.</p>
      <DataTable
        rowData={testData}
        columnDefs={columnDefs}
        height="400px"
        groupDefaultExpanded={-1}
      />
    </div>
  );
};

export default EnterpriseTestPage;