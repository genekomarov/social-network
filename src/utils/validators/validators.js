export const required = value => (
    value ? undefined : 'Field is required'
);

export const maxLength = (length) => (value) => (
    value.length > length
        ? `length more than ${length} characters`
        : undefined
);