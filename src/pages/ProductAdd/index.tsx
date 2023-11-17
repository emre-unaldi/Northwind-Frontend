import React from "react";
import {Form, Formik} from "formik";
import * as Yup from "yup";
import {Button} from "semantic-ui-react";
import EuTextInput from "../../utilities/customFormControl/EuTextInput.tsx";

type ProductAddData = {
    id?: number,
    productName?: string,
    unitPrice?: number,
    unitsInStock?: number,
    quantityPerUnit?: string,
    category?: {
        categoryId?: number,
        categoryName?: string
    }
}

const ProductAdd: React.FC<ProductAddData> = () => {
    const initialValues: ProductAddData = {productName: "test", unitPrice: 10}
    const validationSchema = Yup.object({
        productName: Yup.string().required("Product name required"),
        unitPrice: Yup.number().required("Product price required")
    })

    const handleSubmit = (values: ProductAddData): void => {
        alert(JSON.stringify(values))
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className={"ui form"}>
                    <EuTextInput name={"productName"} placeholder={"Product Name"} />
                    <EuTextInput name={"unitPrice"} placeholder={"Product Price"} />
                    <Button
                        color={"green"}
                        type={"submit"}
                    >Add</Button>
                </Form>
            </Formik>
        </div>
    )
}

export default ProductAdd