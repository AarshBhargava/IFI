import React, { useState, useRef, useEffect } from "react";

export default function ImagePicker({ name, onFile, defaultPreview }) {
  const [preview, setPreview] = useState(defaultPreview || null);
  const inputRef = useRef(null);

  useEffect(() => {
    return () => {
      if (preview && preview.startsWith("blob:")) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  return (
    <div className="space-y-2">
      <label className="label">Artwork Image</label>
      <div
        className="card overflow-hidden cursor-pointer bg-neutral-50 border border-dashed border-neutral-300"
        onClick={() => inputRef.current && inputRef.current.click()}
      >
        <div className="aspect-[4/3] flex items-center justify-center">
          {preview ? (
            <img src={preview} className="w-full h-full object-cover" alt="preview" />
          ) : (
            <div className="text-neutral-500 text-sm">Click to select an image</div>
          )}
        </div>
      </div>
      <input
        ref={inputRef}
        name={name}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files && e.target.files[0] ? e.target.files[0] : null;
          if (file) {
            const url = URL.createObjectURL(file);
            setPreview(url);
          }
          onFile(file);
        }}
      />
    </div>
  );
}
