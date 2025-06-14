import React from 'react';

const Promotion: React.FC = () => (
  <section className="bg-white px-4 py-10 text-center">
    <div className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl shadow-md p-6 mx-auto max-w-2xl text-left text-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-purple-800">🛍️ අලුත්ම භාණ්ඩ එකතුවක් ඔබට!</h2>
      <p className="mb-2">අපේ catalog එකට අලුත් භාණ්ඩ එකතු කරලා තියෙනවා 😍 දැන්ම බලන්න!</p>
      <p className="mb-4">
        📲{' '}
        <a
          href="https://wa.me/c/94703112876"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded transition-colors duration-200"
        >
          Catalog එක බලන්න
        </a>
      </p>
      <div className="mb-4">
        <p className="font-semibold mb-1">🎁 විශේෂ වට්ටම්:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            භාණ්ඩ 2ක් මිලදී ගන්නා විට – ඔබට තෝරාගත හැක:
            <ul className="list-disc list-inside ml-4">
              <li>✅ මුළු බිලට 5% වට්ටමක් හෝ</li>
              <li>✅ 3 Stage Knife Sharpener (Value Rs.800) එකක් නොමිලේ</li>
            </ul>
          </li>
          <li>භාණ්ඩ 3ක් හෝ වැඩි ගණනක් ගන්නා විට – 10% වට්ටමක්</li>
        </ul>
      </div>
      <p className="mb-1">🚚 Delivery නොමිලේ (Cash on Delivery)</p>
      <p className="mb-4">📦 රටේ ඕනෑම තැනකට delivery කරනු ලැබේ</p>
      <p className="font-semibold text-purple-700">
        අදම ඇණවුම් කරන්න – වට්ටම්, තෑගිත්, නොමිලේ delivery එකත් එක්ක! 🛒✨
      </p>
    </div>
  </section>
);

export default Promotion;
