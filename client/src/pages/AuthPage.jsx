import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User, Phone, Loader2, Home } from "lucide-react";
import api from "../api/api";

const AuthPage = () => {
  const navigate = useNavigate();
  
  // Tab State: "login" or "signup"
  const [isLogin, setIsLogin] = useState(true);
  
  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    password: "",
  });
  
  // UI States
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Input Change Handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  // Form Validation
  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setError("Please fill in all required fields.");
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }

    if (!isLogin) {
      if (!formData.fullName) {
        setError("Full Name is required.");
        return false;
      }
      if (!formData.mobile) {
        setError("Mobile number is required.");
        return false;
      }
      const mobileRegex = /^[0-9]{10}$/;
      if (!mobileRegex.test(formData.mobile.replace(/[- ]/g, ""))) {
        setError("Please enter a valid 10-digit mobile number.");
        return false;
      }
    }

    return true;
  };

  // Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      if (isLogin) {
        // Login API Request
        const response = await api.post("/auth/login", {
          email: formData.email,
          password: formData.password,
        });

        if (response.data && response.data.token) {
          localStorage.setItem(
  "mannatspaces-user-token",
  response.data.token
);

localStorage.setItem(
  "mannatspaces-user",
  JSON.stringify(response.data.user)
);

window.dispatchEvent(new Event("storage"));

setSuccess("Login Successful");

setTimeout(() => {
  navigate("/");
  window.location.reload();
},800);
        } else {
          setError("Invalid response from server. Please try again.");
        }
      } else {
        // Signup API Request
        const response = await api.post("/auth/register", {
          fullName: formData.fullName,
          mobile: formData.mobile,
          email: formData.email,
          password: formData.password,
        });

        if (response.status === 200 || response.status === 201 || response.data.message === "Registered successfully") {
          setSuccess("Registration successful! Please login to continue.");
          // Clear non-essential fields and switch to login tab
          setFormData((prev) => ({
            ...prev,
            fullName: "",
            mobile: "",
          }));
          setTimeout(() => {
            setIsLogin(true);
            setSuccess("");
          }, 2000);
        }
      }
    } catch (err) {
      console.error("Authentication Error:", err);
      setError(
        err.response?.data?.message || 
        err.response?.data?.error || 
        "Something went wrong. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-[#030712] overflow-hidden font-sans px-4 sm:px-6 lg:px-8">
      {/* Premium Background Ambient Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] left-[35%] w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative w-full max-w-md z-10">
        
        {/* Brand Header */}
        <div className="flex flex-col items-center justify-center mb-8 animate-fade-in">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-[0_0_30px_rgba(37,99,235,0.3)] mb-3 border border-blue-400/20">
            <Home className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            MannatSpaces
          </h1>
          <p className="text-sm text-slate-400 mt-1.5 font-medium tracking-wide">
            {isLogin ? "Welcome back to luxury estate management" : "Begin your premium estate journey"}
          </p>
        </div>

        {/* Premium Dark Glassmorphic Card */}
        <div className="w-full bg-slate-900/40 backdrop-blur-xl border border-slate-800/60 rounded-2xl p-6 sm:p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] shadow-blue-950/10 transition-all duration-300">
          
          {/* Custom Navigation Tabs */}
          <div className="flex p-1 bg-slate-950/60 border border-slate-800/80 rounded-xl mb-6">
            <button
              type="button"
              onClick={() => { setIsLogin(true); setError(""); setSuccess(""); }}
              disabled={isLoading}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${
                isLogin
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/10"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => { setIsLogin(false); setError(""); setSuccess(""); }}
              disabled={isLoading}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${
                !isLogin
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/10"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Register
            </button>
          </div>

          {/* Feedback Messages */}
          {error && (
            <div className="mb-4 p-3.5 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-xs sm:text-sm font-medium animate-shake flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}
          {success && (
            <div className="mb-4 p-3.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl text-xs sm:text-sm font-medium flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
              <span>{success}</span>
            </div>
          )}

          {/* Authentication Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Full Name (Sign Up Only) */}
            {!isLogin && (
              <div className="space-y-1.5 group">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block group-focus-within:text-blue-400 transition-colors">
                  Full Name
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-500 group-focus-within:text-blue-500 transition-colors">
                    <User className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    disabled={isLoading}
                    placeholder="John Doe"
                    className="w-full bg-slate-950/40 text-slate-200 placeholder-slate-600 border border-slate-800/80 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all duration-300 disabled:opacity-50"
                  />
                </div>
              </div>
            )}

            {/* Mobile (Sign Up Only) */}
            {!isLogin && (
              <div className="space-y-1.5 group">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block group-focus-within:text-blue-400 transition-colors">
                  Mobile Number
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-500 group-focus-within:text-blue-500 transition-colors">
                    <Phone className="w-4 h-4" />
                  </span>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    disabled={isLoading}
                    placeholder="1234567890"
                    className="w-full bg-slate-950/40 text-slate-200 placeholder-slate-600 border border-slate-800/80 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all duration-300 disabled:opacity-50"
                  />
                </div>
              </div>
            )}

            {/* Email Address */}
            <div className="space-y-1.5 group">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block group-focus-within:text-blue-400 transition-colors">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-500 group-focus-within:text-blue-500 transition-colors">
                  <Mail className="w-4 h-4" />
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading}
                  placeholder="you@example.com"
                  className="w-full bg-slate-950/40 text-slate-200 placeholder-slate-600 border border-slate-800/80 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all duration-300 disabled:opacity-50"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5 group">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block group-focus-within:text-blue-400 transition-colors">
                Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-500 group-focus-within:text-blue-500 transition-colors">
                  <Lock className="w-4 h-4" />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  disabled={isLoading}
                  placeholder="••••••••"
                  className="w-full bg-slate-950/40 text-slate-200 placeholder-slate-600 border border-slate-800/80 rounded-xl pl-10 pr-11 py-2.5 text-sm outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all duration-300 disabled:opacity-50"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Utilities (Remember Me & Forgot Password) */}
            {isLogin && (
              <div className="flex items-center justify-between pt-1 text-xs sm:text-sm">
                <label className="flex items-center space-x-2 text-slate-400 select-none cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    disabled={isLoading}
                    className="w-4 h-4 bg-slate-950/40 text-blue-600 border border-slate-800 rounded focus:ring-0 focus:ring-offset-0 transition-colors cursor-pointer"
                  />
                  <span className="group-hover:text-slate-300 transition-colors">Remember me</span>
                </label>
                <button
                  type="button"
                  onClick={() => alert("Forgot password function configuration required.")}
                  className="text-blue-400 font-medium hover:text-blue-300 transition-colors bg-transparent border-none p-0 cursor-pointer"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white font-semibold py-2.5 rounded-xl hover:from-blue-500 hover:to-indigo-500 active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 border border-blue-400/20 shadow-lg shadow-blue-500/20 disabled:opacity-60 disabled:pointer-events-none"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <span>{isLogin ? "Sign In" : "Create Account"}</span>
              )}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;