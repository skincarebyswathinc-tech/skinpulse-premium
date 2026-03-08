import { useState, useEffect } from "react";

const steps = [
  "Preparing Image",
  "Aligning Facial Region",
  "Reading Skin Signals",
  "Generating Skin Metrics",
  "Preparing Your Dashboard",
];

interface AnalysisLoadingProps {
  onComplete: () => void;
}

const AnalysisLoading = ({ onComplete }: AnalysisLoadingProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep < steps.length) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 1200);
      return () => clearTimeout(timer);
    } else {
      const done = setTimeout(onComplete, 600);
      return () => clearTimeout(done);
    }
  }, [currentStep, onComplete]);

  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{ minHeight: "60vh", gap: "var(--space-4)" }}
    >
      {/* Animated spinner */}
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          border: "3px solid hsl(var(--background-secondary))",
          borderTopColor: "hsl(var(--primary))",
          animation: "spin 1s linear infinite",
        }}
      />
      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>

      <div style={{ textAlign: "center", maxWidth: 320 }}>
        <p className="text-section-title mb-sp-3">Analyzing Your Skin</p>
        <div className="flex flex-col gap-3" style={{ textAlign: "left" }}>
          {steps.map((step, i) => (
            <div
              key={step}
              className="flex items-center gap-3"
              style={{
                opacity: i <= currentStep ? 1 : 0.3,
                transition: "opacity 0.4s ease",
              }}
            >
              <div
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  fontWeight: 600,
                  background:
                    i < currentStep
                      ? "hsl(var(--primary))"
                      : i === currentStep
                      ? "hsl(var(--primary) / 0.15)"
                      : "hsl(var(--background-secondary))",
                  color:
                    i < currentStep
                      ? "white"
                      : i === currentStep
                      ? "hsl(var(--primary))"
                      : "hsl(var(--muted-foreground))",
                  transition: "all 0.4s ease",
                }}
              >
                {i < currentStep ? "✓" : i + 1}
              </div>
              <span
                className={i === currentStep ? "pulse-loading" : ""}
                style={{
                  fontSize: "var(--font-body)",
                  fontWeight: i === currentStep ? 600 : 400,
                  color:
                    i <= currentStep
                      ? "hsl(var(--foreground))"
                      : "hsl(var(--muted-foreground))",
                }}
              >
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalysisLoading;
