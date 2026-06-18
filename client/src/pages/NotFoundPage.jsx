import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-semibold text-white">404</h1>
      <p className="mt-4 text-xl text-slate-300">The property page you are looking for cannot be found.</p>
      <Link to="/" className="mt-8 inline-flex rounded-full bg-accent px-7 py-4 text-sm font-semibold text-slate-950 hover:bg-accent2">
        Return to Home
      </Link>
    </section>
  );
}

export default NotFoundPage;
