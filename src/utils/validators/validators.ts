type FieldValidatorType = (value: string) => string | undefined

export const required: FieldValidatorType = (value) => (
    value ? undefined : 'Field is required'
)

export const maxLength = (length: number): FieldValidatorType => (value) => (
    value.length > length
        ? `length more than ${length} characters`
        : undefined
)