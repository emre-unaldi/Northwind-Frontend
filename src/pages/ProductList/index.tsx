import React, {useEffect, useState} from "react";
import {Button, Icon, Menu, Table} from 'semantic-ui-react'
import ProductService from "../../services/ProductService.ts";
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../redux/hooks.ts";
import {addToCart} from "../../redux/actions/cartActions.ts";
import {toast} from "react-toastify";

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

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<ProductData[]>([])
    const dispatch = useAppDispatch()

    useEffect(() => {
        const productService = new ProductService();

        productService.getProducts()
            .then((result) => {
                setProducts(result.data.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);


    const handleAddToCart = (product: ProductData) => {
        dispatch(addToCart(product))
        toast.success(`${product.productName} add to basket successfully`)
    }

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Product Name</Table.HeaderCell>
                        <Table.HeaderCell>Unit Price</Table.HeaderCell>
                        <Table.HeaderCell>Units In Stock</Table.HeaderCell>
                        <Table.HeaderCell>Quantity Per Unit</Table.HeaderCell>
                        <Table.HeaderCell>Category Name</Table.HeaderCell>
                        <Table.HeaderCell>Actions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        products.map((product) => (
                            <Table.Row key={product.id}>
                                <Table.Cell><Link to={`/products/${product.productName}`}>{product.productName}</Link></Table.Cell>
                                <Table.Cell>{product.unitPrice}</Table.Cell>
                                <Table.Cell>{product.unitsInStock}</Table.Cell>
                                <Table.Cell>{product.quantityPerUnit}</Table.Cell>
                                <Table.Cell>{product.category?.categoryName}</Table.Cell>
                                <Table.Cell>
                                    <Button onClick={() => handleAddToCart(product)}>
                                        Add To Basket
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left'/>
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right'/>
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}

export default ProductList