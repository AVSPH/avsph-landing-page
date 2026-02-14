import { Phone } from 'lucide-react';

export default function CTABookACall(){
    return(
        <div
          className="mt-5 p-10 md:p-12 rounded-3xl text-center relative overflow-hidden max-w-6xl mx-auto mb-20"
          style={{
            background:
              "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 50%, var(--secondary-dark) 100%)",
          }}
        >
          {/* Decorative circles */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
            style={{ background: "var(--secondary)" }}
          />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Still have questions?
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our friendly team is
              ready to help you get started.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/booking" className="btn-primary">
                <Phone className="w-5 h-5" />
                Book a Free Call
              </a>
              <a
                href="mailto:info@advancedvirtualstaff.com"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg font-semibold transition-all hover:bg-white hover:text-[var(--primary)]"
              >
                Send us an Email
              </a>
            </div>
          </div>
        </div>
    );

}