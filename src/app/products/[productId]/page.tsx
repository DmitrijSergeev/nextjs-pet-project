import React from 'react';

const ProductDetails = ({params}: { params: { productId: string } }) => {

    const productId = params.productId;

    return (
        <div>
            <h1>
                Description of product {productId}
            </h1>
        </div>
    );
};

export default ProductDetails;