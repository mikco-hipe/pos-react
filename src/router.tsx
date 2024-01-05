import { paths } from '@/utils/routes'
import RootLayout from '@/pages/RootLayout'
import POS from '@/pages/pos/POS'
import Invoice from '@/pages/invoice/Invoice'
import Sales from '@/pages/sales/Sales'
import Inventory from '@/pages/inventory/Inventory'
import Settings from '@/pages/settings/Settings'
import Error from '@/pages/error/Error'
import Dashboard from '@/pages/dashboard/Dashboard'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { path: paths.dashboard, element: <Dashboard /> },
            { path: paths.pos, element: <POS /> },
            { path: paths.invoice, element: <Invoice /> },
            { path: paths.sales, element: <Sales /> },
            { path: paths.inventory, element: <Inventory /> },
            { path: paths.settings, element: <Settings /> },
            { path: paths.error, element: <Error /> },
        ]
    }
])
