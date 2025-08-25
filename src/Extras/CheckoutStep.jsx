import React, { useState } from "react";

export default function CheckoutStep({ cartItems=[], onNext=()=>{} }) {
  const [address, setAddress] = useState({ name:'', line1:'', city:'', zip:''});
  const [agree, setAgree] = useState(false);

  return (
    <main id="main" className="max-w-[1100px] mx-auto px-4 py-6">
      <h1 className="text-2xl font-heading mb-4">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <form onSubmit={(e)=>{ e.preventDefault(); onNext({address}); }} className="space-y-4">
          <fieldset>
            <legend className="font-medium">Shipping address</legend>
            <label className="block mt-2">Full name<input value={address.name} onChange={(e)=>setAddress({...address,name:e.target.value})} required className="w-full p-2 border rounded" /></label>
            <label className="block mt-2">Address line 1<input value={address.line1} onChange={(e)=>setAddress({...address,line1:e.target.value})} required className="w-full p-2 border rounded" /></label>
            <div className="flex gap-2">
              <input placeholder="City" value={address.city} onChange={(e)=>setAddress({...address,city:e.target.value})} className="w-1/2 p-2 border rounded" />
              <input placeholder="ZIP" value={address.zip} onChange={(e)=>setAddress({...address,zip:e.target.value})} className="w-1/2 p-2 border rounded" />
            </div>
          </fieldset>

          <label className="flex items-center gap-2">
            <input type="checkbox" checked={agree} onChange={(e)=>setAgree(e.target.checked)} />
            I agree to shipping terms
          </label>

          <button disabled={!agree} className="px-4 py-2 rounded bg-a-accent text-white" aria-disabled={!agree}>Continue to payment</button>
        </form>

        <aside className="p-4 bg-a-surface rounded">
          <h3 className="font-medium">Order summary</h3>
          <ul className="mt-3 space-y-2">
            {cartItems.map(it => <li key={it.id} className="flex items-center justify-between"><div>{it.title}</div><div>${it.price}</div></li>)}
          </ul>
          <div className="mt-4 flex justify-between font-semibold"><div>Total</div><div>${cartItems.reduce((s,i)=>s+i.price,0)}</div></div>
        </aside>
      </div>
    </main>
  );
}
