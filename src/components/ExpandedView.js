import classNames from 'classnames';
import React from 'react';

const ExpandedView = (props) => {
	const classes = classNames('expanded-view', {
		'expanded-view--open': props.open,
		[`expanded-view--${props.type}`]: true,
	})

	return (
		<div className={classes}>
			<div className="expanded-view__top-bar">
				{props.title && <span className="expanded-view__top-bar-title">{props.title}</span>}
				<button className="expanded-view__close-button" onClick={props.onClose} />
			</div>
			{props.children}
		</div>
	);
};

export default ExpandedView;