import React from 'react';

const App = () => {
	const sx = React.createElement;
	return sx(
		'div',
		{ className: 'book' },
		sx('div', { className: 'title' }, 'The Title'),
		sx('div', { className: 'author' }, 'The Author'),
		sx(
			'ul',
			{ className: 'stats' },
			sx('li', { className: 'rating' }, '5 stars'),
			sx('li', { className: 'isbn' }, '12-345678-910'),
		),
	);
};
export default App;


//function Book() {
    //   return;
    //   <div className="book">
    //     <div className="title">The Title</div>
    //     <div className="author">The Author</div>
    //     <ul className="stars">
    //       <li className="rating">5 stars</li>
    //       <li className="isbn">12-345678-910</li>
    //     </ul>
    //   </div>;
    // }
    // ReactDOM.render(<Book />, document.getElementById("#root"));

