"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import "@/public/css/SiteLoader.css";

interface BootStep {
  time: string;
  label: string;
  text: string;
  targetProgress: number;
}

const BOOT_STEPS: BootStep[] = [
  {
    time: "0.012s",
    label: "POST",
    text: "ACPI & Hardware power subsystem initialization",
    targetProgress: 15,
  },
  {
    time: "0.048s",
    label: "KERNEL",
    text: "Linux 6.12.0-deshan-arm64 virtual kernel mounted",
    targetProgress: 28,
  },
  {
    time: "0.095s",
    label: "MEMORY",
    text: "Virtual memory paging verified: 65,536 KB [OK]",
    targetProgress: 42,
  },
  {
    time: "0.160s",
    label: "RAPIER",
    text: "WebAssembly 3D physics engine initialized",
    targetProgress: 56,
  },
  {
    time: "0.235s",
    label: "THREE",
    text: "Compiling WebGL2 pipeline & lanyard textures",
    targetProgress: 70,
  },
  {
    time: "0.320s",
    label: "VFS",
    text: "Mounting /home/deshan virtual directory tree",
    targetProgress: 82,
  },
  {
    time: "0.420s",
    label: "SHELL",
    text: "Interactive tty1 developer console initialized",
    targetProgress: 92,
  },
  {
    time: "0.540s",
    label: "NEURAL",
    text: "Gemini AI neural assistant link established",
    targetProgress: 97,
  },
  {
    time: "0.650s",
    label: "AUTH",
    text: "Identity confirmed: Deshan Chandima — ACCESS GRANTED",
    targetProgress: 100,
  },
];

const ASCII_LOGO = [
  " ____  _____ ____  _   _    _    _   _ ",
  "|  _ \\| ____/ ___|| | | |  / \\  | \\ | |",
  "| | | |  _| \\___ \\| |_| | / _ \\ |  \\| |",
  "| |_| | |___ ___) |  _  |/ ___ \\| |\\  |",
  "|____/|_____|____/|_| |_/_/   \\_\\_| \\_|",
].join("\n");

interface SiteLoaderProps {
  onComplete?: () => void;
}

export default function SiteLoader({ onComplete }: SiteLoaderProps) {
  const [isMounted, setIsMounted] = useState<boolean>(true);
  const [isExiting, setIsExiting] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<string>("");

  const isExitingRef = useRef(false);

  const finishBoot = useCallback(() => {
    if (isExitingRef.current) return;
    isExitingRef.current = true;
    setProgress(100);
    setIsExiting(true);

    if (typeof window !== "undefined") {
      sessionStorage.setItem("portfolio_booted", "true");
    }

    setTimeout(() => {
      setIsMounted(false);
      onComplete?.();
    }, 450);
  }, [onComplete]);

  // Handle reboot events triggered from terminal or anywhere in app
  useEffect(() => {
    const handleRebootEvent = () => {
      isExitingRef.current = false;
      setIsExiting(false);
      setProgress(0);
      setActiveStepIndex(0);
      setIsMounted(true);
    };

    window.addEventListener("portfolio:reboot", handleRebootEvent);
    return () => {
      window.removeEventListener("portfolio:reboot", handleRebootEvent);
    };
  }, []);

  // Update clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(
        now.toISOString().replace("T", " ").replace(/\.\d+Z$/, " UTC")
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Keyboard shortcut: Escape, Enter, or Space skips the loader
  useEffect(() => {
    if (!isMounted) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        finishBoot();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMounted, finishBoot]);

  // Progressive step runner
  useEffect(() => {
    if (!isMounted || isExiting) return;

    // Fast-boot timings for responsive feel (~1.8 seconds total)
    const stepIntervals = [180, 200, 200, 220, 220, 200, 180, 180, 250];

    let currentIdx = 0;

    const runNextStep = () => {
      if (isExitingRef.current) return;

      if (currentIdx < BOOT_STEPS.length) {
        const step = BOOT_STEPS[currentIdx];
        setActiveStepIndex(currentIdx + 1);
        setProgress(step.targetProgress);

        const delay = stepIntervals[currentIdx] || 180;
        currentIdx++;

        if (currentIdx < BOOT_STEPS.length) {
          timerId = setTimeout(runNextStep, delay);
        } else {
          // Finished all steps, pause briefly to let user see 100% then exit
          timerId = setTimeout(() => {
            finishBoot();
          }, 350);
        }
      }
    };

    let timerId = setTimeout(runNextStep, 100);

    return () => {
      clearTimeout(timerId);
    };
  }, [isMounted, isExiting, finishBoot]);

  if (!isMounted) {
    return null;
  }

  // Generate ASCII block progress bar (32 chars)
  const totalBlocks = 30;
  const filledBlocks = Math.round((progress / 100) * totalBlocks);
  const asciiBar = `[${"█".repeat(filledBlocks)}${"░".repeat(
    totalBlocks - filledBlocks
  )}]`;

  const currentStep =
    activeStepIndex > 0 ? BOOT_STEPS[activeStepIndex - 1] : null;

  return (
    <div
      className={`bootloader-overlay ${isExiting ? "bootloader-exiting" : ""}`}
      onClick={finishBoot}
      role="dialog"
      aria-modal="true"
      aria-label="System Bootloader"
    >
      <div className="bootloader-scanbeam" aria-hidden="true" />

      <div className="bootloader-frame" onClick={(e) => e.stopPropagation()}>
        {/* Top Bar */}
        <header className="bootloader-topbar">
          <div className="bootloader-system-tag">
            <span className="bootloader-pulse-dot" aria-hidden="true" />
            <span>DESHAN_OS v6.12 // BIOS POST</span>
          </div>
          <button
            className="bootloader-skip-btn"
            onClick={finishBoot}
            type="button"
            title="Press ESC or Click to skip"
          >
            <span>Skip Boot</span>
            <kbd className="bootloader-skip-key">ESC</kbd>
          </button>
        </header>

        {/* Content Box */}
        <main className="bootloader-content">
          <pre className="bootloader-banner" aria-label="Deshan logo">
            {ASCII_LOGO}
          </pre>

          <div className="bootloader-bios-meta">
            <div>
              <span>SYSTEM:</span> DESHAN CHANDIMA // FULLSTACK &amp; ML STATION
            </div>
            <div>
              <span>HOST:</span> portfolio.local (tty1) | <span>ARCH:</span>{" "}
              x86_64-arm64 | <span>TIME:</span> {currentTime}
            </div>
          </div>

          {/* Diagnostic Log Lines */}
          <div
            className="bootloader-logs"
            aria-live="polite"
            aria-atomic="false"
          >
            {BOOT_STEPS.slice(0, activeStepIndex).map((step, idx) => (
              <div key={idx} className="bootloader-log-line">
                <div className="bootloader-log-text">
                  <span className="bootloader-log-time">[{step.time}]</span>
                  <span className="bootloader-log-label">
                    [{step.label.padEnd(8, " ")}]
                  </span>
                  <span>{step.text}</span>
                </div>
                <span className="bootloader-badge bootloader-badge-ok">
                  [ OK ]
                </span>
              </div>
            ))}
          </div>

          {/* Progress Section */}
          <section
            className="bootloader-progress-section"
            aria-label="Boot progress"
          >
            <div className="bootloader-progress-header">
              <span className="bootloader-progress-title">
                <span>SYSTEM INITIALIZATION:</span>
                <span className="bootloader-ascii-bar">{asciiBar}</span>
              </span>
              <span className="bootloader-progress-percent">{progress}%</span>
            </div>

            <div
              className="bootloader-bar-track"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="bootloader-bar-fill"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="bootloader-current-task">
              <span>&gt;&gt;</span>
              <span>
                {progress === 100
                  ? "Environment ready. Launching session..."
                  : currentStep
                  ? `${currentStep.text}...`
                  : "Checking system peripherals..."}
              </span>
              <span className="bootloader-caret" aria-hidden="true" />
            </div>
          </section>
        </main>

        {/* Bottom Bar */}
        <footer className="bootloader-footer">
          <div className="bootloader-footer-quote">
            &quot;It works on my machine...&quot; 🤷‍♂️
          </div>
          <div>DESHAN CHANDIMA &copy; 2026 // ALL PERMISSIONS GRANTED</div>
        </footer>
      </div>
    </div>
  );
}
