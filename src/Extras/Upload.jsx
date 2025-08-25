import React, { useState } from "react";
import ImagePicker from "./ImagePicker";
import { Api } from "../lib/api";
import { useNavigate } from "react-router-dom";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("painting");
  const [price, setPrice] = useState(1000);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const nav = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError("Please select an image");
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const form = new FormData();
      form.append("image", file);
      form.append("title", title);
      form.append("description", description);
      form.append("category", category);
      form.append("price", String(price));
      await Api.createArtwork(form);
      nav("/");
    } catch (err) {
      setError(err?.response?.data?.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="card p-6">
        <h2 className="text-xl font-semibold mb-4">Upload new artwork</h2>
        <form className="space-y-4" onSubmit={onSubmit}>
          <ImagePicker name="image" onFile={setFile} />
          <div>
            <label className="label">Title</label>
            <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div>
            <label className="label">Description</label>
            <textarea className="input min-h-[100px]" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="label">Category</label>
              <select className="input" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option>painting</option>
                <option>photography</option>
                <option>illustration</option>
                <option>3d</option>
              </select>
            </div>
            <div>
              <label className="label">Price (₹)</label>
              <input className="input" type="number" min={0} value={price} onChange={(e) => setPrice(Number(e.target.value))} required />
            </div>
          </div>
          {error && <div className="text-sm text-red-600">{error}</div>}
          <button className="btn-primary" disabled={loading}>
            {loading ? "Uploading…" : "Publish artwork"}
          </button>
        </form>
      </div>
    </div>
  );
}
