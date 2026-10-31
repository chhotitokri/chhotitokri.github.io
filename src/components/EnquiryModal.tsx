import React, { useState } from 'react';
import { X, CheckCircle, Mail, Building, Globe, Send, Download } from 'lucide-react';
import { PROVISIONS } from '../data/provisions';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'fr';
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose, lang }) => {
  const [partnerType, setPartnerType] = useState('wholesale');
  const [selectedProducts, setSelectedProducts] = useState<string[]>([
    'kala-namak-rice',
    'mustard-oil'
  ]);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    country: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleProduct = (id: string) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1B241E]/60 backdrop-blur-sm flex justify-center p-3 sm:p-6 lg:p-10">
      <div
        className="relative bg-[#FFFFFF] w-full max-w-2xl rounded-2xl shadow-2xl border border-[#EADFC9] overflow-hidden my-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-[#174D32] text-[#F8F5EC] p-6 sm:p-8 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#0F3824] text-[10px] uppercase tracking-widest text-[#FFDEAD] mb-2 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B88A3B]"></span>
              Global Trade & Distribution Desk
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#F8F5EC]">
              {lang === 'fr' ? 'Initier un Partenariat' : 'Initiate a Trade Enquiry'}
            </h2>
            <p className="text-xs sm:text-sm text-[#E6EFEA] mt-1 max-w-lg">
              {lang === 'fr'
                ? 'Renseignez vos besoins pour recevoir les dossiers techniques, spécifications d’exportation et échantillons.'
                : 'Connect with our trade desk for wholesale dossiers, customized packaging specifications, and physical sample boxes.'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#E6EFEA] hover:text-[#FFFFFF] rounded-full hover:bg-[#205E3E] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form Content */}
        <div className="p-6 sm:p-8 overflow-y-auto max-h-[75vh]">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-[#E6EFEA] text-[#174D32] flex items-center justify-center mx-auto mb-4 border border-[#174D32]/20">
                <CheckCircle className="w-8 h-8 text-[#174D32]" />
              </div>
              <h3 className="font-serif text-2xl text-[#00351E] font-bold mb-2">
                Enquiry Successfully Transmitted
              </h3>
              <p className="text-sm text-[#4A554E] max-w-md mx-auto mb-6 leading-relaxed">
                Thank you, <span className="font-semibold text-[#1B241E]">{formData.name}</span>. Your dossier request has been forwarded to our New Delhi and Paris trade desks (Ref: <span className="font-mono text-[#7E5707] font-semibold">CT-TRD-2025-{Math.floor(1000 + Math.random() * 9000)}</span>). You will receive our response within 24 business hours.
              </p>

              <div className="p-4 bg-[#F8F5EC] rounded-xl border border-[#EADFC9] text-left max-w-md mx-auto mb-6 text-xs space-y-1.5 text-[#4A554E]">
                <div className="flex justify-between">
                  <span className="font-medium text-[#1B241E]">Partner Classification:</span>
                  <span className="capitalize text-[#174D32] font-semibold">{partnerType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-[#1B241E]">Selected Harvests:</span>
                  <span className="text-[#174D32] font-semibold">{selectedProducts.length} items</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-[#1B241E]">Target Destination:</span>
                  <span className="text-[#174D32] font-semibold">{formData.country || 'Global / Domestic'}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-[#174D32] text-[#F8F5EC] text-xs uppercase tracking-widest font-semibold rounded-lg hover:bg-[#00351E] transition-colors cursor-pointer"
                >
                  Return to Portfolio
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Partner Type Selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1B241E] mb-2">
                  1. Partnership Classification
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'wholesale', label: 'Wholesale & Import' },
                    { id: 'retail', label: 'Delicatessen & Retail' },
                    { id: 'gastronomy', label: 'Chef & Food Service' },
                    { id: 'sample', label: 'Tasting Samples' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPartnerType(item.id)}
                      className={`p-3 text-left rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                        partnerType === item.id
                          ? 'border-[#174D32] bg-[#E6EFEA] text-[#174D32] font-semibold ring-1 ring-[#174D32]'
                          : 'border-[#EADFC9] bg-[#FFFFFF] text-[#4A554E] hover:bg-[#F4EFE6]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Multi-select */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1B241E] mb-2">
                  2. Provisions of Interest (Select All Applicable)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {PROVISIONS.map((item) => {
                    const isSelected = selectedProducts.includes(item.id);
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => toggleProduct(item.id)}
                        className={`flex items-center gap-2.5 p-3 rounded-lg border text-xs text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#174D32] bg-[#E6EFEA] text-[#174D32] font-semibold'
                            : 'border-[#EADFC9] bg-[#FFFFFF] text-[#4A554E] hover:bg-[#F4EFE6]'
                        }`}
                      >
                        <span
                          className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                            isSelected ? 'bg-[#174D32] border-[#174D32] text-white' : 'border-[#727E77]'
                          }`}
                        >
                          {isSelected && <span className="text-[10px]">✓</span>}
                        </span>
                        <div className="flex flex-col truncate">
                          <span className="truncate">{item.name}</span>
                          <span className="text-[10px] text-[#727E77]">{item.terroirBadge}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 pt-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1B241E]">
                  3. Contact & Logistics Details
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] text-[#727E77] uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Alistair Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#EADFC9] bg-[#FCFAF5] text-sm text-[#1B241E] focus:outline-none focus:border-[#174D32] focus:ring-1 focus:ring-[#174D32]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#727E77] uppercase tracking-wider mb-1">
                      Organization / Business *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Maison Terroir Gourmet"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#EADFC9] bg-[#FCFAF5] text-sm text-[#1B241E] focus:outline-none focus:border-[#174D32] focus:ring-1 focus:ring-[#174D32]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#727E77] uppercase tracking-wider mb-1">
                      Business Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="e.g. buyer@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#EADFC9] bg-[#FCFAF5] text-sm text-[#1B241E] focus:outline-none focus:border-[#174D32] focus:ring-1 focus:ring-[#174D32]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#727E77] uppercase tracking-wider mb-1">
                      Country & City
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Paris, France"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#EADFC9] bg-[#FCFAF5] text-sm text-[#1B241E] focus:outline-none focus:border-[#174D32] focus:ring-1 focus:ring-[#174D32]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-[#727E77] uppercase tracking-wider mb-1">
                    Requirements / Volume Specifications
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide details on target volumes, packaging formats, or specific culinary certifications requested..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#EADFC9] bg-[#FCFAF5] text-sm text-[#1B241E] focus:outline-none focus:border-[#174D32] focus:ring-1 focus:ring-[#174D32]"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#174D32] hover:bg-[#00351E] text-[#F8F5EC] text-xs uppercase tracking-widest font-bold rounded-lg shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Submit Partnership Dossier Request</span>
                  <Send className="w-4 h-4 text-[#B88A3B]" />
                </button>
                <p className="text-[11px] text-[#727E77] text-center mt-2">
                  All trade enquiries are handled in strict commercial confidence by Chhoti Tokri.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
