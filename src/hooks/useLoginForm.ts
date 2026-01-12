import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, type LoginFormInputs } from '../schemas/authSchema'

export const useLoginForm = () => {
    const form = useForm<LoginFormInputs>({
        resolver: zodResolver(loginSchema)
    })

    const onSubmit = async (data: LoginFormInputs) => {
        console.log('Login data:', data)
        await new Promise(resolve => setTimeout(resolve, 1000))
    }

    return {
        form,
        onSubmit
    }
}
