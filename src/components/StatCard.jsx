export default function StatCard({ title, value }) {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
      <h3 className="text-gray-400 text-sm">{title}</h3>
      <p className="text-2xl font-semibold text-white mt-2">{value}</p>
    </div>
  );
}
