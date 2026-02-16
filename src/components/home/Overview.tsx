"use client";

import Link from "next/link";

const Overview = () => {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-2 fade-in duration-500">
      <div className="border-b border-border pb-4">
        <h2 className="text-xl font-mono font-bold">System Overview</h2>
        <p className="text-sm text-muted-foreground font-mono mt-1">
          Kernel version: 2026.02.0-DP
        </p>
      </div>

      <div className="space-y-6 max-w-2xl">
        <div className="space-y-2">
          <h3 className="text-sm font-mono font-bold text-muted-foreground uppercase tracking-wider">
            User Identity
          </h3>
          <p className="text-foreground leading-relaxed">
            Hi, I'm <span className="font-bold text-primary">Dhyey Parekh</span>, a Computer Engineering student and backend-focused developer.
            I enjoy building reliable systems, designing clean architectures, and turning ideas into real products. My main interests lie in backend development, system design, AI-powered applications, and solving complex problems through code.
            I'm always exploring new technologies and care deeply about performance, scalability, and writing code that lasts.
          </p>

        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-mono font-bold text-muted-foreground uppercase tracking-wider">
            Current Status
          </h3>
          <div className="bg-secondary/30 border border-border p-4 rounded-sm font-mono text-sm">
            <p>Process: <span className="text-green-400">RUNNING</span></p>
            <p>Task: <span className="text-blue-400">Building Fleetway.in</span></p>
            <p>Location: <span className="text-yellow-400">Remote</span></p>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-mono font-bold text-muted-foreground uppercase tracking-wider">
            Changelog
          </h3>
          <div className="font-mono text-sm space-y-1 text-muted-foreground border-l-2 border-border pl-4">
            <p><span className="text-foreground font-bold">v1.3</span> - Learned to love observability</p>
            <p><span className="text-foreground font-bold">v1.2</span> - Stopped overengineering</p>
            <p><span className="text-foreground font-bold">v1.1</span> - Broke prod, fixed prod</p>
          </div>
        </div>

        <div className="pt-4 flex gap-4">
          <Link href="/workbench" className="px-4 py-2 bg-primary text-primary-foreground font-mono text-sm hover:opacity-90 transition-opacity">
            Run /workbench
          </Link>
          <Link href="/contact" className="px-4 py-2 border border-border hover:bg-secondary/50 font-mono text-sm transition-colors">
            Ping /contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Overview;
