import { useRef, useState, useCallback } from "react";

interface UploadPanelProps {
  onImageSelect: (file: File) => void;
  previewUrl?: string | null;
}

const UploadPanel = ({ onImageSelect, previewUrl }: UploadPanelProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = useCallback(
    (file: File) => {
      if (file.type.startsWith("image/")) {
        onImageSelect(file);
      }
    },
    [onImageSelect]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  return (
    <div className="glass-card-static" style={{ padding: "var(--space-4)" }}>
      {previewUrl ? (
        <div className="flex flex-col items-center gap-4">
          <img
            src={previewUrl}
            alt="Uploaded skin scan preview"
            style={{
              width: "100%",
              maxWidth: 320,
              borderRadius: 16,
              objectFit: "cover",
              aspectRatio: "3/4",
            }}
          />
          <button className="btn-secondary" onClick={() => inputRef.current?.click()}>
            Choose Different Photo
          </button>
        </div>
      ) : (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          style={{
            border: `2px dashed ${isDragging ? "hsl(var(--primary))" : "rgba(0,0,0,0.12)"}`,
            borderRadius: 16,
            padding: "var(--space-8) var(--space-4)",
            textAlign: "center",
            cursor: "pointer",
            transition: "border-color 0.2s, background 0.2s",
            background: isDragging ? "hsl(var(--primary) / 0.04)" : "transparent",
          }}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            stroke="hsl(var(--muted-foreground))"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ margin: "0 auto 16px" }}
          >
            <rect x="6" y="10" width="36" height="28" rx="4" />
            <circle cx="24" cy="24" r="8" />
            <circle cx="24" cy="24" r="3" />
            <path d="M18 10V8a2 2 0 012-2h8a2 2 0 012 2v2" />
          </svg>
          <p className="text-card-title mb-2">Upload Your Skin Scan</p>
          <p className="text-micro">Drag & drop a photo here, or click to browse</p>
          <p className="text-micro mt-1" style={{ opacity: 0.6 }}>
            JPG, PNG up to 10MB
          </p>
        </div>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
        }}
      />
    </div>
  );
};

export default UploadPanel;
