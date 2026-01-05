import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowRight,
} from "lucide-react";
import logopink from "../assets/images/logo-pink.png";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="px-4 py-16 mx-auto max-w-7xl">
        {/* Top Section */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <img
                src={logopink}
                alt="Martex Logo"
                className="w-auto h-10 rounded"
              />
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 font-semibold text-[#353f4f] text-xl">
              Company
            </h4>
            <ul className="space-y-3 text-gray-500">
              <li>About Us</li>
              <li>Our Blog</li>
              <li>Customers</li>
              <li>Community</li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4 font-semibold text-[#353f4f] text-xl">
              Product
            </h4>
            <ul className="space-y-3 text-gray-500">
              <li>Integration</li>
              <li>What's New</li>
              <li>Pricing</li>
              <li>Help Center</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 font-semibold text-[#353f4f] text-xl">Legal</h4>
            <ul className="space-y-3 text-gray-500">
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Site Map</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="mb-4 font-semibold text-[#353f4f] text-xl">
              Follow the Best
            </h4>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 pr-12 text-gray-700 bg-gray-100 rounded-lg outline-none"
              />
              <button className="absolute text-pink-500 -translate-y-1/2 right-3 top-1/2">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex flex-col items-center justify-between gap-6 pt-6 mt-16 border-t border-gray-200 md:flex-row">
          {/* Copyright */}
          <p className="text-lg text-gray-500 text-">
            © 2025 Martex. All Rights Reserved
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5 text-gray-400">
            <Facebook size={24} />
            <Twitter size={24} />
            <Instagram size={24} />
            <Youtube size={24} />
          </div>
        </div>
      </div>
    </footer>
  );
}
