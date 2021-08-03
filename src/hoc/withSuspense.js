import React from 'react'

export const withSuspense = (Component) => {

	return (props) => (
		<React.Suspense fallback={<div>Loading ...</div>}>
			<Component />
		</React.Suspense>
	)
}