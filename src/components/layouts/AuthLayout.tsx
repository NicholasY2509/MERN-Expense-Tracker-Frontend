import React from 'react'
import authBanner from '../../assets/images/auth-banner.jpg'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex'>
            <div className='w-screen h-screen md:w-[40vw] px-12 pt-8 pb-12'>
                <h2 className='text-lg font-medium text-primary'>Expense Tracker</h2>
                {children}
            </div>
            <div className='hidden md:flex flex-col justify-end w-[60vw] h-screen bg-slate-900 border-l border-slate-200/50 overflow-hidden relative shadow-2xl'>
                {/* Background Image with slight zoom effect on hover (optional modern touch) */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={authBanner}
                        alt="Authentication Banner"
                        className="w-full h-full object-cover opacity-90 transition-transform duration-1000 hover:scale-105"
                    />
                </div>

                <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/40 to-transparent z-10" />

                <div className="relative z-20 px-10 pb-16">
                    <div className="w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 border border-primary/20">
                        {/* Abstract Icon */}
                        <div className='w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(7,3,212,0.6)]'></div>
                    </div>

                    <h3 className="text-white text-3xl font-bold leading-tight mb-4 tracking-tight">
                        Transform Your <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-400">Financial Habits</span>
                    </h3>

                    <p className="text-slate-300 text-base leading-relaxed max-w-sm font-light">
                        Experience a smarter way to track expenses and achieve your savings goals with our modern platform.
                    </p>

                    <div className="flex items-center gap-1 mt-8">
                        <div className="w-20 h-1 bg-primary rounded-full"></div>
                        <div className="w-10 h-1 bg-primary rounded-full"></div>
                        <div className="w-5 h-1 bg-primary rounded-full"></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout