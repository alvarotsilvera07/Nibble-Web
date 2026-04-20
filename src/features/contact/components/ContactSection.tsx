import { useState } from "react";
import { Mail, Instagram, MapPin, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactSection() {
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    // Calculates the current word count
    const wordCount = message.trim().split(/\s+/).filter(w => w.length > 0).length;

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const inputText = e.target.value;
        const inputWords = inputText.trim().split(/\s+/).filter(w => w.length > 0).length;

        // Allow if under 300 words, OR if user is deleting characters (reducing length)
        if (inputWords <= 300 || inputText.length < message.length) {
            setMessage(inputText);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus("idle");

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await response.json();

            if (data.success) {
                setStatus("success");
                form.reset();
                setMessage("");
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <section className="snap-start snap-always w-full min-h-screen py-32 flex items-center justify-center relative z-10 px-6 md:px-12" id="contact">
            <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative">
                {/* Left Side: Contact Links */}
                <div className="flex flex-col justify-center items-start lg:pl-12">
                    <h2 className="font-outfit font-extrabold text-5xl md:text-7xl text-white uppercase tracking-tight mb-16 relative whitespace-nowrap drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
                        <span className="text-emerald-400 mr-4 drop-shadow-[0_5px_15px_rgba(16,185,129,0.5)]">Contact</span>
                        <div className="absolute -left-6 md:-left-12 top-1/2 -translate-y-1/2 w-1 h-12 bg-emerald-400" />
                    </h2>


                    <div className="flex flex-col space-y-10 w-full drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]">
                        <a href="mailto:nibblework@gmail.com" className="group flex items-center gap-6 font-inter text-2xl md:text-3xl text-zinc-100 hover:text-emerald-400 transition-all duration-300">
                            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-400/20 group-hover:border-emerald-400/50 group-hover:text-emerald-400 transition-all duration-300 backdrop-blur-md">
                                <Mail size={28} strokeWidth={1.5} />
                            </div>
                            <span className="font-medium tracking-wide group-hover:-translate-y-1 transition-transform duration-300">nibblework@gmail.com</span>
                        </a>

                        <a href="https://www.instagram.com/nibbledev/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-6 font-inter text-2xl md:text-3xl text-zinc-100 hover:text-emerald-400 transition-all duration-300">
                            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-400/20 group-hover:border-emerald-400/50 group-hover:text-emerald-400 transition-all duration-300 backdrop-blur-md">
                                <Instagram size={28} strokeWidth={1.5} />
                            </div>
                            <span className="font-medium tracking-wide group-hover:-translate-y-1 transition-transform duration-300">@nibbledev</span>
                        </a>

                        <a href="https://maps.google.com/?q=Villa+Mercedes,+San+Luis,+Argentina" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-6 font-inter text-2xl md:text-3xl text-zinc-100 hover:text-emerald-400 transition-all duration-300">
                            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-400/20 group-hover:border-emerald-400/50 group-hover:text-emerald-400 transition-all duration-300 backdrop-blur-md">
                                <MapPin size={28} strokeWidth={1.5} />
                            </div>
                            <span className="font-medium tracking-wide group-hover:-translate-y-1 transition-transform duration-300">Villa Mercedes, San Luis</span>
                        </a>

                        <a href="https://github.com/Nibble-inc" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-6 font-inter text-2xl md:text-3xl text-zinc-100 hover:text-emerald-400 transition-all duration-300">
                            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-400/20 group-hover:border-emerald-400/50 group-hover:text-emerald-400 transition-all duration-300 backdrop-blur-md">
                                <Github size={28} strokeWidth={1.5} />
                            </div>
                            <span className="font-medium tracking-wide group-hover:-translate-y-1 transition-transform duration-300">Nibble-inc</span>
                        </a>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="bg-[#111111]/90 backdrop-blur-xl p-10 md:p-14 border border-white/10 rounded-2xl shadow-2xl flex flex-col justify-center relative overflow-hidden">
                    {/* Decorative glow */}
                    <div className="absolute -top-32 -right-32 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                    <h2 className="font-outfit font-bold text-3xl md:text-4xl text-white tracking-wide mb-10">Send us a message</h2>

                    <form onSubmit={handleSubmit} className="flex flex-col space-y-8 relative z-10">
                        {/* Web3Forms Access Key */}
                        <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

                        <div className="flex flex-col space-y-2">
                            <label htmlFor="name" className="font-inter text-sm font-medium text-zinc-400 uppercase tracking-wider">Full Name</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="John Doe"
                                required
                                autoComplete="off"
                                className="w-full bg-black/40 border border-white/10 focus:border-emerald-400 rounded-lg text-white placeholder:text-zinc-700 font-inter text-lg px-5 py-4 outline-none transition-all duration-300 shadow-inner"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="phone" className="font-inter text-sm font-medium text-zinc-400 uppercase tracking-wider">Phone Number <span className="text-zinc-600 lowercase">(optional)</span></label>
                                <input
                                    id="phone"
                                    type="tel"
                                    name="phone"
                                    placeholder="+1 234 567 890"
                                    autoComplete="off"
                                    className="w-full bg-black/40 border border-white/10 focus:border-emerald-400 rounded-lg text-white placeholder:text-zinc-700 font-inter text-lg px-5 py-4 outline-none transition-all duration-300 shadow-inner"
                                />
                            </div>

                            <div className="flex flex-col space-y-2">
                                <label htmlFor="email" className="font-inter text-sm font-medium text-zinc-400 uppercase tracking-wider">E-mail Address</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    required
                                    autoComplete="off"
                                    className="w-full bg-black/40 border border-white/10 focus:border-emerald-400 rounded-lg text-white placeholder:text-zinc-700 font-inter text-lg px-5 py-4 outline-none transition-all duration-300 shadow-inner"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col space-y-2 relative">
                            <label htmlFor="message" className="font-inter text-sm font-medium text-zinc-400 uppercase tracking-wider">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Tell us about your project..."
                                required
                                value={message}
                                onChange={handleMessageChange}
                                className="w-full bg-black/40 border border-white/10 focus:border-emerald-400 rounded-lg text-white placeholder:text-zinc-700 font-inter text-lg px-5 py-4 outline-none resize-none h-40 transition-all duration-300 shadow-inner"
                            />
                            <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 text-xs font-inter font-medium rounded-full border border-white/5">
                                <span className={wordCount > 290 ? "text-red-400" : "text-emerald-400"}>{wordCount}</span>
                                <span className="text-zinc-500"> / 300 words</span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`mt-4 w-full md:w-auto md:px-12 py-5 rounded-lg font-outfit font-bold text-lg uppercase tracking-widest transition-all duration-300 flex items-center justify-center 
                                ${isSubmitting ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                                    : status === 'success' ? 'bg-emerald-500 text-black border border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                                        : 'bg-white text-black hover:bg-emerald-400 hover:shadow-[0_0_25px_rgba(52,211,153,0.4)]'}`}
                        >
                            {isSubmitting ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
                        </button>

                        <AnimatePresence>
                            {status === "error" && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="text-red-400 font-inter text-sm mt-4 text-center"
                                >
                                    Something went wrong. Please try again.
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </form>
                </div>

            </div>
        </section>
    );
}
