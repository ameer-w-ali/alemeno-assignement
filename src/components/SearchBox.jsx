export default function SearchBox({ value, setValue, placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full mb-4 p-2 border rounded"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
