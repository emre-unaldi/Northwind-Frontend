import React from "react";
import {useField} from "formik";
import {FormField, Label} from "semantic-ui-react";

interface EuTextInputProps {
    name: string,
    placeholder?: string
}

const EuTextInput: React.FC<EuTextInputProps> = ({...props}) => {
    const [field, meta] = useField(props)

    console.log(field)
    console.log(meta)

    return (
        <FormField error={meta.touched && !!meta.error}>
            <input {...field} {...props} />
            {meta.touched && !!meta.error ?
                <Label pointing basic color={"red"} content={meta.error} />
                :
                null
            }
        </FormField>
    )
}

export default EuTextInput