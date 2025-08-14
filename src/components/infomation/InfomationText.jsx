import React from "react";

const InfomationText = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-16 mt-[120px]">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
          Information
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Kojun Coffeeの最新情報・お知らせ
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 営業時間・定休日 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="mr-3">🕒</span>
            営業時間
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">平日</span>
              <span className="font-medium">9:00 - 18:00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">土日祝</span>
              <span className="font-medium">9:00 - 19:00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">定休日</span>
              <span className="font-medium text-red-600">毎週火曜日</span>
            </div>
          </div>
        </div>

        {/* 特別サービス */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="mr-3">✨</span>
            特別サービス
          </h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700">
                毎週火曜日は占いサービス実施
              </span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700">事前予約でご希望料理を提供</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700">自家焙煎コーヒー豆の販売</span>
            </div>
          </div>
        </div>

        {/* お知らせ */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="mr-3">📢</span>
            お知らせ
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="text-sm text-gray-500">2025年8月14日</p>
              <p className="text-gray-700">夏季限定メニューを開始しました</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <p className="text-sm text-gray-500">2025年7月20日</p>
              <p className="text-gray-700">新しいコーヒー豆の販売を開始</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <p className="text-sm text-gray-500">2025年6月1日</p>
              <p className="text-gray-700">店舗改装工事のお知らせ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfomationText;
