/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe } from 'lucide-react';

export default function App() {
  const [name, setName] = useState('');

  const displayedGreeting = name.trim() ? `Hello, ${name.trim()}!` : 'Hello, World!';

  return (
    <div className="min-h-screen bg-[#fbfaf7] text-[#1c1917] flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-xl">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white border border-stone-200/80 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.015)] p-12 flex flex-col items-center text-center space-y-10"
        >
          {/* Subtle Aesthetic Indicator */}
          <div className="flex items-center space-x-2 text-stone-450/80 text-xs tracking-widest uppercase font-mono">
            <Globe className="w-3.5 h-3.5 text-stone-400 stroke-[1.5]" />
            <span className="text-stone-400">Universal Greeting</span>
          </div>

          {/* Core Display Typography */}
          <div className="h-32 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={displayedGreeting}
                initial={{ opacity: 0, scale: 0.96, filter: 'blur(4px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.04, filter: 'blur(4px)' }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="font-serif text-5xl md:text-6xl font-normal tracking-tight leading-tight text-stone-900 select-none pb-2"
              >
                {displayedGreeting}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Minimalist Divider */}
          <div className="w-12 h-[1px] bg-stone-200" />

          {/* Input field for custom name with responsive interaction */}
          <div className="w-full max-w-sm space-y-3">
            <label htmlFor="name-input" className="block text-[11px] font-mono text-stone-400 uppercase tracking-wider">
              Introduce Yourself
            </label>
            <div className="relative">
              <input
                id="name-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value.slice(0, 30))}
                placeholder="Type your name..."
                maxLength={30}
                className="w-full bg-stone-50 border border-stone-200/80 hover:border-stone-300 focus:border-stone-900 focus:outline-none rounded-xl px-5 py-3 text-center text-stone-800 placeholder-stone-400 font-sans transition-all duration-300 shadow-[inset_0_1px_2px_rgba(0,0,0,0.01)] focus:shadow-sm"
              />
              {name && (
                <button
                  onClick={() => setName('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-xs font-mono font-medium"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
