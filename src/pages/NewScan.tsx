import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import UploadPanel from "@/components/UploadPanel";
import AnalysisLoading from "@/components/AnalysisLoading";

const tips = [
  "Use natural, even lighting",
  "Remove any makeup",
  "Keep a neutral facial expression",
  "Hold camera at eye level",
  "Ensure face fills the frame",
];

const NewScan = () => {
  const navigate = useNavigate();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);

  const handleImageSelect = useCallback((file: File) => {
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  }, []);

  const handleAnalyze = () => {
    setAnalyzing(true);
  };

  if (analyzing) {
    return <AnalysisLoading onComplete={() => navigate("/results")} />;
  }

  return (
    <div className="animate-fade-in">
      <PageHeader title="New Scan" subtitle="Upload a clear photo of your face" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-sp-3">
        <div className="md:col-span-2">
          <UploadPanel onImageSelect={handleImageSelect} previewUrl={previewUrl} />
          {previewUrl && (
            <div className="mt-sp-3 flex justify-center">
              <button className="btn-primary" onClick={handleAnalyze}>
                Analyze Skin
              </button>
            </div>
          )}
        </div>

        <div className="glass-card-static" style={{ padding: "var(--space-3)", height: "fit-content" }}>
          <p className="text-card-title mb-3">Tips for Best Scan</p>
          <ul className="flex flex-col gap-2">
            {tips.map((tip) => (
              <li key={tip} className="flex items-start gap-2">
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "hsl(var(--primary))",
                    marginTop: 6,
                    flexShrink: 0,
                  }}
                />
                <span className="text-body">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewScan;
