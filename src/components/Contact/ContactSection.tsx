import { useState } from 'react';
import { FaLinkedin, FaTerminal, FaGithub, FaCheck } from "react-icons/fa";
import { MdEmail, MdContentCopy } from "react-icons/md";

export default function Contact() {
    const [copied, setCopied] = useState(false);
    const email = "zayarshein.mmdev@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-20 w-full bg-slate-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]"></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        I'm currently looking for new opportunities. Whether you have a question, a project to discuss, or just want to say hi, I'll try my best to get back to you!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-center items-center text-center hover:shadow-md transition-shadow">
                        <div className="bg-sky-50 p-4 rounded-full mb-4">
                            <MdEmail className="w-8 h-8 text-sky-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Send me an email</h3>
                        <p className="text-slate-500 mb-6">
                            The best way to reach me. I reply within 24 hours.
                        </p>
                        <a 
                            href={`mailto:${email}`}
                            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-sky-600 rounded-lg hover:bg-sky-700 transition-colors w-full sm:w-auto"
                        >
                            Say Hello
                        </a>
                    </div>
                    <div className="bg-slate-900 p-8 rounded-2xl shadow-lg flex flex-col justify-center relative overflow-hidden group">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        
                        <div className="flex items-center gap-2 mb-6 text-slate-400 font-mono text-sm border-b border-slate-800 pb-4">
                            <FaTerminal size={16} />
                            <span>terminal</span>
                        </div>

                        <div className="space-y-4 font-mono">
                            <div className="text-slate-300">
                                <span className="text-emerald-400">➜</span> <span className="text-sky-400">~</span> git clone contact-info
                            </div>
                            
                            <div className="bg-slate-800/50 p-4 rounded-lg flex items-center justify-between group/cmd hover:bg-slate-800 transition-colors border border-slate-700/50">
                                <code className="text-slate-300 text-sm break-all">
                                    {email}
                                </code>
                                <button 
                                    onClick={handleCopy}
                                    className="p-2 ml-2 rounded-md hover:bg-slate-700 text-slate-400 hover:text-white transition-all relative"
                                    title="Copy Email"
                                >
                                    {copied ? <FaCheck size={18} className="text-emerald-400" /> : <MdContentCopy size={18} />}
                                    
                                    <span className={`absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 transition-opacity whitespace-nowrap ${copied ? 'opacity-100' : ''}`}>
                                        Copied!
                                    </span>
                                </button>
                            </div>

                            <div className="flex gap-4 pt-4 mt-2 border-t border-slate-800">
                                <a href="https://github.com/Sxein" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                                    <FaGithub size={18} />
                                    <span>/Sxein</span>
                                </a>
                                <a href="https://www.linkedin.com/in/zayar-shein-980bb6286/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-2 text-sm">
                                    <FaLinkedin size={20} />
                                    <span>/in/zayar</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="mt-20 text-center text-slate-400 text-sm">
                    <p>Designed & Built by Zayar Shein</p>
                    <div className="flex justify-center gap-4 mt-2">
                        <span>React</span>•<span>Tailwind CSS</span>•<span>Vite</span>
                    </div>
                </footer>
            </div>
        </section>
    );
}
