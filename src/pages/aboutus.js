import React from "react";
import TeamCard from "../components/TeamCard";

const About = () => {
  return (
    <div className="bg-sixty text-white min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto bg-gray-900 shadow-lg rounded-lg p-8 md:p-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-ten mb-12">
          About Us
        </h1>

        {/* First Section: Text on Left, Image on Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-ten">
              Who We Are
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We are a team of cybersecurity experts dedicated to safeguarding
              businesses in an ever-evolving digital landscape. Our expertise
              lies in identifying vulnerabilities, implementing advanced
              security protocols, and providing continuous monitoring to protect
              your digital assets.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With years of experience and a deep understanding of
              cybersecurity, we offer bespoke solutions tailored to meet your
              specific needs. Our proactive approach ensures your organization
              is equipped to handle emerging threats while remaining compliant
              with industry standards.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://via.placeholder.com/500x300.png?text=Cybersecurity+Expert"
              alt="Cybersecurity Expert"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Second Section: Image on Left, Text on Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="flex items-center justify-center order-last md:order-first">
            <img
              src="https://via.placeholder.com/500x300.png?text=Cybersecurity+Mission"
              alt="Cybersecurity Mission"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-ten">
              Our Expertise
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-300 leading-relaxed space-y-2">
              <li>Advanced Penetration Testing</li>
              <li>Real-Time Threat Intelligence</li>
              <li>Incident Response and Forensics</li>
              <li>Security Audits and Compliance</li>
              <li>Data Privacy and Encryption</li>
              <li>Employee Security Training Programs</li>
            </ul>
          </div>
        </div>

        {/* Third Section: Text on Left, Image on Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-ten">
              Our Mission
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our mission is to create a safer digital environment for
              businesses worldwide. We aim to empower organizations with the
              knowledge and tools needed to defend against today’s complex cyber
              threats, allowing them to focus on growth and innovation while we
              secure their digital infrastructure.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://via.placeholder.com/500x300.png?text=Mission+Driven"
              alt="Mission Driven"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-ten mb-6 text-center">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <TeamCard
            photo="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            name="Yash Falke"
            jobTitle="Graphic Designing Head"
            education="Pursuing IT Engineering (VIT Mumbai)"
            email="yashfalke77@gmail.com"
            facebook="#"
            linkedin="#"
            instagram="https://www.instagram.com/yashfalke77/"
          />
          <TeamCard
            photo="https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=20&m=1007763808&s=612x612&w=0&h=q4qlV-99EK1VHePL1-Xon4gpdpK7kz3631XK4Hgr1ls="
            name="Harsh Sunwani"
            jobTitle="Web Developing Head"
            education="Pursuing IT Engineering (VIT Mumbai)"
            email="harshsunwani11@gmail.com"
            facebook="#"
            linkedin="#"
            instagram="https://www.instagram.com/harshsunwani/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
