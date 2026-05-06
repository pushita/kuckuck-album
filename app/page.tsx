export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-900">
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-8 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-200">
        <h1 className="text-3xl font-semibold tracking-tight">Kuckuck Album</h1>
        <p className="text-zinc-600">
          Build your printable family photo album: Google login, photo upload,
          AI-assisted layout, and PDF export.
        </p>

        <section className="space-y-3">
          <h2 className="text-lg font-medium">Project Milestones</h2>
          <ol className="list-decimal space-y-2 pl-5 text-zinc-700">
            <li>Connect Supabase auth (Google OAuth).</li>
            <li>Upload photos to Supabase storage.</li>
            <li>Generate layout proposals with Claude API.</li>
            <li>Render printable pages and export to PDF.</li>
          </ol>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium">This Week</h2>
          <p className="text-zinc-700">
            Add your Supabase keys to <code>.env.local</code> based on{" "}
            <code>.env.example</code>, then we will wire Google login.
          </p>
        </section>
      </main>
    </div>
  );
}
