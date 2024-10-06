import { IconTag } from '@tabler/icons-react';
import { Product } from '@/core';
import Tag from '../shared/Tag';

export interface SpecificationsProps {
    product: Product;
}

export default function Specifications(props: SpecificationsProps) {
    const { product } = props;

    // Check if the product exists
    return product ? (
        <div className="flex-1 flex flex-col gap-1">
            
            {/* Display the highlighted specification in a Tag component */}
            <div className="flex mb-3">
                <Tag label={product.specifications.highlight!} icon={IconTag} outlined />
            </div>
            
            {/* Iterate through all specifications except for 'highlight', 
            and display each one as a key-value pair */}
            {product?.specifications &&
                Object.keys(product.specifications)
                    .filter((k) => k !== 'highlight') // Exclude 'highlight' key
                    .map((key) => (
                        <div key={key} className="flex gap-1">
                            {/* Display the specification key */}
                            <span className="p-2 w-1/3 bg-white/5 rounded">{key}</span>
                            
                            {/* Display the specification value */}
                            <span className="p-2 w-2/3 bg-white/5 rounded">
                                {product.specifications[key]}
                            </span>
                        </div>
                    ))}
        </div>
    ) : null; // Return null if the product is not available
}
