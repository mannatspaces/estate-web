import { useEffect, useState } from 'react';
import api from '../../api/api';

function AdminPropertyForm({ selectedProperty, onSave, onCancel }) {
  const [form, setForm] = useState({
    title: '',
    type: 'Residential',
    location: '',
    neighborhood: '',
    price: '',
    area: '',
    status: 'For Sale',
    agentName: '',
    agentPhone: '',
    description: '',
    image: '',
    gallery: [],
    tag: 'Featured',
    featured: true
  });

  useEffect(() => {
    if (selectedProperty) {
      setForm({
        title: selectedProperty.title || '',
        type: selectedProperty.type || 'Residential',
        location: selectedProperty.location || '',
        neighborhood: selectedProperty.neighborhood || '',
        price: selectedProperty.price || '',
        area: selectedProperty.area || '',
        status: selectedProperty.status || 'For Sale',
        agentName: selectedProperty.agent?.name || '',
        agentPhone: selectedProperty.agent?.phone || '',
        description: selectedProperty.description || '',
        image: selectedProperty.image || '',
        gallery: selectedProperty.gallery || [],
        tag: selectedProperty.tag || 'Featured',
        featured: selectedProperty.featured ?? true
      });
    }
  }, [selectedProperty]);

  const updateField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleImageUpload = async (event) => {
  try {
    const files = Array.from(event.target.files);

    const uploadedImages = [];

    for (const file of files) {
      const formData = new FormData();
      formData.append('image', file);

      const response = await api.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      uploadedImages.push(response.data.url);
    }

    updateField('gallery', uploadedImages);

    if (uploadedImages.length > 0) {
      updateField('image', uploadedImages[0]);
    }

    alert('Images uploaded successfully');
  } catch (error) {
    console.error(error);
    alert('Image upload failed');
  }
};
const handleSubmit = (event) => {
  event.preventDefault();

  console.log('FORM IMAGE =', form.image);
  console.log('FORM GALLERY =', form.gallery);
  console.log('FULL FORM =', form);

  if (!form.title || !form.location || !form.price) {
    alert('Please fill required fields');
    return;
  }

  const propertyPayload = {
    ...selectedProperty,
    ...(selectedProperty?._id && { _id: selectedProperty._id }),
    title: form.title,
    type: form.type,
    location: form.location,
    neighborhood: form.neighborhood,
    price: Number(form.price),
    area: Number(form.area),
    status: form.status,
    description: form.description,
    image: form.image,
    gallery: form.gallery,
    tag: form.tag,
    featured: form.featured,
    agent: {
      name: form.agentName,
      phone: form.agentPhone,
      email: form.agentName
        ? `${form.agentName.toLowerCase().replace(/\s+/g, '.')}@mannatspaces.in`
        : 'agent@mannatspaces.in'
    }
  };

  console.log('PROPERTY PAYLOAD =', propertyPayload);

  onSave(propertyPayload);
  onCancel();
};

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <input value={form.title} onChange={(e) => updateField('title', e.target.value)} placeholder="Property title" className="rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none" />
        <input value={form.location} onChange={(e) => updateField('location', e.target.value)} placeholder="City or area" className="rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input value={form.neighborhood} onChange={(e) => updateField('neighborhood', e.target.value)} placeholder="Neighborhood" className="rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none" />
        <select value={form.type} onChange={(e) => updateField('type', e.target.value)} className="rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none">
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
          <option value="Plot">Plot</option>
        </select>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input value={form.price} onChange={(e) => updateField('price', e.target.value)} type="number" placeholder="Price (₹)" className="rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none" />
        <input value={form.area} onChange={(e) => updateField('area', e.target.value)} type="number" placeholder="Area (sqft)" className="rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <select value={form.status} onChange={(e) => updateField('status', e.target.value)} className="rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none">
          <option value="For Sale">For Sale</option>
          <option value="For Lease">For Lease</option>
        </select>
        <select value={form.tag} onChange={(e) => updateField('tag', e.target.value)} className="rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none">
          <option value="Featured">Featured</option>
          <option value="Luxury">Luxury</option>
          <option value="Elite">Elite</option>
        </select>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input value={form.agentName} onChange={(e) => updateField('agentName', e.target.value)} placeholder="Agent name" className="rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none" />
        <input value={form.agentPhone} onChange={(e) => updateField('agentPhone', e.target.value)} placeholder="Agent phone" className="rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none" />
      </div>
      <textarea value={form.description} onChange={(e) => updateField('description', e.target.value)} rows="4" placeholder="Property description" className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none" />
      <div className="space-y-2">
        <label className="text-sm text-slate-400">Upload listing photos</label>
        <input type="file" accept="image/*" multiple onChange={handleImageUpload} className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none" />
      </div>
      <div className="flex flex-wrap gap-3">
        {form.gallery.map((item, index) => (
          <img key={index} src={item} alt={`Preview ${index + 1}`} className="h-20 w-28 rounded-3xl object-cover" />
        ))}
      </div>
      <div className="flex items-center gap-3">
        <button type="submit" className="rounded-3xl bg-accent px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-accent2">Save Listing</button>
        <button type="button" onClick={onCancel} className="rounded-3xl border border-white/10 bg-slate-950/70 px-5 py-3 text-sm text-slate-200 transition hover:border-slate-200">Cancel</button>
      </div>
    </form>
  );
}
export default AdminPropertyForm;
