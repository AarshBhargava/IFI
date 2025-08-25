import React, { useEffect, useState } from "react";
import { Api } from "../lib/api";
import ArtworkCard from "./temp";
import { useSearchParams } from "react-router-dom";

export default function Profile() {
  const [me, setMe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [params, setParams] = useSearchParams();
  const tab = params.get("tab") || "uploads";

  useEffect(() => {
    const run = async () => {
      try {
        const { data } = await Api.me();
        setMe(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    run();
  }, []);

  if (loading) return <div className="text-neutral-500">Loading…</div>;
  if (!me) return <div>Could not load profile.</div>;

  return (
    <div className="space-y-6">
      <div className="card p-6 flex items-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-neutral-100 overflow-hidden">
          {me.avatarUrl ? (
            <img src={me.avatarUrl} className="w-full h-full object-cover" alt="avatar" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-neutral-500">
              {me.name?.[0]?.toUpperCase() || me.email[0]?.toUpperCase()}
            </div>
          )}
        </div>
        <div>
          <div className="font-semibold">{me.name || me.email}</div>
          <div className="text-sm text-neutral-600">{me.email}</div>
        </div>
      </div>

      <div className="flex gap-2">
        <button className={`btn-ghost ${tab === "uploads" ? "bg-neutral-100" : ""}`} onClick={() => setParams({ tab: "uploads" })}>My Uploads</button>
        <button className={`btn-ghost ${tab === "purchases" ? "bg-neutral-100" : ""}`} onClick={() => setParams({ tab: "purchases" })}>Purchases</button>
      </div>

      {tab === "uploads" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {me.uploads?.length ? me.uploads.map((a) => <ArtworkCard key={a.id} item={a} />) : (
            <div className="text-neutral-600">No uploads yet.</div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {me.purchases?.length ? me.purchases.map((a) => <ArtworkCard key={a.id} item={a} />) : (
            <div className="text-neutral-600">No purchases yet.</div>
          )}
        </div>
      )}
    </div>
  );
}
