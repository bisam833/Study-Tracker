import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <div className="flex-1 p-8 bg-gray-950 text-white">
      <h1 className="text-3xl font-bold mb-8">
        Dashboard 👋
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <StatCard title="Total Study Hours" value="42 hrs" />
        <StatCard title="Weekly Goal" value="18 / 25 hrs" />
        <StatCard title="Current Streak" value="6 Days 🔥" />
      </div>
    </div>
  );
}
