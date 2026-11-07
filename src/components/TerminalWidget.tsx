"use client";

import { useEffect, useRef, useState } from "react";

type Line = {
  type: "input" | "output";
  text: string;
};

const COMMANDS: Record<string, string[]> = {
  whoami: [
    "ananya seelam",
    "software engineer @ google",
    "building tools for people :)",
  ],
  what: [
    "available commands:",
    "  whoami     - who is this?",
    "  about      - a short bio",
    "  coffee     - brew status",
    "  hobbies    - what i do in my free time",
    "  contact    - how to reach me",
    "  advocacy   - what i advocate for",
    "  clear      - clear the terminal",
  ],
  about: [
    "software engineer working on search in chrome!",
    "previously did research on misinformation and AI fairness",
    " as well as worked with tech for nonprofits! "
  ],
  coffee: [
    "brewing...",
    "☕ here's your coffee",
  ],
  hobbies: ["crocheting, reading, running"],
  contact: [
    "scroll down, or click 'say hi!'",
  ],
  advocacy: [
    "in my free time, i work with Citizens Climate Lobby to get better",
    "climate policy passed at the NY State level",
  ],
};

const WELCOME = [
  "welcome! type 'what' to see what this does.",
];

export default function TerminalWidget() {
  const [history, setHistory] = useState<Line[]>(
    WELCOME.map((text) => ({ type: "output", text }))
  );
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: "end" });
  }, [history]);

  function runCommand(raw: string) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === "clear") {
      setHistory([]);
      return;
    }

    const output = COMMANDS[cmd] ?? [`command not found: ${cmd}`, "type 'what' for a list of commands"];

    setHistory((prev) => [
      ...prev,
      { type: "input", text: raw },
      ...output.map((text) => ({ type: "output" as const, text })),
    ]);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    runCommand(input);
    setInput("");
  }

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className="flex h-[440px] w-full flex-col overflow-hidden rounded-xl border border-border bg-surface font-mono text-sm"
    >
     <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
      <span className="h-2.5 w-2.5 rounded-full bg-[#b5695a]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#c9a24b]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#8b9a82]" />
      <span className="ml-2 text-[10px] text-[#7d94b5]">ananya@portfolio: ~</span>
    </div>

      <div className="flex-1 overflow-y-auto px-3 py-2 text-ink-secondary">
        {history.map((line, i) => (
          <div key={i} className={line.type === "input" ? "font-semibold text-ink" : ""}>
            {line.type === "input" ? `$ ${line.text}` : line.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-border px-3 py-2">
        <span className="text-ink-muted">$</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
          spellCheck={false}
          autoComplete="off"
          placeholder="try 'what'"
          className="flex-1 bg-transparent text-ink outline-none placeholder:text-ink-muted"
        />
      </form>
    </div>
  );
}