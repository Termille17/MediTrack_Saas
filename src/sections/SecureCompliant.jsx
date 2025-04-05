import { Element } from "react-scroll";

const SecureCompliant = () => {
  return (
    <section>
      <Element name="secure-compliant" className="relative">
        <div className="container relative z-2 py-28">
          <div>
            <h3 className="h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p4">
              Your Patients—Protected
            </h3>
            <p className="body-1 max-lg:max-w-sm">
              At MediTrack, patient data security and compliance are our top priorities. We ensure that all patient data is securely stored, managed, and only accessible to authorized personnel. Here's how we protect your data.
            </p>
          </div>

          <div className="faq-line_after w-0.5 h-full absolute left-[calc(50%-1px)] top-0 -z-1 bg-s2" />
        </div>

        <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1">
          <div className="container flex gap-10 max-lg:block">
            <div className="rounded-half absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center border-2 border-s2 bg-s1">
              <img src="/images/faq-logo.svg" alt="logo" className="size-1/2" />
            </div>

            <div className="relative flex-1 pt-24">
              <div>
                <h4 className="h4 text-p4 mb-6">1. Data Encryption</h4>
                <p className="body-1">
                  All patient data, including personal details and medical records, is encrypted both in transit and at rest using industry-standard encryption protocols to ensure secure data storage and transmission.
                </p>
              </div>
              <div>
                <h4 className="h4 text-p4 mb-6">2. Secure Data Storage</h4>
                <p className="body-1">
                  MediTrack utilizes Appwrite’s cloud storage to store patient files securely. Our cloud storage service complies with regulatory standards and ensures that your data is always safe and accessible only to authorized users.
                </p>
              </div>
              <div>
                <h4 className="h4 text-p4 mb-6">3. Role-Based Access Control</h4>
                <p className="body-1">
                  We implement role-based access control (RBAC) to ensure that only authorized staff can access sensitive patient information. Admins can configure permissions for each user based on their role within the practice.
                </p>
              </div>
              <div>
                <h4 className="h4 text-p4 mb-6">4. Compliance with Healthcare Regulations</h4>
                <p className="body-1">
                  MediTrack adheres to major healthcare regulations like HIPAA (U.S.), GDPR (EU), and POPIA (South Africa), ensuring that your practice operates in full compliance with privacy and security requirements.
                </p>
              </div>
              <div>
                <h4 className="h4 text-p4 mb-6">5. Data Redundancy and Backup</h4>
                <p className="body-1">
                  We ensure your patient data is securely backed up and readily available for recovery in case of unforeseen incidents, such as hardware failure, natural disasters, or other disruptions.
                </p>
              </div>
            </div>

            <div className="relative flex-1 lg:pt-24">
              <div>
                <h4 className="h4 text-p4 mb-6">6. Audit Trails</h4>
                <p className="body-1">
                  All access to patient data is logged and tracked through audit trails, providing full transparency and accountability for all interactions with sensitive data.
                </p>
              </div>
              <div>
                <h4 className="h4 text-p4 mb-6">7. Secure Communication Channels</h4>
                <p className="body-1">
                  All communication within the platform is encrypted via SSL/TLS, ensuring that messages, appointment confirmations, and patient interactions are securely transmitted.
                </p>
              </div>
              <div>
                <h4 className="h4 text-p4 mb-6">8. Regular Security Audits</h4>
                <p className="body-1">
                  We perform regular security audits and vulnerability assessments to proactively identify and resolve any security gaps, keeping your data protected at all times.
                </p>
              </div>
              <div>
                <h4 className="h4 text-p4 mb-6">9. Sentry Monitoring</h4>
                <p className="body-1">
                  Sentry’s real-time error tracking helps us monitor and fix any application performance or security issues, ensuring your practice remains secure and efficient.
                </p>
              </div>
              <div>
                <h4 className="h4 text-p4 mb-6">10. Data Deletion & Retention</h4>
                <p className="body-1">
                  We follow a strict data retention policy, ensuring that patient data is kept only as long as necessary. If data needs to be deleted, we ensure the process is completed securely and promptly.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-lin_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2 max-lg:hidden" />
        </div>
      </Element>
    </section>
  );
};

export default SecureCompliant;
