import { useState, useEffect } from 'react'

import { useDeepMemo } from '@local/test_lib'

const Index = () => {
	const [info, setInfo] = useState({})

	useEffect(() => {
		setInfo({ a: 1, b: '2' })
	}, [])

      const handled_info = useDeepMemo(() => Object.keys(info), [ info ])
      
      console.log(handled_info)
      
	return <div>index page</div>
}

export default Index
