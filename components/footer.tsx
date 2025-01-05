export default function Footer() {
  return (
    <footer className="bg-primary py-8">
      <div className="container px-12 lg:px-0">
        <div className="flex flex-wrap justify-center items-center mb-4">
          <a
            href="https://peoplebox.ai/privacy-policy/"
            className="text-white text-sm hover:underline"
          >
            Privacy Policy
          </a>
          <span className="text-white mx-2">|</span>
          <a
            href="https://peoplebox.ai/terms-and-conditions/"
            className="text-white text-sm hover:underline"
          >
            Terms & Conditions
          </a>
          <span className="text-white mx-2">|</span>
          <a
            href="https://peoplebox.ai/gdpr-compliance/"
            className="text-white text-sm hover:underline"
          >
            GDPR Compliance
          </a>
          <span className="text-white mx-2">|</span>
          <a
            href="https://peoplebox.ai/data-processing-addendum/"
            className="text-white text-sm hover:underline"
          >
            Data Processing Addendum
          </a>{" "}
          <span className="text-white mx-2">|</span>
          <a
            href="https://peoplebox.ai/responsible-disclosure/"
            className="text-white text-sm hover:underline"
          >
            Responsible Disclosure
          </a>
          <span className="text-white mx-2">|</span>
          <a
            href="https://peoplebox.ai/cookies-policy/"
            className="text-white text-sm hover:underline"
          >
            Cookies Policy
          </a>
        </div>
        <p className="text-white text-center text-sm">
          Copyright © {new Date().getFullYear()} Peoplebox | All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
