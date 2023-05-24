import React from 'react'

const Footer = () => {
    return (
        <footer className="flex flex-col-reverse md:flex-row p-0 md:p-10 text-neutral-content lg:w-2/3 mx-auto">
            <div className='my-6 text-center basis-1/2'>
                <p className='text-base-content'>Made with ❤ by <a href="https://www.linkedin.com/in/cristiancamilopena/" target="_blank" rel="noopener noreferrer" className='font-black'>Cristian Peña</a></p>
            </div>
            <div className='flex mx-auto basis-1/2'>
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 mx-auto items-center justify-center md:justify-between">
                    <a className="btn btn-secondary gap-2" href='https://github.com/cristianps1988/polemic-tweet-generator' target="_blank" rel="noopener noreferrer" >
                        <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                        </svg>
                        Star on Github
                    </a>

                    <a className="btn btn-secondary gap-2" href='https://twitter.com/Cristianps1988' target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current h-6 w-6"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                        Follow me
                    </a>
                    <a></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
