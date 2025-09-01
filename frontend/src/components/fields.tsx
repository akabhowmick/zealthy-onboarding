export function AboutMeField({ defaultValue }: { defaultValue?: string }) {
  return (
    <div className="space-y-2">
      <label className="font-medium">About Me</label>
      <textarea
        name="aboutMe"
        defaultValue={defaultValue}
        className="w-full border rounded p-2"
        rows={5}
      />
    </div>
  );
}
export function AddressFields(p: { street?: string; city?: string; state?: string; zip?: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <label className="font-medium">Street</label>
        <input name="street" defaultValue={p.street} className="w-full border rounded p-2" />
      </div>
      <div className="space-y-2">
        <label className="font-medium">City</label>
        <input name="city" defaultValue={p.city} className="w-full border rounded p-2" />
      </div>
      <div className="space-y-2">
        <label className="font-medium">State</label>
        <input name="state" defaultValue={p.state} className="w-full border rounded p-2" />
      </div>
      <div className="space-y-2">
        <label className="font-medium">Zip</label>
        <input name="zip" defaultValue={p.zip} className="w-full border rounded p-2" />
      </div>
    </div>
  );
}
export function BirthdateField({ defaultValue }: { defaultValue?: string }) {
  return (
    <div className="space-y-2">
      <label className="font-medium">Birthdate</label>
      <input
        type="date"
        name="birthdate"
        defaultValue={defaultValue?.slice(0, 10)}
        className="border rounded p-2"
      />
    </div>
  );
}
