# MannatSpaces - Premium Real Estate Platform 🏙️

## 🚀 Project Overview
MannatSpaces is now scaffolded as a modern React + Tailwind frontend with a Node.js + Express backend and MongoDB-ready data models. The website is designed around a luxury dark blue glassmorphism aesthetic, fully responsive layouts, animated hover states, advanced filters, and SEO-friendly structure.

## 🧱 Project Structure
- `client/` — React + Vite + Tailwind frontend
- `server/` — Express backend with MongoDB models and auth routes
- `.gitignore` — ignores node_modules and environment files

## 🏁 Quick Start
1. Install frontend dependencies:
   ```bash
   cd client
   npm install
   ```
2. Install backend dependencies:
   ```bash
   cd ../server
   npm install
   ```
3. Start the frontend and backend locally:
   ```bash
   cd ../client
   npm run dev
   ```
   ```bash
   cd ../server
   npm run dev
   ```
4. Copy `.env.example` to `.env` in `server/` and configure `MONGODB_URI` and `JWT_SECRET`.

---

## 🎯 Features

### 👥 Public Features
- 🏘️ **Browse Properties**: View all listed properties with detailed information
- 🔍 **Search & Filter**: Search by property name/location and filter by type, budget, or neighborhood
- 📋 **Property Details**: Click on any property to view complete details including price, area, description
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

### 👨‍💼 Admin Features
- 🔐 **Admin Dashboard**: Manage listings from a secure panel
- ➕ **Add Properties**: Create new property cards with price, area, type, location, and agent details
- 📊 **Portfolio Summary**: View total properties and portfolio value

---

## 🔑 Admin Login Credentials
- **Default Password**: `MannatSpaces@123`
- ⚠️ **Important**: Change this password in `app.js` for security

---

## 📂 File Structure

```
/Users/vanshgupta/mannatspaces/
├── index.html          # Main HTML file (Public & Admin UI)
├── styles.css          # Styling for the entire website
├── app.js              # JavaScript for functionality
└── README.md           # This file
```

---

## 🚀 How to Use

### 1. **Public View (Customer)**
   - Open `index.html` in your browser
   - Browse all listed properties
   - Use search and filter options to find properties
   - Click on any property card to view detailed information

### 2. **Admin Panel (Admin)**
   - Click "Admin Panel" button in the top right
   - Enter the admin password: `MannatSpaces@123`
   - **Add Property**: Fill the form with property details and click "Add Property"
   - **Edit Property**: Click "Edit" on any property to modify its details
   - **Delete Property**: Click "Delete" to remove a property
   - **Logout**: Click "Logout" to exit the admin panel

---

## 💾 Data Storage

All properties are stored in **browser's localStorage**, which means:
- ✅ Data persists even after closing the browser
- ✅ No backend server needed
- ⚠️ Data is local to each browser/device
- 💡 For production, consider integrating a backend database

---

## 🎨 Customization

### Change Admin Password
Edit `app.js` and find this line:
```javascript
const ADMIN_PASSWORD = "admin@123";
```
Replace `"admin@123"` with your desired password.

### Customize Colors
Edit `styles.css` and modify the CSS variables:
```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    --success-color: #27ae60;
}
```

### Add Sample Properties
In `app.js`, uncomment this line at the end:
```javascript
addSampleProperties();
```

---

## 📱 Property Types
- 🏠 **Residential**: Apartments, Villas, Houses
- 🏢 **Commercial**: Office Spaces, Shops, Warehouses
- 💼 **Investment**: Plots, Development Projects

---

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients, flexbox, grid
- **JavaScript (Vanilla)**: No frameworks needed
- **LocalStorage**: Client-side data persistence

### Browser Compatibility
- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

---

## 📱 Responsive Design
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

---

## 🎯 Property Fields

Each property contains:
- 📝 **Name**: Property name/title
- 📍 **Location**: Address/locality
- 🏷️ **Type**: Residential, Commercial, or Investment
- 💰 **Price**: In Indian Rupees (₹)
- 📐 **Area**: In square feet (sq ft)
- 📄 **Description**: Detailed property information
- 🖼️ **Image URL**: Property image link (optional)

---

## 💡 Tips for Getting Started

1. **First Time**: Click "Admin Panel" and add some properties
2. **Test Search**: Search for property names or locations
3. **Test Filter**: Filter by property type
4. **Mobile View**: Test on different screen sizes
5. **Share**: Share the public link with customers

---

## 🚀 Future Enhancements

Consider adding:
- Backend database (MongoDB, Firebase)
- User authentication system
- Property viewing requests
- Advanced filters (price range, area range)
- Image upload functionality
- Email notifications
- Admin dashboard analytics
- Multiple admin users

---

## 📞 Support

For any issues or questions, please feel free to modify the code or add features as needed!

---

## 🎉 Happy Property Dealing!

**MannatSpaces** - Connecting Dreams with the Right Address 🏠✨

---

*Created with ❤️ for MannatSpaces*
