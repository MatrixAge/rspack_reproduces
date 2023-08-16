import { createHashRouter } from 'react-router-dom'

import Index from '@/pages'

export default createHashRouter([
	{
		path: '/',
		element: <Index />
	}
])
