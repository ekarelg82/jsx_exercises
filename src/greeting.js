import React from 'react';

const Greeting = () => {
     // Try all of these variations
	var username = 'root';
	// username = undefined;
	// username = null;
    // username = false;
    // username = 'Karel';

	return username ? <div>Hello {username}</div> : <div>Not logged in</div>;
};

export default Greeting;
