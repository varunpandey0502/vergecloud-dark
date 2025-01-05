import { useHubspotForm } from "next-hubspot";
import { useEffect, useRef } from "react";

const HubspotForm = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const { loaded, error, formCreated } = useHubspotForm({
    portalId: "8085729",
    formId: "fd93a57b-04c1-4d2c-80f9-53bfc3250f0d",
    target: "#hubspot-form-wrapper",
  });

  return (
    <div
      id="hubspot-form-wrapper"
      ref={formRef}
      className={
        "bg-white rounded-lg w-full max-w-xl mt-8 md:mt-0 border border-zinc-200 md:ml-8 px-8 py-6"
      }
    />
  );
};

export default HubspotForm;
