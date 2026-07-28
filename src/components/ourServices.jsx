import heartIcon from "../homeAssets/heart-Icon.png"
import diagnosticIcon from "../homeAssets/DiagnosticIcon.png"
import surgeryIcon from "../homeAssets/surgeryIcon.png"
import arrowIcon from "../homeAssets/arrowIcon.png"

/**
 * Homepage "core services" preview section.
 *
 * @description
 * Displays a concise set of primary services and a button to navigate to the
 * full services page.
 *
 * @returns {JSX.Element} Services preview cards with navigation button.
 *
 * @edgecase
 * Navigation currently uses `window.location.href`, which causes a full page
 * reload. Consider `Link` for SPA-style navigation if desired.
 */
function ourServices() {
  return (
    <div className="w-full bg-bg-main py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <div className="transition-all duration-1000 ease-out">
              <h2 className="mb-4 text-4xl font-bold text-black sm:text-5xl">
                Our Core Services
              </h2>
              <p className="mx-auto text-xl text-black font-medium">
                Comprehensive veterinary care tailored to your animal’s needs{" "}
              </p>
            </div>
          </div>
          <div className="grid gap-8 mb-20 md:grid-cols-2 lg:grid-cols-3">
            <div className="group transition-all duration-1000 ease-out delay-200 p-8 rounded-2xl bg-white border border-border-gray shadow-sm">
              <div className="items-center justify-center duration-300 flex w-[54px] h-[54px] mb-6 rounded-md bg-gray-100">
                <div>
                  <img
                    className="w-8 h-8 text-gold-main"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    src={heartIcon}
                    alt="Heart Icon"
                  />
                </div>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black">
                Preventive & Wellness
              </h3>
              <p className="mb-6 text-black font-medium">
                Routine health checks, vaccinations, and de-worming to keep your animals healthy
              </p>
            </div>
            <div className="group transition-all duration-1000 ease-out delay-200 p-8 rounded-2xl bg-white border border-border-gray shadow-sm">
              <div className="items-center justify-center duration-300 flex w-[54px] h-[54px] mb-6 rounded-md bg-gray-100">
                <div>
                  <img
                    className="w-8 h-8 text-gold-main"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    src={diagnosticIcon}
                    alt="Diagnostic Icon"
                  />
                </div>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black">
                Diagnostics
              </h3>
              <p className="mb-6 text-black font-medium">
                In-house lab testing, X-rays, and ultrasound imaging for accurate diagnosis.
              </p>
            </div>
            <div className="group transition-all duration-1000 ease-out delay-200 p-8 rounded-2xl bg-white border border-border-gray shadow-sm">
              <div className="items-center justify-center duration-300 flex w-[54px] h-[54px] mb-6 rounded-md bg-gray-100">
                <div>
                  <img
                    className="w-8 h-8 text-gold-main"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    src={surgeryIcon}
                    alt="Surgery Icon"
                  />
                </div>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black">
                Surgery
              </h3>
              <p className="mb-6 text-black font-medium">
                Soft tissue and orthopedic surgery, dental cleaning, and emergency care.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
              onClick={() => (window.location.href = "/services")}
              className="bg-black hover:bg-gold-main text-white hover:text-black font-medium rounded-lg px-8 py-3 transition-colors duration-300 flex items-center gap-2 shadow-sm"
            >
              View All Services
              <img src={arrowIcon} alt="arrow" className="w-4 h-4 invert hover:invert-0" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ourServices;

