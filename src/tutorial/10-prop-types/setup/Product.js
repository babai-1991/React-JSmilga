//ComponentName.defaultProps = {}
//also look how I import an image..
import React from 'react';
import PropTypes from 'prop-types';
import DefaultImage from '../../../assets/no-image.png';

const Product = ({ id, name, image, price }) => {
	const url = image && image.url;
	return (
		<article className="product">
			<img src={url || DefaultImage} alt={name} />
			<h4>{name}</h4>
			<h3>{price}</h3>
		</article>
	);
};

Product.propTypes = {
	//because I am getting image as an object from that api
	image: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired
};

//default props
Product.defaultProps = {
	name: 'Product Name',
	price: 10,
	image: DefaultImage
};
export default Product;
