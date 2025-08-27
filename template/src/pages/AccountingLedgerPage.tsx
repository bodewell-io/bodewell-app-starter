import React, { useMemo } from 'react';
import { PageHeader, DataTable, Badge, type ColDef, type ICellRendererParams } from '@bodewell/ui';
import { mockLedgerData, type LedgerEntry } from '../data/mockLedger';

// --- Custom Renderer for Variance (No change needed) ---
const VarianceRenderer: React.FC<ICellRendererParams> = ({ value }) => {
  if (value === null || value === undefined) return null;
  const isPositive = value >= 0;
  const variant = isPositive ? 'success' : 'danger';
  const formattedValue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);

  return <Badge variant={variant}>{formattedValue}</Badge>;
};

const AccountingLedgerPage: React.FC = () => {
  const columnDefs = useMemo<ColDef<LedgerEntry>[]>(() => [
    { field: 'category', rowGroup: true, hide: true },
    { field: 'account', headerName: 'Account' }, // The account is now a regular column
    {
      field: 'actual',
      headerName: 'Actual',
      type: 'numericColumn',
      valueFormatter: params => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(params.value),
      aggFunc: 'sum',
    },
    {
      field: 'budget',
      headerName: 'Budget',
      type: 'numericColumn',
      valueFormatter: params => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(params.value),
      aggFunc: 'sum',
    },
    {
      headerName: 'Variance',
      type: 'numericColumn',
      valueGetter: params => params.data ? params.data.actual - params.data.budget : 0,
      cellRenderer: VarianceRenderer,
      aggFunc: 'sum',
    },
  ], []);

  // Configure the auto-generated group column
  const autoGroupColumnDef: ColDef = useMemo(() => ({
    headerName: 'Category', // The header for the group column
    minWidth: 250,
    flex: 2,
    // This part is for styling the footer rows
    cellRendererParams: {
      footerValueGetter: (params: any) => {
        const isRootLevel = params.node.level === -1;
        if (isRootLevel) {
          return 'Grand Total (Net Profit)';
        }
        return `Total ${params.node.key}`;
      },
    },
  }), []);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Accounting Ledger"
        description="An example of a financial data grid with row grouping, aggregation (sums), and custom-calculated columns."
      />
      <DataTable
        rowData={mockLedgerData}
        columnDefs={columnDefs}
        height="calc(100vh - 280px)"
        autoGroupColumnDef={autoGroupColumnDef}
        groupDefaultExpanded={-1}
        // --- THIS IS THE FINAL FIX ---
        // These props tell the grid to automatically generate footer rows for each group
        // and a grand total footer for the entire grid.
        groupIncludeFooter={true}
        groupIncludeTotalFooter={true}
      />
    </div>
  );
};

export default AccountingLedgerPage;