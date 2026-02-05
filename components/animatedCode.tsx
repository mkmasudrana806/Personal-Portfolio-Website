"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2 } from "lucide-react";

const codeExamples = [
  {
    title: "Express Server",
    language: "javascript",
    code: `import express from 'express';
import { User } from './models/User.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.post('/api/users', async (req, res) => {
  const result = await User.create(req.body);
  res.json({ 
    success: true, data: result 
  });
});

app.listen(PORT, () =>
  console.log('Server running on port:', PORT)
);`,
  },
  {
    title: "MongoDB Schema",
    language: "javascript",
    code: `import { Schema, model } from 'mongoose';

const postSchema = new Schema(
  {
    userId: { 
      type: Schema.Types.ObjectId, ref: 'User', 
      index: true 
    },
    title: { type: String, index: true },
    content: String,
    status: { type: String, index: true }
  },
  { timestamps: true }
);

postSchema.index({ status: 1, createdAt: -1 });
export const Post = model('Post', postSchema);`,
  },
  {
    title: "Query Example",
    language: "javascript",
    code: `// Get recent published posts with author info
const posts = await Post.find(
  { status: 'published' },  
  { title: 1, createdAt: 1, userId: 1 } 
)
  .sort({ createdAt: -1 }) 
  .limit(20) 
  .populate({
    path: 'userId',
    select: 'name email'  
  });

// Count total published posts for analytics
const total = await Post.countDocuments({
  status: 'published'
});`,
  },
];

const AnimatedCode = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredLine, setHoveredLine] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % codeExamples.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = codeExamples[currentIndex];

  const linesOfTokens = useMemo(() => {
    const keywords = [
      // javascript
      "const",
      "require",
      "import",
      "async",
      "await",
      "function",
      "return",
      "new",
      "export",
      "true",
      "false",
      // express
      "use",
      "post",
      "listen",
      "json",
      "send",
      "req",
      "res",
      // mongoose methods and schema
      "model",
      "Schema",
      "type",
      "required",
      "unique",
      "ref",
      "populate",
      "create",
      "findById",
      "findByIdAndUpdate",
      "ObjectId",
      "Types",
    ];

    const rawLines = current.code.split("\n");

    return rawLines.map((lineText) => {
      const words = lineText.split(/(\s+|\.|\(|\)|\[|\]|\{|\}|'|")/);
      let inString = false;
      let stringChar: string | null = null;

      return words.map((part) => {
        if (!part) return { text: "", color: "" };

        // String Handling
        if ((part === "'" || part === '"') && !inString) {
          inString = true;
          stringChar = part;
          return { text: part, color: "text-emerald-400" };
        }
        if (part === stringChar && inString) {
          inString = false;
          stringChar = null;
          return { text: part, color: "text-emerald-400" };
        }
        if (inString) return { text: part, color: "text-emerald-400" };

        // Highlighting Logic
        if (keywords.includes(part))
          return { text: part, color: "text-pink-500" };
        if (["(", ")", "{", "}", "[", "]", ".", ",", ":"].includes(part))
          return { text: part, color: "text-yellow-500" };
        if (!isNaN(Number(part)) && part.trim() !== "")
          return { text: part, color: "text-orange-400" };

        return { text: part, color: "text-slate-300" };
      });
    });
  }, [current]);

  return (
    <div className="relative w-full flex items-center justify-center ps-8">
      <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full" />

      <div className="relative w-full max-w-xl bg-[#0d1117] border border-slate-700/50 rounded-xl overflow-hidden shadow-2xl">
        <div className="bg-slate-800/80 border-b border-slate-700/30 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="h-4 w-4 text-blue-400" />
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
              {current.language}
            </span>
          </div>
          <span className="text-xs flex items-center gap-4 font-mono text-slate-500">
            <div className="ml-auto flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40" />
            </div>{" "}
            {current.title}
          </span>
        </div>

        <div className="flex h-100 font-mono text-[13px] leading-[1.6] relative bg-[#0d1117] overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex w-full pt-4"
            >
              <div className="w-full">
                {linesOfTokens.map((line, lineIdx) => (
                  <div
                    key={`${currentIndex}-${lineIdx}`}
                    onMouseEnter={() => setHoveredLine(lineIdx)}
                    onMouseLeave={() => setHoveredLine(null)}
                    className={`flex w-full transition-colors duration-150 ${hoveredLine === lineIdx ? "bg-blue-500/10" : "bg-transparent"}`}
                  >
                    <div
                      className={`w-12 text-right pr-4 select-none transition-colors ${hoveredLine === lineIdx ? "text-blue-400" : "text-slate-700"}`}
                    >
                      {lineIdx + 1}
                    </div>
                    <div className="flex-1 whitespace-pre">
                      {line.map((token, tokenIdx) => (
                        <motion.span
                          key={tokenIdx}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            duration: 0.2,
                            delay: lineIdx * 0.05 + tokenIdx * 0.01,
                          }}
                          className={token.color}
                        >
                          {token.text}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress bar */}
        <div className="bg-slate-800/20 border-t border-slate-700/30 px-6 py-4 flex gap-2">
          {codeExamples.map((_, idx) => (
            <div
              key={idx}
              className="h-1 flex-1 bg-slate-800 rounded-full overflow-hidden"
            >
              {idx === currentIndex && (
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4, ease: "linear" }}
                  className="h-full bg-blue-500"
                />
              )}
              {idx < currentIndex && (
                <div className="h-full w-full bg-slate-600" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedCode;
