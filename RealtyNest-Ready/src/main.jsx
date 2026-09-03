import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const ADMIN = {
  id: "admin-1",
  name: "RealtyNest Admin",
  email: "admin@realtynest.com",
  password: "Admin@123",
  role: "admin"
};

const PROPERTY_IMAGES = [
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85"
];

const starterProperties = [
  {
    id: 1,
    title: "Modern 2 BHK Apartment",
    city: "Hyderabad",
    area: "Kondapur",
    type: "Apartment",
    purpose: "Sale",
    price: 7800000,
    beds: 2,
    baths: 2,
    sqft: 1250,
    image: PROPERTY_IMAGES[0],
    featured: true,
    owner: "RealtyNest Verified"
  },
  {
    id: 2,
    title: "Premium 3 BHK Villa",
    city: "Bengaluru",
    area: "Whitefield",
    type: "Villa",
    purpose: "Sale",
    price: 14500000,
    beds: 3,
    baths: 3,
    sqft: 2200,
    image: PROPERTY_IMAGES[2],
    featured: true,
    owner: "RealtyNest Verified"
  },
  {
    id: 3,
    title: "Fully Furnished 2 BHK",
    city: "Hyderabad",
    area: "Gachibowli",
    type: "Apartment",
    purpose: "Rent",
    price: 32000,
    beds: 2,
    baths: 2,
    sqft: 1150,
    image: PROPERTY_IMAGES[3],
    featured: true,
    owner: "RealtyNest Verified"
  },
  {
    id: 4,
    title: "Family 3 BHK Apartment",
    city: "Chennai",
    area: "OMR",
    type: "Apartment",
    purpose: "Sale",
    price: 9200000,
    beds: 3,
    baths: 2,
    sqft: 1600,
    image: PROPERTY_IMAGES[1],
    featured: false,
    owner: "RealtyNest Verified"
  },
  {
    id: 5,
    title: "Peaceful 1 BHK Home",
    city: "Pune",
    area: "Hinjewadi",
    type: "Apartment",
    purpose: "Rent",
    price: 18000,
    beds: 1,
    baths: 1,
    sqft: 700,
    image: PROPERTY_IMAGES[4],
    featured: false,
    owner: "RealtyNest Verified"
  },
  {
    id: 6,
    title: "Luxury 4 BHK Villa",
    city: "Hyderabad",
    area: "Jubilee Hills",
    type: "Villa",
    purpose: "Sale",
    price: 32500000,
    beds: 4,
    baths: 4,
    sqft: 3800,
    image: PROPERTY_IMAGES[5],
    featured: true,
    owner: "RealtyNest Verified"
  },
  {
    id: 7,
    title: "Budget 2 BHK Home",
    city: "Vijayawada",
    area: "Benz Circle",
    type: "Apartment",
    purpose: "Sale",
    price: 4600000,
    beds: 2,
    baths: 2,
    sqft: 1050,
    image: PROPERTY_IMAGES[0],
    featured: false,
    owner: "RealtyNest Verified"
  },
  {
    id: 8,
    title: "Cozy Studio Apartment",
    city: "Mumbai",
    area: "Andheri",
    type: "Studio",
    purpose: "Rent",
    price: 28000,
    beds: 1,
    baths: 1,
    sqft: 500,
    image: PROPERTY_IMAGES[3],
    featured: false,
    owner: "RealtyNest Verified"
  },
  {
    id: 9,
    title: "Elegant 3 BHK City Apartment",
    city: "Delhi",
    area: "Dwarka",
    type: "Apartment",
    purpose: "Sale",
    price: 11800000,
    beds: 3,
    baths: 3,
    sqft: 1750,
    image: PROPERTY_IMAGES[1],
    featured: true,
    owner: "RealtyNest Verified"
  },
  {
    id: 10,
    title: "Bright 2 BHK Rental Home",
    city: "Bengaluru",
    area: "Electronic City",
    type: "Apartment",
    purpose: "Rent",
    price: 24000,
    beds: 2,
    baths: 2,
    sqft: 1100,
    image: PROPERTY_IMAGES[2],
    featured: false,
    owner: "RealtyNest Verified"
  },
  {
    id: 11,
    title: "Sea Breeze 2 BHK Apartment",
    city: "Mumbai",
    area: "Powai",
    type: "Apartment",
    purpose: "Sale",
    price: 18500000,
    beds: 2,
    baths: 2,
    sqft: 1300,
    image: PROPERTY_IMAGES[0],
    featured: true,
    owner: "RealtyNest Verified"
  },
  {
    id: 12,
    title: "Affordable 2 BHK Flat",
    city: "Kolkata",
    area: "New Town",
    type: "Apartment",
    purpose: "Sale",
    price: 5900000,
    beds: 2,
    baths: 2,
    sqft: 1180,
    image: PROPERTY_IMAGES[4],
    featured: false,
    owner: "RealtyNest Verified"
  },
  {
    id: 13,
    title: "Modern 1 BHK for Professionals",
    city: "Pune",
    area: "Baner",
    type: "Apartment",
    purpose: "Rent",
    price: 22000,
    beds: 1,
    baths: 1,
    sqft: 650,
    image: PROPERTY_IMAGES[5],
    featured: false,
    owner: "RealtyNest Verified"
  },
  {
    id: 14,
    title: "Spacious 4 BHK Family Villa",
    city: "Chennai",
    area: "Adyar",
    type: "Villa",
    purpose: "Sale",
    price: 21500000,
    beds: 4,
    baths: 4,
    sqft: 3100,
    image: PROPERTY_IMAGES[5],
    featured: true,
    owner: "RealtyNest Verified"
  },
  {
    id: 15,
    title: "Compact Studio near Metro",
    city: "Delhi",
    area: "Saket",
    type: "Studio",
    purpose: "Rent",
    price: 26000,
    beds: 1,
    baths: 1,
    sqft: 520,
    image: PROPERTY_IMAGES[3],
    featured: false,
    owner: "RealtyNest Verified"
  },
  {
    id: 16,
    title: "Premium 3 BHK Apartment",
    city: "Hyderabad",
    area: "Madhapur",
    type: "Apartment",
    purpose: "Sale",
    price: 11200000,
    beds: 3,
    baths: 3,
    sqft: 1850,
    image: PROPERTY_IMAGES[1],
    featured: true,
    owner: "RealtyNest Verified"
  },
  {
    id: 17,
    title: "Quiet 2 BHK Rental Flat",
    city: "Ahmedabad",
    area: "Prahlad Nagar",
    type: "Apartment",
    purpose: "Rent",
    price: 21000,
    beds: 2,
    baths: 2,
    sqft: 1200,
    image: PROPERTY_IMAGES[4],
    featured: false,
    owner: "RealtyNest Verified"
  },
  {
    id: 18,
    title: "Independent 3 BHK House",
    city: "Vijayawada",
    area: "Mangalagiri",
    type: "Villa",
    purpose: "Sale",
    price: 8500000,
    beds: 3,
    baths: 3,
    sqft: 2100,
    image: PROPERTY_IMAGES[0],
    featured: true,
    owner: "RealtyNest Verified"
  },
  {
    id: 19,
    title: "Furnished 2 BHK Corporate Rental",
    city: "Bengaluru",
    area: "Marathahalli",
    type: "Apartment",
    purpose: "Rent",
    price: 35000,
    beds: 2,
    baths: 2,
    sqft: 1250,
    image: PROPERTY_IMAGES[2],
    featured: true,
    owner: "RealtyNest Verified"
  },
  {
    id: 20,
    title: "Large 4 BHK Premium Apartment",
    city: "Pune",
    area: "Kalyani Nagar",
    type: "Apartment",
    purpose: "Sale",
    price: 19500000,
    beds: 4,
    baths: 4,
    sqft: 2900,
    image: PROPERTY_IMAGES[2],
    featured: true,
    owner: "RealtyNest Verified"
  },
  {
    id: 21,
    title: "Starter 1 BHK Apartment",
    city: "Chennai",
    area: "Velachery",
    type: "Apartment",
    purpose: "Sale",
    price: 5200000,
    beds: 1,
    baths: 1,
    sqft: 680,
    image: PROPERTY_IMAGES[4],
    featured: false,
    owner: "RealtyNest Verified"
  },
  {
    id: 22,
    title: "Green View 2 BHK Home",
    city: "Kochi",
    area: "Kakkanad",
    type: "Apartment",
    purpose: "Sale",
    price: 6400000,
    beds: 2,
    baths: 2,
    sqft: 1320,
    image: PROPERTY_IMAGES[0],
    featured: false,
    owner: "RealtyNest Verified"
  },
  {
    id: 23,
    title: "Luxury 3 BHK Rental Residence",
    city: "Mumbai",
    area: "Thane",
    type: "Apartment",
    purpose: "Rent",
    price: 48000,
    beds: 3,
    baths: 3,
    sqft: 1700,
    image: PROPERTY_IMAGES[1],
    featured: true,
    owner: "RealtyNest Verified"
  },
  {
    id: 24,
    title: "Modern 3 BHK Family Home",
    city: "Jaipur",
    area: "Vaishali Nagar",
    type: "Villa",
    purpose: "Sale",
    price: 9800000,
    beds: 3,
    baths: 3,
    sqft: 2400,
    image: PROPERTY_IMAGES[5],
    featured: false,
    owner: "RealtyNest Verified"
  },
  {
    id: 25,
    title: "Smart 2 BHK Apartment",
    city: "Gurugram",
    area: "Sector 57",
    type: "Apartment",
    purpose: "Rent",
    price: 42000,
    beds: 2,
    baths: 2,
    sqft: 1280,
    image: PROPERTY_IMAGES[3],
    featured: true,
    owner: "RealtyNest Verified"
  },
  {
    id: 26,
    title: "Spacious 3 BHK Apartment",
    city: "Lucknow",
    area: "Gomti Nagar",
    type: "Apartment",
    purpose: "Sale",
    price: 7600000,
    beds: 3,
    baths: 2,
    sqft: 1650,
    image: PROPERTY_IMAGES[1],
    featured: false,
    owner: "RealtyNest Verified"
  },
  {
    id: 27,
    title: "Peaceful 2 BHK Rental Home",
    city: "Mysuru",
    area: "Vijayanagar",
    type: "Apartment",
    purpose: "Rent",
    price: 16000,
    beds: 2,
    baths: 2,
    sqft: 1050,
    image: PROPERTY_IMAGES[4],
    featured: false,
    owner: "RealtyNest Verified"
  },
  {
    id: 28,
    title: "Executive 3 BHK Villa",
    city: "Noida",
    area: "Sector 150",
    type: "Villa",
    purpose: "Sale",
    price: 13500000,
    beds: 3,
    baths: 3,
    sqft: 2350,
    image: PROPERTY_IMAGES[5],
    featured: true,
    owner: "RealtyNest Verified"
  },
  {
    id: 29,
    title: "Affordable 1 BHK Rental",
    city: "Nagpur",
    area: "Manish Nagar",
    type: "Apartment",
    purpose: "Rent",
    price: 14000,
    beds: 1,
    baths: 1,
    sqft: 620,
    image: PROPERTY_IMAGES[0],
    featured: false,
    owner: "RealtyNest Verified"
  },
  {
    id: 30,
    title: "Grand 5 BHK Luxury Villa",
    city: "Hyderabad",
    area: "Kokapet",
    type: "Villa",
    purpose: "Sale",
    price: 42000000,
    beds: 5,
    baths: 5,
    sqft: 5200,
    image: PROPERTY_IMAGES[5],
    featured: true,
    owner: "RealtyNest Verified"
  }
];

const readStore = (key, fallback) => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
};

const saveStore = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// Adds any new demo properties to an older browser save.
const loadProperties = () => {
  const saved = readStore("rn_properties", []);

  if (!Array.isArray(saved) || saved.length === 0) {
    return starterProperties;
  }

  const savedIds = new Set(saved.map((property) => property.id));
  const missingProperties = starterProperties.filter(
    (property) => !savedIds.has(property.id)
  );

  return [...saved, ...missingProperties];
};

const money = (amount, purpose) => {
  if (purpose === "Rent") return `₹${amount.toLocaleString("en-IN")}/month`;
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(2)} Cr`;
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(2)} L`;
  return `₹${amount.toLocaleString("en-IN")}`;
};

function App() {
  const [page, setPage] = useState("home");
  const [properties, setProperties] = useState(loadProperties);
  const [users, setUsers] = useState(() => readStore("rn_users", [ADMIN]));
  const [currentUser, setCurrentUser] = useState(() => readStore("rn_current_user", null));
  const [favorites, setFavorites] = useState(() => readStore("rn_favorites", []));
  const [inquiries, setInquiries] = useState(() => readStore("rn_inquiries", []));
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [toast, setToast] = useState("");

  useEffect(() => saveStore("rn_properties", properties), [properties]);
  useEffect(() => saveStore("rn_users", users), [users]);
  useEffect(() => saveStore("rn_current_user", currentUser), [currentUser]);
  useEffect(() => saveStore("rn_favorites", favorites), [favorites]);
  useEffect(() => saveStore("rn_inquiries", inquiries), [inquiries]);

  const notify = (message) => {
    setToast(message);
    window.clearTimeout(window.__rnToast);
    window.__rnToast = window.setTimeout(() => setToast(""), 2500);
  };

  const navigate = (nextPage) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const logout = () => {
    setCurrentUser(null);
    navigate("home");
    notify("You have been logged out.");
  };

  const toggleFavorite = (id) => {
    if (!currentUser) {
      notify("Please login to save a property.");
      navigate("login");
      return;
    }
    setFavorites((old) => old.includes(id) ? old.filter((item) => item !== id) : [...old, id]);
    notify(favorites.includes(id) ? "Removed from favorites." : "Saved to favorites.");
  };

  const sendInquiry = (property, message) => {
    if (!currentUser) {
      notify("Please login before contacting the owner.");
      navigate("login");
      return;
    }
    const inquiry = {
      id: Date.now(),
      propertyId: property.id,
      propertyTitle: property.title,
      userName: currentUser.name,
      userEmail: currentUser.email,
      message,
      status: "New",
      date: new Date().toLocaleDateString("en-IN")
    };
    setInquiries((old) => [inquiry, ...old]);
    setSelectedProperty(null);
    notify("Your inquiry was sent successfully.");
  };

  const addProperty = (property) => {
    setProperties((old) => [{ ...property, id: Date.now() }, ...old]);
    notify("Property added successfully.");
  };

  const updateProperty = (property) => {
    setProperties((old) => old.map((item) => item.id === property.id ? property : item));
    notify("Property updated successfully.");
  };

  const deleteProperty = (id) => {
    setProperties((old) => old.filter((item) => item.id !== id));
    setFavorites((old) => old.filter((item) => item !== id));
    notify("Property deleted successfully.");
  };

  const login = (email, password) => {
    const user = users.find((item) => item.email.toLowerCase() === email.trim().toLowerCase() && item.password === password);
    if (!user) return false;
    setCurrentUser(user);
    navigate(user.role === "admin" ? "admin" : "home");
    notify(`Welcome, ${user.name.split(" ")[0]}!`);
    return true;
  };

  const register = (newUser) => {
    const exists = users.some((item) => item.email.toLowerCase() === newUser.email.toLowerCase());
    if (exists) return { ok: false, message: "An account with this email already exists." };
    const user = { ...newUser, id: Date.now(), role: "user" };
    setUsers((old) => [...old, user]);
    setCurrentUser(user);
    navigate("home");
    notify("Account created successfully.");
    return { ok: true };
  };

  return (
    <>
      <Header currentUser={currentUser} navigate={navigate} logout={logout} />
      {page === "home" && <Home properties={properties} navigate={navigate} favorites={favorites} toggleFavorite={toggleFavorite} openProperty={setSelectedProperty} />}
      {page === "properties" && <PropertyBrowser properties={properties} favorites={favorites} toggleFavorite={toggleFavorite} openProperty={setSelectedProperty} />}
      {page === "login" && <Login onLogin={login} navigate={navigate} />}
      {page === "register" && <Register onRegister={register} navigate={navigate} />}
      {page === "favorites" && <Favorites properties={properties} favorites={favorites} toggleFavorite={toggleFavorite} openProperty={setSelectedProperty} navigate={navigate} />}
      {page === "about" && <About navigate={navigate} />}
      {page === "admin" && currentUser?.role === "admin" && <Admin properties={properties} users={users} inquiries={inquiries} setInquiries={setInquiries} addProperty={addProperty} updateProperty={updateProperty} deleteProperty={deleteProperty} notify={notify} />}
      {page === "admin" && currentUser?.role !== "admin" && <AccessDenied navigate={navigate} />}
      {selectedProperty && <PropertyModal property={selectedProperty} close={() => setSelectedProperty(null)} sendInquiry={sendInquiry} />}
      <Footer navigate={navigate} />
      {toast && <div className="toast">✓ {toast}</div>}
    </>
  );
}

function Header({ currentUser, navigate, logout }) {
  return (
    <header className="header">
      <div className="container nav">
        <button className="brand" onClick={() => navigate("home")}><span>⌂</span> Realty<span>Nest</span></button>
        <nav className="nav-links">
          <button onClick={() => navigate("home")}>Home</button>
          <button onClick={() => navigate("properties")}>Properties</button>
          <button onClick={() => navigate("about")}>About</button>
          {currentUser && <button onClick={() => navigate("favorites")}>♡ Favorites</button>}
          {currentUser?.role === "admin" && <button className="admin-link" onClick={() => navigate("admin")}>Admin</button>}
        </nav>
        <div className="nav-actions">
          {currentUser ? (
            <>
              <span className="user-chip">Hi, {currentUser.name.split(" ")[0]}</span>
              <button className="btn btn-outline" onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <button className="btn btn-outline" onClick={() => navigate("login")}>Login</button>
              <button className="btn btn-primary" onClick={() => navigate("register")}>Register</button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

function Home({ properties, navigate, favorites, toggleFavorite, openProperty }) {
  const [purpose, setPurpose] = useState("Sale");
  const [city, setCity] = useState("");
  const [type, setType] = useState("");

  const search = () => navigate("properties");

  return (
    <main>
      <section className="hero">
        <div className="hero-overlay">
          <div className="container hero-content">
            <p className="eyebrow">INDIA'S SMARTER PROPERTY PLATFORM</p>
            <h1>Find a place you'll <em>love to call home.</em></h1>
            <p className="hero-text">Buy, rent and discover beautiful homes across India's growing cities.</p>
            <div className="search-panel">
              <div className="search-tabs">
                <button className={purpose === "Sale" ? "active" : ""} onClick={() => setPurpose("Sale")}>Buy</button>
                <button className={purpose === "Rent" ? "active" : ""} onClick={() => setPurpose("Rent")}>Rent</button>
              </div>
              <div className="search-fields">
                <label>📍 City<select value={city} onChange={(e) => setCity(e.target.value)}><option value="">Any city</option><option>Hyderabad</option><option>Bengaluru</option><option>Chennai</option><option>Pune</option><option>Vijayawada</option><option>Mumbai</option><option>Delhi</option><option>Kolkata</option><option>Ahmedabad</option><option>Kochi</option><option>Jaipur</option><option>Gurugram</option><option>Lucknow</option><option>Mysuru</option><option>Noida</option><option>Nagpur</option></select></label>
                <label>🏠 Property type<select value={type} onChange={(e) => setType(e.target.value)}><option value="">Any type</option><option>Apartment</option><option>Villa</option><option>Studio</option></select></label>
                <button className="btn btn-primary search-button" onClick={search}>Search Homes →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">HANDPICKED FOR YOU</p><h2>Featured properties</h2></div><button className="text-button" onClick={() => navigate("properties")}>View all properties →</button></div>
          <div className="property-grid">
            {properties.filter((item) => item.featured).map((property) => <PropertyCard key={property.id} property={property} favorite={favorites.includes(property.id)} toggleFavorite={toggleFavorite} openProperty={openProperty} />)}
          </div>
        </div>
      </section>

      <section className="stats-section"><div className="container stats-grid"><Stat number="10K+" label="Happy customers" /><Stat number="2,500+" label="Active properties" /><Stat number="25+" label="Indian cities" /><Stat number="98%" label="Customer satisfaction" /></div></section>

      <section className="section light"><div className="container"><div className="center-heading"><p className="eyebrow">WHY REALTYNEST</p><h2>Simple. Safe. Human.</h2><p>Built to make property searching less stressful and more personal.</p></div><div className="feature-grid"><Feature icon="✓" title="Verified listings" text="Search properties with clear information and transparent details." /><Feature icon="₹" title="Indian pricing" text="See familiar prices in Lakhs, Crores and monthly rent." /><Feature icon="♡" title="Human touch" text="A simple interface that keeps real people at the center." /></div></div></section>
    </main>
  );
}

function Stat({ number, label }) { return <div className="stat"><strong>{number}</strong><span>{label}</span></div>; }
function Feature({ icon, title, text }) { return <div className="feature-card"><div className="feature-icon">{icon}</div><h3>{title}</h3><p>{text}</p></div>; }

function PropertyBrowser({ properties, favorites, toggleFavorite, openProperty }) {
  const [query, setQuery] = useState("");
  const [purpose, setPurpose] = useState("All");
  const [type, setType] = useState("All");
  const [city, setCity] = useState("All");
  const [maxPrice, setMaxPrice] = useState("");

  const filtered = useMemo(() => properties.filter((property) => {
    const text = `${property.title} ${property.city} ${property.area}`.toLowerCase();
    return (!query || text.includes(query.toLowerCase())) && (purpose === "All" || property.purpose === purpose) && (type === "All" || property.type === type) && (city === "All" || property.city === city) && (!maxPrice || property.price <= Number(maxPrice));
  }), [properties, query, purpose, type, city, maxPrice]);

  return (
    <main className="page"><div className="container"><div className="page-title"><div><p className="eyebrow">EXPLORE HOMES</p><h1>Find your next home</h1><p>{filtered.length} properties available</p></div></div>
      <div className="filterbar"><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search city, area or property..." /><select value={purpose} onChange={(e) => setPurpose(e.target.value)}><option>All</option><option>Sale</option><option>Rent</option></select><select value={city} onChange={(e) => setCity(e.target.value)}><option>All</option><option>Hyderabad</option><option>Bengaluru</option><option>Chennai</option><option>Pune</option><option>Vijayawada</option><option>Mumbai</option><option>Delhi</option><option>Kolkata</option><option>Ahmedabad</option><option>Kochi</option><option>Jaipur</option><option>Gurugram</option><option>Lucknow</option><option>Mysuru</option><option>Noida</option><option>Nagpur</option></select><select value={type} onChange={(e) => setType(e.target.value)}><option>All</option><option>Apartment</option><option>Villa</option><option>Studio</option></select><select value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}><option value="">Any budget</option><option value="5000000">Under ₹50 L</option><option value="10000000">Under ₹1 Cr</option><option value="20000000">Under ₹2 Cr</option></select></div>
      {filtered.length ? <div className="property-grid">{filtered.map((property) => <PropertyCard key={property.id} property={property} favorite={favorites.includes(property.id)} toggleFavorite={toggleFavorite} openProperty={openProperty} />)}</div> : <div className="empty"><h2>No properties found</h2><p>Try changing your filters.</p></div>}
    </div></main>
  );
}

function PropertyCard({ property, favorite, toggleFavorite, openProperty }) {
  return <article className="property-card"><div className="property-image"><img src={property.image} alt={property.title} onError={(e) => { e.currentTarget.src = PROPERTY_IMAGES[0]; }} /><span className="badge">{property.purpose === "Sale" ? "FOR SALE" : "FOR RENT"}</span><button className={`favorite ${favorite ? "saved" : ""}`} onClick={() => toggleFavorite(property.id)}>{favorite ? "♥" : "♡"}</button></div><div className="property-body"><p className="location">📍 {property.area}, {property.city}</p><h3>{property.title}</h3><div className="property-meta"><span>🛏 {property.beds} Beds</span><span>♨ {property.baths} Baths</span><span>▦ {property.sqft} sq.ft</span></div><div className="price-row"><strong>{money(property.price, property.purpose)}</strong><button onClick={() => openProperty(property)}>View details</button></div></div></article>;
}

function Login({ onLogin, navigate }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const next = {};
    if (!/^\S+@\S+\.\S{2,}$/.test(email.trim())) next.email = "Enter a valid email address.";
    if (!/^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(password)) next.password = "Password must be 6+ characters and contain a number.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    if (!onLogin(email, password)) setErrors({ login: "Invalid email or password." });
  };

  return <main className="auth-page"><div className="auth-card"><div className="auth-brand">⌂ Realty<span>Nest</span></div><h1>Welcome back</h1><p className="auth-subtitle">Login to manage your property journey.</p><form onSubmit={submit}><div className="form-group"><label>Email</label><input name="email" type="email" value={email} onChange={(e) => { setEmail(e.target.value); setErrors({}); }} placeholder="admin@realtynest.com" />{errors.email && <small className="error">{errors.email}</small>}</div><div className="form-group"><label>Password</label><input name="password" type="password" value={password} onChange={(e) => { setPassword(e.target.value); setErrors({}); }} placeholder="Admin@123" />{errors.password && <small className="error">{errors.password}</small>}</div>{errors.login && <div className="login-error">{errors.login}</div>}<button className="btn btn-primary full" type="submit">Login</button></form><div className="demo-box"><b>Demo Admin Login</b><br />admin@realtynest.com<br />Admin@123</div><p className="auth-footer">New to RealtyNest? <button onClick={() => navigate("register")}>Create an account</button></p></div></main>;
}

function Register({ onRegister, navigate }) {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [errors, setErrors] = useState({});

  const change = (e) => setForm((old) => ({ ...old, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (!/^[A-Za-z ]{3,40}$/.test(form.name.trim())) next.name = "Name should contain 3-40 letters.";
    if (!/^\S+@\S+\.\S{2,}$/.test(form.email.trim())) next.email = "Enter a valid email address.";
    if (!/^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(form.password)) next.password = "Password must be 6+ characters and contain a number.";
    if (form.password !== form.confirm) next.confirm = "Passwords do not match.";
    setErrors(next);
    if (Object.keys(next).length) return;
    const result = onRegister({ name: form.name.trim(), email: form.email.trim().toLowerCase(), password: form.password });
    if (!result.ok) setErrors({ email: result.message });
  };

  return <main className="auth-page"><div className="auth-card"><div className="auth-brand">⌂ Realty<span>Nest</span></div><h1>Create your account</h1><p className="auth-subtitle">Start your property journey with RealtyNest.</p><form onSubmit={submit}><FormInput label="Full name" name="name" value={form.name} onChange={change} error={errors.name} /><FormInput label="Email" name="email" type="email" value={form.email} onChange={change} error={errors.email} /><FormInput label="Password" name="password" type="password" value={form.password} onChange={change} error={errors.password} /><FormInput label="Confirm password" name="confirm" type="password" value={form.confirm} onChange={change} error={errors.confirm} /><button className="btn btn-primary full" type="submit">Create account</button></form><p className="auth-footer">Already registered? <button onClick={() => navigate("login")}>Login</button></p></div></main>;
}

function FormInput({ label, name, type = "text", value, onChange, error }) { return <div className="form-group"><label>{label}</label><input name={name} type={type} value={value} onChange={onChange} />{error && <small className="error">{error}</small>}</div>; }

function Favorites({ properties, favorites, toggleFavorite, openProperty, navigate }) {
  const saved = properties.filter((property) => favorites.includes(property.id));
  return <main className="page"><div className="container"><div className="page-title"><div><p className="eyebrow">YOUR COLLECTION</p><h1>Saved properties</h1><p>{saved.length} saved properties</p></div></div>{saved.length ? <div className="property-grid">{saved.map((property) => <PropertyCard key={property.id} property={property} favorite={true} toggleFavorite={toggleFavorite} openProperty={openProperty} />)}</div> : <div className="empty"><h2>No saved properties yet</h2><p>Explore homes and click the heart icon to save them.</p><button className="btn btn-primary" onClick={() => navigate("properties")}>Explore properties</button></div>}</div></main>;
}

function About({ navigate }) { return <main className="page"><div className="container about"><p className="eyebrow">ABOUT REALTYNEST</p><h1>Property search with a human touch.</h1><p>RealtyNest is a beginner-friendly property buying and rental platform concept created with React, JavaScript and CSS. It focuses on simple navigation, Indian pricing and practical features for buyers, renters and administrators.</p><div className="about-grid"><Feature icon="🏠" title="For buyers" text="Discover homes with location, price, size and property type." /><Feature icon="🔑" title="For renters" text="Find monthly rental options without complicated screens." /><Feature icon="🛠" title="For admins" text="Manage properties and customer inquiries from one dashboard." /></div><button className="btn btn-primary" onClick={() => navigate("properties")}>Start exploring</button></div></main>; }

function PropertyModal({ property, close, sendInquiry }) {
  const [message, setMessage] = useState(`Hi, I am interested in the ${property.title}. Please share more details.`);
  return <div className="modal-backdrop" onMouseDown={close}><div className="modal" onMouseDown={(e) => e.stopPropagation()}><button className="modal-close" onClick={close}>×</button><img src={property.image} alt={property.title} /><div className="modal-content"><span className="badge inline">{property.purpose === "Sale" ? "FOR SALE" : "FOR RENT"}</span><p className="location">📍 {property.area}, {property.city}</p><h2>{property.title}</h2><strong className="modal-price">{money(property.price, property.purpose)}</strong><div className="modal-meta"><span>🛏 {property.beds} Bedrooms</span><span>♨ {property.baths} Bathrooms</span><span>▦ {property.sqft} sq.ft</span></div><p>Verified RealtyNest listing with clear property information and a simple contact process.</p><label>Message to owner<textarea value={message} onChange={(e) => setMessage(e.target.value)} /></label><button className="btn btn-primary full" onClick={() => sendInquiry(property, message)}>Contact owner</button></div></div></div>;
}

function Admin({ properties, users, inquiries, setInquiries, addProperty, updateProperty, deleteProperty, notify }) {
  const [tab, setTab] = useState("dashboard");
  const [editing, setEditing] = useState(null);

  const markInquiry = (id, status) => setInquiries((old) => old.map((item) => item.id === id ? { ...item, status } : item));
  const removeInquiry = (id) => { setInquiries((old) => old.filter((item) => item.id !== id)); notify("Inquiry removed."); };

  return <main className="admin-page"><div className="container admin-layout"><aside className="admin-sidebar"><div className="admin-title"><span>⌂</span><div><b>RealtyNest</b><small>Admin Panel</small></div></div><button className={tab === "dashboard" ? "active" : ""} onClick={() => setTab("dashboard")}>▦ Dashboard</button><button className={tab === "properties" ? "active" : ""} onClick={() => { setTab("properties"); setEditing(null); }}>🏠 Properties</button><button className={tab === "add" ? "active" : ""} onClick={() => { setTab("add"); setEditing(null); }}>＋ Add Property</button><button className={tab === "inquiries" ? "active" : ""} onClick={() => setTab("inquiries")}>✉ Inquiries <span>{inquiries.length}</span></button><button className={tab === "users" ? "active" : ""} onClick={() => setTab("users")}>♙ Users</button></aside><section className="admin-content"><div className="admin-top"><div><p className="eyebrow">CONTROL CENTER</p><h1>Admin Dashboard</h1></div><span className="admin-status">● System Online</span></div>{tab === "dashboard" && <AdminDashboard properties={properties} users={users} inquiries={inquiries} setTab={setTab} />}{tab === "properties" && <AdminProperties properties={properties} edit={setEditing} remove={deleteProperty} setTab={setTab} />}{tab === "add" && <PropertyForm onSave={addProperty} onCancel={() => setTab("properties")} />}{tab === "inquiries" && <AdminInquiries inquiries={inquiries} mark={markInquiry} remove={removeInquiry} />}{tab === "users" && <AdminUsers users={users} />}{editing && tab === "properties" && <div className="edit-overlay"><PropertyForm initial={editing} onSave={(item) => { updateProperty(item); setEditing(null); }} onCancel={() => setEditing(null)} /></div>}</section></div></main>;
}

function AdminDashboard({ properties, users, inquiries, setTab }) { const sale = properties.filter((p) => p.purpose === "Sale").length; const rent = properties.filter((p) => p.purpose === "Rent").length; return <div><div className="dashboard-cards"><Metric icon="🏠" number={properties.length} label="Total Properties" /><Metric icon="🔑" number={sale} label="For Sale" /><Metric icon="🏷" number={rent} label="For Rent" /><Metric icon="✉" number={inquiries.length} label="Inquiries" /><Metric icon="♙" number={users.length} label="Registered Users" /></div><div className="admin-grid"><div className="admin-panel"><div className="panel-head"><h2>Quick actions</h2></div><div className="quick-actions"><button onClick={() => setTab("add")}>＋ Add new property</button><button onClick={() => setTab("properties")}>🏠 Manage properties</button><button onClick={() => setTab("inquiries")}>✉ Review inquiries</button></div></div><div className="admin-panel"><div className="panel-head"><h2>Platform summary</h2></div><div className="summary-row"><span>Properties listed</span><b>{properties.length}</b></div><div className="summary-row"><span>Sale listings</span><b>{sale}</b></div><div className="summary-row"><span>Rental listings</span><b>{rent}</b></div><div className="summary-row"><span>Customer inquiries</span><b>{inquiries.length}</b></div></div></div></div>; }
function Metric({ icon, number, label }) { return <div className="metric"><div>{icon}</div><strong>{number}</strong><span>{label}</span></div>; }

function AdminProperties({ properties, edit, remove, setTab }) { return <div className="admin-panel"><div className="panel-head"><div><h2>Property Management</h2><p>Add, edit and remove property listings.</p></div><button className="btn btn-primary" onClick={() => setTab("add")}>＋ Add Property</button></div><div className="table-wrap"><table><thead><tr><th>Property</th><th>Location</th><th>Purpose</th><th>Price</th><th>Actions</th></tr></thead><tbody>{properties.map((p) => <tr key={p.id}><td><div className="table-property"><img src={p.image} alt="" /><div><b>{p.title}</b><small>{p.type} · {p.beds} BHK · {p.sqft} sq.ft</small></div></div></td><td>{p.area}, {p.city}</td><td><span className="status">{p.purpose}</span></td><td><b>{money(p.price, p.purpose)}</b></td><td><div className="action-buttons"><button onClick={() => edit(p)}>Edit</button><button className="danger" onClick={() => { if (window.confirm(`Delete ${p.title}?`)) remove(p.id); }}>Delete</button></div></td></tr>)}</tbody></table></div></div>; }

function PropertyForm({ initial, onSave, onCancel }) { const [form, setForm] = useState(initial || { title: "", city: "Hyderabad", area: "", type: "Apartment", purpose: "Sale", price: "", beds: 2, baths: 2, sqft: 1000, image: PROPERTY_IMAGES[0], featured: false, owner: "RealtyNest Verified" }); const [error, setError] = useState(""); const change = (e) => setForm((old) => ({ ...old, [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value })); const submit = (e) => { e.preventDefault(); if (!form.title.trim() || !form.area.trim() || Number(form.price) <= 0 || Number(form.sqft) <= 0) { setError("Please fill all required fields with valid values."); return; } onSave({ ...form, title: form.title.trim(), area: form.area.trim(), price: Number(form.price), beds: Number(form.beds), baths: Number(form.baths), sqft: Number(form.sqft) }); }; return <div className="form-panel"><div className="panel-head"><div><p className="eyebrow">PROPERTY FORM</p><h2>{initial ? "Edit Property" : "Add New Property"}</h2></div><button className="close-text" onClick={onCancel}>Cancel</button></div><form onSubmit={submit}><div className="form-grid"><div className="form-group full-col"><label>Property title *</label><input name="title" value={form.title} onChange={change} placeholder="Example: Spacious 3 BHK Apartment" /></div><div className="form-group"><label>City *</label><select name="city" value={form.city} onChange={change}><option>Hyderabad</option><option>Bengaluru</option><option>Chennai</option><option>Pune</option><option>Vijayawada</option><option>Mumbai</option><option>Delhi</option><option>Kolkata</option><option>Ahmedabad</option><option>Kochi</option><option>Jaipur</option><option>Gurugram</option><option>Lucknow</option><option>Mysuru</option><option>Noida</option><option>Nagpur</option></select></div><div className="form-group"><label>Area *</label><input name="area" value={form.area} onChange={change} placeholder="Kondapur" /></div><div className="form-group"><label>Type</label><select name="type" value={form.type} onChange={change}><option>Apartment</option><option>Villa</option><option>Studio</option></select></div><div className="form-group"><label>Purpose</label><select name="purpose" value={form.purpose} onChange={change}><option>Sale</option><option>Rent</option></select></div><div className="form-group"><label>Price ₹ *</label><input name="price" type="number" min="1" value={form.price} onChange={change} placeholder="7800000" /></div><div className="form-group"><label>Bedrooms</label><input name="beds" type="number" min="1" value={form.beds} onChange={change} /></div><div className="form-group"><label>Bathrooms</label><input name="baths" type="number" min="1" value={form.baths} onChange={change} /></div><div className="form-group"><label>Area (sq.ft)</label><input name="sqft" type="number" min="100" value={form.sqft} onChange={change} /></div><div className="form-group full-col"><label>Photo URL</label><input name="image" value={form.image} onChange={change} placeholder="https://..." /></div><div className="checkbox-row"><input id="featured" name="featured" type="checkbox" checked={form.featured} onChange={change} /><label htmlFor="featured">Show this property as featured</label></div></div>{error && <div className="login-error">{error}</div>}<div className="form-actions"><button type="button" className="btn btn-outline" onClick={onCancel}>Cancel</button><button className="btn btn-primary" type="submit">{initial ? "Save Changes" : "Add Property"}</button></div></form></div>; }

function AdminInquiries({ inquiries, mark, remove }) { return <div className="admin-panel"><div className="panel-head"><div><h2>Customer Inquiries</h2><p>Review messages from interested customers.</p></div></div>{inquiries.length ? <div className="inquiry-list">{inquiries.map((item) => <div className="inquiry" key={item.id}><div className="inquiry-head"><div><b>{item.userName}</b><small>{item.userEmail} · {item.date}</small></div><span className={`inquiry-status ${item.status.toLowerCase()}`}>{item.status}</span></div><h3>{item.propertyTitle}</h3><p>{item.message}</p><div className="action-buttons"><button onClick={() => mark(item.id, "Contacted")}>Mark Contacted</button><button className="danger" onClick={() => remove(item.id)}>Remove</button></div></div>)}</div> : <div className="empty compact"><h3>No inquiries yet</h3><p>Customer messages will appear here.</p></div>}</div>; }
function AdminUsers({ users }) { return <div className="admin-panel"><div className="panel-head"><div><h2>Registered Users</h2><p>Users currently stored in this demo application.</p></div></div><div className="table-wrap"><table><thead><tr><th>Name</th><th>Email</th><th>Role</th></tr></thead><tbody>{users.map((user) => <tr key={user.id}><td>{user.name}</td><td>{user.email}</td><td><span className="status">{user.role}</span></td></tr>)}</tbody></table></div></div>; }

function AccessDenied({ navigate }) { return <main className="page"><div className="container empty"><h1>Admin access required</h1><p>Please login using the demo admin account.</p><button className="btn btn-primary" onClick={() => navigate("login")}>Go to Login</button></div></main>; }
function Footer({ navigate }) { return <footer className="footer"><div className="container footer-grid"><div><button className="brand footer-brand" onClick={() => navigate("home")}>⌂ Realty<span>Nest</span></button><p>A simple property buying and rental platform built with beginner-friendly React.</p></div><div><h4>Explore</h4><button onClick={() => navigate("properties")}>Properties</button><button onClick={() => navigate("about")}>About us</button></div><div><h4>Account</h4><button onClick={() => navigate("login")}>Login</button><button onClick={() => navigate("register")}>Register</button></div></div><div className="container footer-bottom">© 2026 RealtyNest. Project demo for educational use.</div></footer>; }

createRoot(document.getElementById("root")).render(<App />);
