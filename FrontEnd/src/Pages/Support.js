import React from 'react';

const supportSteps = [
  {
    title: 'Accessing Help and Support',
    description: (
      <>
        <p>Start by accessing various help and support options:</p>
        <ul className="list-disc pl-5">
          <li>In-App Help: Look for a "Help" or "Support" button in the toolbar or menu.</li>
          <li>Documentation: Visit the official documentation or knowledge base.</li>
          <li>Customer Support: Contact support through email, chat, or phone.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Utilizing Documentation',
    description: (
      <>
        <p>Make the most of the available documentation:</p>
        <ul className="list-disc pl-5">
          <li>Search Functionality: Use the search bar to find specific topics.</li>
          <li>User Guides: Refer to guides and tutorials for step-by-step instructions.</li>
          <li>FAQs: Check the FAQ section for common questions and answers.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Getting Assistance from Community Forums',
    description: (
      <>
        <p>Engage with the community for additional support:</p>
        <ul className="list-disc pl-5">
          <li>Join Forums: Participate in relevant community forums or user groups.</li>
          <li>Ask Questions: Post questions or issues and await responses.</li>
          <li>Browse Topics: Review existing threads for similar problems and solutions.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Submitting Support Requests',
    description: (
      <>
        <p>Submit detailed support requests for unresolved issues:</p>
        <ul className="list-disc pl-5">
          <li>Submit a Ticket: Use the ticket system to report issues.</li>
          <li>Provide Details: Include error messages, screenshots, and reproduction steps.</li>
          <li>Follow Up: Track your request and respond to any additional questions.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Receiving and Using Updates',
    description: (
      <>
        <p>Keep your tool updated:</p>
        <ul className="list-disc pl-5">
          <li>Check for Updates: Regularly check for new software updates.</li>
          <li>Release Notes: Review release notes for bug fixes and new features.</li>
          <li>Upgrade: Ensure you are on the latest version for optimal performance.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Training and Tutorials',
    description: (
      <>
        <p>Enhance your skills with training resources:</p>
        <ul className="list-disc pl-5">
          <li>Online Courses: Enroll in courses or webinars offered by the provider.</li>
          <li>Video Tutorials: Watch tutorials on the provider’s website or YouTube.</li>
          <li>Workshops: Attend live training sessions for hands-on experience.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Feedback and Suggestions',
    description: (
      <>
        <p>Provide feedback and suggest improvements:</p>
        <ul className="list-disc pl-5">
          <li>Provide Feedback: Use feedback forms or surveys to share your experience.</li>
          <li>Feature Requests: Submit requests for new features or changes.</li>
        </ul>
      </>
    ),
  },
];

const Support = () => (
  <div className="flex flex-col min-h-screen text-white" style={{ background: "linear-gradient(to bottom right, #000000, #3a3a3a, #ffffff)" }}>
   
    <div className="flex-grow flex items-center justify-center py-12">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-8 animate-fade-in-up">
            Get Help and Support
          </h1>
          <div className="space-y-8">
            {supportSteps.map((step, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg text-left mx-4 sm:mx-6 lg:mx-8">
                <h2 className="text-2xl font-bold text-white mb-4">{step.title}</h2>
                <div className="text-white/80">{step.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Support;
