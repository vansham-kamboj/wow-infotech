import { Reveal } from './Reveal';

export function Footer() {
  return (
    <Reveal>
      <footer className="max-w-[1600px] mx-auto px-4 md:px-8 py-12 border-t border-border">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-accent rounded-full flex items-center justify-center">
                <span className="text-dark text-xs font-bold">w</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight">wow Techo</span>
            </div>
            <p className="text-muted text-sm max-w-xs">
              A digital agency that builds, ranks and grows modern brands.
            </p>
          </div>

          {/* Services */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-dark/50">
            <span className="hover:text-dark transition-colors cursor-default">Website Development</span>
            <span className="hover:text-dark transition-colors cursor-default">App Development</span>
            <span className="hover:text-dark transition-colors cursor-default">SEO</span>
            <span className="hover:text-dark transition-colors cursor-default">Performance Ads</span>
            <span className="hover:text-dark transition-colors cursor-default">Social Media</span>
          </div>

          {/* Email */}
          <a
            href="mailto:hello@wowtecho.com"
            className="text-sm font-medium hover:text-accent transition-colors underline underline-offset-4 decoration-border hover:decoration-accent"
          >
            hello@wowtecho.com
          </a>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <span>© {new Date().getFullYear()} wow Techo. All rights reserved.</span>
          <span>Crafted with precision.</span>
        </div>
      </footer>
    </Reveal>
  );
}
