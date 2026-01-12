import { Link } from 'react-router-dom'
import AuthLayout from '../../components/layouts/AuthLayout'
import Input from '../../components/ui/Input'
import { useRegisterForm } from '../../hooks/useRegisterForm'
import { FiLoader } from "react-icons/fi";

const Register = () => {
    const { form, onSubmit } = useRegisterForm()
    const { register, handleSubmit, formState: { errors, isSubmitting } } = form

    return (
        <AuthLayout>
            <div className='h-3/4 md:h-full flex flex-col justify-center'>
                <h3 className='text-xl font-semibold text-primary'>Create an Account</h3>
                <p className='text-xs text-slate-700 mb-6'>Join us to track your expenses efficiently</p>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
                    <Input
                        label='Full Name'
                        type='text'
                        placeholder='John Doe'
                        error={errors.name?.message}
                        {...register('name')}
                    />

                    <Input
                        label='Email Address'
                        type='email'
                        placeholder='john@example.com'
                        error={errors.email?.message}
                        {...register('email')}
                    />

                    <Input
                        label='Password'
                        type='password'
                        placeholder='Min. 8 characters'
                        error={errors.password?.message}
                        {...register('password')}
                    />

                    <Input
                        label='Confirm Password'
                        type='password'
                        placeholder='Confirm your password'
                        error={errors.passwordConfirmation?.message}
                        {...register('passwordConfirmation')}
                    />

                    <button
                        type='submit'
                        disabled={isSubmitting}
                        className='w-full mt-4 bg-primary text-white py-2.5 rounded-md text-sm font-semibold hover:bg-opacity-90 disabled:opacity-70 transition-all cursor-pointer'
                    >
                        {isSubmitting ? (
                            <div className='flex justify-center items-center gap-2'>
                                <FiLoader className='animate-spin' />
                                Creating Account...
                            </div>
                        ) : 'Sign Up'}
                    </button>

                    <p className='text-sm text-center text-slate-700 mt-4'>
                        Already have an account?{' '}
                        <Link to='/login' className='font-medium text-primary hover:underline'>
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </AuthLayout>
    )
}

export default Register