import { SignUpFormSchema, FormState } from "../lib/definitions";

export async function signup(state: FormState, formData: FormData) {
    const validatedFields = SignUpFormSchema.safeParse({
        username: formData.get('username'),
        password: formData.get('password'),
    })

    // If the form data is invalid, return early with the errors.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    // Otherwise, submit the form data to the server.
}