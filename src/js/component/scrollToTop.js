import React from "react";
import PropTypes from "prop-types";

//serves only to scroll to top of page each time component is updated. 

class ScrollToTop extends React.Component {
	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			window.scrollTo(0, 0);
		}
	}

	render() {
		return this.props.children;
	}
}

export default ScrollToTop;
ScrollToTop.propTypes = {
	location: PropTypes.object,
	children: PropTypes.any
};
