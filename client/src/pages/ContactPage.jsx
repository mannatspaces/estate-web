import { useState } from 'react';
import api from '../api/api';

function ContactPage() {
const [formData, setFormData] = useState({
name: '',
email: '',
phone: '',
message: ''
});

const [loading, setLoading] = useState(false);

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value
});
};

const handleSubmit = async (e) => {
e.preventDefault();

try {
  setLoading(true);

  await api.post('/contacts', formData);

  alert('Message sent successfully!');

  setFormData({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
} catch (error) {
  console.error(error);
  alert('Failed to send message');
} finally {
  setLoading(false);
}

};

return ( <section className="mx-auto max-w-6xl px-6 py-14"> <div className="grid gap-10 lg:grid-cols-[0.95fr_0.9fr]">

    <div className="glass-panel rounded-2xl p-10">
      <span className="section-heading">Contact</span>

      <h1 className="mt-4 text-4xl font-semibold text-white">
        Start your property journey today.
      </h1>

      <p className="mt-4 text-slate-600 leading-relaxed">
        Reach out with your budget and preferred neighborhood, and our expert team will personalize the best premium options for your next address.
      </p>

      <div className="mt-10 grid gap-4">

        <div className="rounded-xl bg-slate-950 p-6">
          <p className="text-sm text-slate-400">Head Office</p>
          <p className="mt-2 text-lg font-semibold text-white">
            Mannat Spaces
          </p>
          <p className="mt-1 text-slate-600">
            indore, Madhya Pradesh, India
          </p>
        </div>

        <div className="rounded-xl bg-slate-950 p-6">
          <p className="text-sm text-slate-400">Email</p>
          <p className="mt-2 text-lg text-white">
            mannatspaces1@gmail.com
          </p>
        </div>

        <div className="rounded-xl bg-slate-950 p-6">
          <p className="text-sm text-slate-400">Phone</p>
          <p className="mt-2 text-lg text-white">
            +91 82510 96645
          </p>
        </div>

      </div>
    </div>

    <form
      onSubmit={handleSubmit}
      className="glass-panel rounded-2xl p-10"
    >
      <div className="grid gap-6">

        <div>
          <label className="text-sm uppercase tracking-[0.25em] text-slate-400">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 border border-slate-700 px-4 py-3 text-white outline-none"
          />
        </div>

        <div>
          <label className="text-sm uppercase tracking-[0.25em] text-slate-400">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 border border-slate-700 px-4 py-3 text-white outline-none"
          />
        </div>

        <div>
          <label className="text-sm uppercase tracking-[0.25em] text-slate-400">
            Phone Number
          </label>

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter Phone Number"
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 border border-slate-700 px-4 py-3 text-white outline-none"
          />
        </div>

        <div>
          <label className="text-sm uppercase tracking-[0.25em] text-slate-400">
            Message
          </label>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Tell us what you need..."
            className="mt-3 min-h-[180px] w-full rounded-xl border border-slate-700bg-slate-950 border border-slate-700 px-4 py-4 text-white outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-accent px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-accent2"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>

      </div>
    </form>

  </div>
</section>
);
}

export default ContactPage;
