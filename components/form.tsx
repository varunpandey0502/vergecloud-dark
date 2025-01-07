import { useRef, useEffect } from "react";

const Form = () => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      console.log("Message received:", {
        origin: event.origin,
        data: event.data,
        event: event,
      });

      // Don't restrict by origin while testing
      try {
        if (typeof event.data === "string") {
          const data = JSON.parse(event.data);
          console.log("Parsed data:", data);
        } else {
          console.log("Data is not a string:", typeof event.data);
        }
      } catch (e) {
        console.log("Raw event data:", event.data);
        console.error("Error parsing:", e);
      }
    };

    window.addEventListener("message", handleMessage);

    // Cleanup
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div id="form" ref={formRef}>
      <iframe
        title="Claim Your 3 Months Free Subscription"
        aria-label="Claim Your 3 Months Free Subscription"
        frameBorder="0"
        className="rounded-lg shadow-lg bg-primary border border-white/[0.08] w-[400px] h-[660px] md:w-[400px] md:h-[620px] border-none max-w-full min-w-[300px] sm:min-w-[400px]"
        src="https://forms.zohopublic.com/vergecloud1/form/LandingPageForm/formperma/q82z0LQEAjC5RcDxIDQHj1Zrod8SHSbpsrO6s_EQvCc"
      />
    </div>
  );
};

export default Form;
