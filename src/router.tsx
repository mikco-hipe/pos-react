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
            { path: `${paths.dashboard}/:page?`, element: <Dashboard /> },
            { path: `${paths.pos}/:page?`, element: <POS /> },
            { path: `${paths.invoice}/:page?`, element: <Invoice /> },
            { path: `${paths.sales}/:page?`, element: <Sales /> },
            { path: `${paths.inventory}/:page?`, element: <Inventory /> },
            { path: `${paths.settings}/:page?`, element: <Settings /> },
            { path: paths.error, element: <Error /> },
        ]
    }
])
