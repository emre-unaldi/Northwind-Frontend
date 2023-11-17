import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Button, Card} from "semantic-ui-react";
import ProductService from "../../services/ProductService.ts";
interface ProductData {
    id: number,
    productName: string,
    unitPrice: number,
    unitsInStock: number,
    quantityPerUnit: string,
    category: {
        categoryId: number,
        categoryName: string
    }
}
const ProductDetail: React.FC = () => {
    const [product, setProduct] = useState<ProductData>();
    const {productName} = useParams();

    useEffect(() => {
        const productService = new ProductService();

        if(productName !== null && productName !== undefined) {
            productService.getByProductName(productName)
                .then((result) => {
                    setProduct(result.data.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        } else {
            throw new Error("Product name undefined")
        }
    }, [productName])

    return (
        <div>
            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Card.Header>{product?.productName}</Card.Header>
                        <Card.Meta>{product?.category.categoryName}</Card.Meta>
                        <Card.Description>
                            Steve wants to add you to the group <strong>best friends</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}

export default ProductDetail