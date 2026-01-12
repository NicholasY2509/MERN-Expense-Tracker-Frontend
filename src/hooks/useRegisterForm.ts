import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema, type RegisterFormInputs } from '../schemas/authSchema'

export const useRegisterForm = () => {
    const form = useForm<RegisterFormInputs>({
        resolver: zodResolver(registerSchema)
    })

    const onSubmit = async (data: RegisterFormInputs) => {
        // TODO: Integrate with registration API
        console.log('Register data:', data)
        await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
    }

    return {
        form,
        onSubmit
    }
}
