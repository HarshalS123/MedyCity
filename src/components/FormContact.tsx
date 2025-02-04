import { useState } from "react";
import { buttonVariants } from "./ui/button";

export const FormContact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);

    const formData = {
      fullName: event.currentTarget.fullName.value,
      email: event.currentTarget.email.value,
      position: event.currentTarget.position.value,
      groupName: event.currentTarget.groupname.value,
      groupSpeciality: event.currentTarget.groupspeciality.value,
      providerSize: event.currentTarget.providersize.value,
      services: Array.from(event.currentTarget.querySelectorAll('input[type="checkbox"]:checked')).map(
        (checkbox) => (checkbox as HTMLInputElement).nextElementSibling?.textContent
      ),
    };

    try {
      const response = await fetch("https://medymatic-backend.onrender.com/submit-contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        const errorData = await response.json();
        alert(`Failed to submit form: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-4 md:px-28 grid grid-cols-1 lg:grid-cols-2 md:gap-10">
      <div className="pb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#004E43] mb-6">
          Get in Touch Today for Tailored Support and Expert Assistance
        </h2>
        <p className="text-xl mb-6">
          We're here to help with all your medical billing and payer support needs.
        </p>
        <ul>
          <a href="mailto:info@medymatic.com">
            <li className="flex my-2 flex-row gap-2 items-center justify-start">
              <span>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M33.318 4C39.978 4 45 9.434 45 16.64V30.376C45 34.064 43.696 37.396 41.326 39.76C39.2 41.878 36.442 43 33.35 43H13.644C10.558 43 7.802 41.88 5.674 39.76C3.304 37.396 2 34.064 2 30.376V16.64C2 9.434 7.022 4 13.682 4H33.318ZM33.318 7H13.682C8.652 7 5 11.054 5 16.64V30.376C5 33.262 5.992 35.84 7.792 37.634C9.344 39.184 11.37 40 13.65 40H33.318C33.322 39.996 33.338 40 33.35 40C35.632 40 37.656 39.184 39.208 37.634C41.01 35.84 42 33.262 42 30.376V16.64C42 11.054 38.348 7 33.318 7ZM36.47 16.2576C36.992 16.8996 36.894 17.8436 36.252 18.3676L27.364 25.5916C26.24 26.4836 24.896 26.9296 23.554 26.9296C22.216 26.9296 20.882 26.4876 19.766 25.6036L10.796 18.3716C10.15 17.8516 10.05 16.9056 10.568 16.2616C11.09 15.6196 12.034 15.5176 12.678 16.0356L21.64 23.2596C22.766 24.1516 24.352 24.1516 25.486 23.2516L34.358 16.0396C35.002 15.5136 35.946 15.6136 36.47 16.2576Z"
                    fill="#1A1A1A"
                  />
                </svg>
              </span>
              <span className="text-xl">info@medymatic.com</span>
            </li>
          </a>
          <a href="mailto:sales@medymatic.com">
            <li className="flex my-2 flex-row gap-2">
              <span>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M33.318 4C39.978 4 45 9.434 45 16.64V30.376C45 34.064 43.696 37.396 41.326 39.76C39.2 41.878 36.442 43 33.35 43H13.644C10.558 43 7.802 41.88 5.674 39.76C3.304 37.396 2 34.064 2 30.376V16.64C2 9.434 7.022 4 13.682 4H33.318ZM33.318 7H13.682C8.652 7 5 11.054 5 16.64V30.376C5 33.262 5.992 35.84 7.792 37.634C9.344 39.184 11.37 40 13.65 40H33.318C33.322 39.996 33.338 40 33.35 40C35.632 40 37.656 39.184 39.208 37.634C41.01 35.84 42 33.262 42 30.376V16.64C42 11.054 38.348 7 33.318 7ZM36.47 16.2576C36.992 16.8996 36.894 17.8436 36.252 18.3676L27.364 25.5916C26.24 26.4836 24.896 26.9296 23.554 26.9296C22.216 26.9296 20.882 26.4876 19.766 25.6036L10.796 18.3716C10.15 17.8516 10.05 16.9056 10.568 16.2616C11.09 15.6196 12.034 15.5176 12.678 16.0356L21.64 23.2596C22.766 24.1516 24.352 24.1516 25.486 23.2516L34.358 16.0396C35.002 15.5136 35.946 15.6136 36.47 16.2576Z"
                    fill="#1A1A1A"
                  />
                </svg>
              </span>
              <span className="text-xl">sales@medymatic.com</span>
            </li>
          </a>
        </ul>
      </div>
      <div>
        <form className="w-full flex flex-col gap-5" onSubmit={handleSubmit}>
          <label htmlFor="fullName" className="text-xl font-medium">
            Full Name*
          </label>
          <input
            required
            placeholder="Enter your full name"
            className="text-sm text-black border border-black rounded-sm p-2"
            name="fullName"
            id="fullName"
          />
          <label htmlFor="email" className="text-xl font-medium">
            Email*
          </label>
          <input
            required
            placeholder="Enter your email address"
            className="text-sm text-black border border-black rounded-sm p-2"
            name="email"
            id="email"
            type="email"
          />
          <label htmlFor="position" className="text-xl font-medium">
            Position*
          </label>
          <input
            required
            placeholder="Enter your position/title"
            className="text-sm text-black border border-black rounded-sm p-2"
            name="position"
            id="position"
          />
          <label htmlFor="groupname" className="text-xl font-medium">
            Group Name*
          </label>
          <input
            required
            placeholder="Enter your group or company name"
            className="text-sm text-black border border-black rounded-sm p-2"
            name="groupname"
            id="groupname"
          />
          <label htmlFor="groupspeciality" className="text-xl font-medium">
            Group Speciality*
          </label>
          <input
            required
            placeholder="Enter your group's area of specialization"
            className="text-sm text-black border border-black rounded-sm p-2"
            name="groupspeciality"
            id="groupspeciality"
          />
          <label htmlFor="providersize" className="text-xl font-medium">
            Provider Size
          </label>
          <input
            placeholder="Enter your provider size"
            className="text-sm text-black border border-black rounded-sm p-2"
            name="providersize"
            id="providersize"
          />
          <label htmlFor="services" className="text-xl font-medium">
            Services Looking For
          </label>
          <div className="grid grid-cols-2 items-center">
            {[
              "Billing",
              "Call Centre",
              "Medical Coding",
              "MR Management",
              "Rejection Management",
              "Eligibility & Benefits Verification",
              "Chat Support",
              "Others",
            ].map((service, index) => (
              <div key={index}>
                <input
                  id={`service-${index}`}
                  type="checkbox"
                  value={service}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor={`service-${index}`} className="ms-2 text-sm font-medium text-gray-900">
                  {service}
                </label>
              </div>
            ))}
          </div>
          <button
            type="submit"
            className={`border w-2/12 ${buttonVariants({ variant: "secondary" })}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};