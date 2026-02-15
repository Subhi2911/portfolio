export default function Education() {
  return (
    <section id="education" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-blue-400 mb-20 text-center">
          Education & Achievements
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* B.Tech */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-blue-400 transition">
            <h3 className="text-2xl font-semibold mb-2">
              B.Tech CSE (UX/UI)
            </h3>
            <p className="text-gray-400">
              KR Mangalam University (2024–2028)
            </p>
            <p className="text-blue-400 mt-3 text-lg font-semibold">
              CGPA: 9.21
            </p>
          </div>

          {/* 12th */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-blue-400 transition">
            <h3 className="text-2xl font-semibold mb-2">
              CBSE – Class 12
            </h3>
            <p className="text-gray-400">
              2023
            </p>
            <p className="text-blue-400 mt-3 text-lg font-semibold">
              90.1%
            </p>
          </div>

          {/* 10th */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-blue-400 transition">
            <h3 className="text-2xl font-semibold mb-2">
              CBSE – Class 10
            </h3>
            <p className="text-gray-400">
              2021
            </p>
            <p className="text-blue-400 mt-3 text-lg font-semibold">
              94.2%
            </p>
          </div>

          {/* Certifications & Achievements */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-blue-400 transition space-y-4">
            <h3 className="text-2xl font-semibold mb-2">
              Certifications & Achievements
            </h3>

            <p className="text-gray-400">
              • Microsoft Azure AI Fundamentals (AI-900)
            </p>
            <p className="text-gray-400">
              • Dean’s Honor Award – Semester 1 & 2
            </p>
            <p className="text-gray-400">
              • Hack KRMU Hackathon (2024)
            </p>
            <p className="text-gray-400">
              • ACIC VGU Designathon (2024)
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
