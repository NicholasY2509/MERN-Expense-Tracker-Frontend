import { Link } from 'react-router-dom'
import AuthLayout from '../../components/layouts/AuthLayout'
import Input from '../../components/ui/Input'
import { useLoginForm } from '../../hooks/useLoginForm'

const Login = () => {
    const { form, onSubmit } = useLoginForm()
    const { register, handleSubmit, formState: { errors, isSubmitting } } = form

    return (
        <AuthLayout>
            <div className=' h-3/4 md:h-full flex flex-col justify-center'>
                <h3 className='text-xl font-semibold text-primary'>Welcome Back</h3>
                <p className='text-xs text-slate-700 mb-6'>Please enter your details to log in</p>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
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

                    <div className='flex items-center justify-between mt-2'>
                        <div className='flex items-center gap-2'>
                            <input
                                type='checkbox'
                                id='remember'
                                className='w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded-sm focus:ring-primary'
                            />
                            <label htmlFor='remember' className='text-sm text-slate-700'>Remember me</label>
                        </div>

                        <Link to='/forgot-password' className='text-sm font-medium text-primary hover:underline'>
                            Forgot Password?
                        </Link>
                    </div>

                    <button
                        type='submit'
                        disabled={isSubmitting}
                        className='w-full mt-4 bg-primary text-white py-2.5 rounded-md text-sm font-semibold hover:bg-opacity-90 disabled:opacity-70 transition-all cursor-pointer'
                    >
                        {isSubmitting ? 'Logging in...' : 'Login'}
                    </button>

                    <p className='text-sm text-center text-slate-700 mt-4'>
                        Don't have an account?{' '}
                        <Link to='/register' className='font-medium text-primary hover:underline'>
                            Sign up
                        </Link>
                    </p>
                </form>
            </div>
        </AuthLayout>
    )
}

export default Login