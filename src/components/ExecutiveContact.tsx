import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, Github, MapPin, Building, MessageSquare, AlertCircle } from 'lucide-react';
import { CEO_PROFILE } from '../data/profileData';

export const ExecutiveContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: 'speaking',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please complete all required fields (Name, Email, Message).');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('submitting');

    setTimeout(() => {
      // Save inquiry to localStorage
      try {
        const saved = JSON.parse(localStorage.getItem('executive_inquiries') || '[]');
        saved.push({
          ...formData,
          id: Date.now(),
          submittedAt: new Date().toISOString()
        });
        localStorage.setItem('executive_inquiries', JSON.stringify(saved));
      } catch (err) {
        console.error('Local storage save failed', err);
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        organization: '',
        inquiryType: 'speaking',
        subject: '',
        message: ''
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Context & Official Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400">
                <span>Direct Executive Office</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>Get in Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-outfit [text-wrap:balance]">
                Connect with CEO Yuvkesh Meena
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Open to technology advisory, institutional partnerships for Indian sovereign computing, keynote invitations, and impactful open-source contributions.
              </p>
            </div>

            {/* Official Channels List */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0B0F19] border border-white/[0.08]">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Official GitHub Collective</h4>
                  <a 
                    href={CEO_PROFILE.githubOrgUrl}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs text-cyan-400 hover:underline font-mono"
                  >
                    github.com/{CEO_PROFILE.githubHandle}
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Explore all 27+ public codebases, repositories, and release pipelines.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0B0F19] border border-white/[0.08]">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Executive Correspondence</h4>
                  <a 
                    href={`mailto:${CEO_PROFILE.email}`}
                    className="text-xs text-cyan-400 hover:underline font-mono"
                  >
                    {CEO_PROFILE.email}
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">
                    For official executive and media communications.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0B0F19] border border-white/[0.08]">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Headquarters & Ecosystem</h4>
                  <span className="text-xs text-slate-300 font-mono">
                    Gothwad Tech · India
                  </span>
                  <p className="text-xs text-slate-400 mt-0.5">
                    India's leading grassroots community dedicated to Swadeshi technology independence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Executive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#0B0F19] border border-white/[0.08] shadow-xl relative">
              
              {status === 'success' ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-outfit">
                    Inquiry Transmitted
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to Yuvkesh Meena's office. Your dispatch has been logged and forwarded to executive communications.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-6 py-2.5 text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors"
                  >
                    Send Another Dispatch
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white font-outfit">
                      Executive Inquiry Dispatch
                    </h3>
                    <p className="text-xs text-slate-400">
                      Submit formal inquiries for speaking, institutional partnerships, or technical advisory.
                    </p>
                  </div>

                  {status === 'error' && (
                    <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Full Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. / Mr. / Ms. Name"
                        className="w-full bg-[#070A11] border border-white/[0.08] focus:border-cyan-500/60 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Email Address <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@organization.com"
                        className="w-full bg-[#070A11] border border-white/[0.08] focus:border-cyan-500/60 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-slate-400" />
                        <span>Organization / Entity</span>
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Company, University, or Media"
                        className="w-full bg-[#070A11] border border-white/[0.08] focus:border-cyan-500/60 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Nature of Inquiry
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full bg-[#070A11] border border-white/[0.08] focus:border-cyan-500/60 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none transition-colors"
                      >
                        <option value="speaking">Keynote / Speaking Engagement</option>
                        <option value="partnership">Institutional Partnership</option>
                        <option value="press">Press & Media Interview</option>
                        <option value="opensource">Open-Source Core Contribution</option>
                        <option value="other">General Executive Correspondence</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Brief summary of topic or initiative"
                      className="w-full bg-[#070A11] border border-white/[0.08] focus:border-cyan-500/60 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                      <span>Message / Brief <span className="text-cyan-400">*</span></span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Detail your request, timeline, or proposal for CEO Yuvkesh Meena..."
                      className="w-full bg-[#070A11] border border-white/[0.08] focus:border-cyan-500/60 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl hover:from-cyan-500 hover:to-blue-500 shadow-md shadow-cyan-950/40 transition-all active:scale-[0.99] disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      <span>Transmitting Dispatch...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Executive Dispatch</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
