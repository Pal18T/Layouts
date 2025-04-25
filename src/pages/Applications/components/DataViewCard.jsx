import React from "react";

const DataViewCard = (props) => {
  const item = {
    fullName: "",
    planName: "",
    status: ""
  }
  return (
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow border border-gray-200">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            {/* Avatar Circle */}
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl">
              BM
            </div>
            <div>
              <p className="font-semibold text-gray-900">{item.fullName}</p>
              <p className="text-xs text-gray-500 mt-0.5">{item.planName}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
              {item.status}
            </span>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg width="18" height="18" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <circle cx="5" cy="12" r="1.5"/>
                <circle cx="12" cy="12" r="1.5"/>
                <circle cx="19" cy="12" r="1.5"/>
              </svg>
            </button>
          </div>
        </div>
        {/* Card content section */}
        <div className="flex flex-wrap px-6 py-4 text-sm gap-x-8 gap-y-2">
          <div>
            <div className="font-medium text-gray-800">UPFDV014397</div>
            <div className="text-xs text-gray-500">Proposal Number</div>
          </div>
          <div>
            <div className="font-medium text-gray-800">Not opted for e-Nach</div>
            <div className="text-xs text-gray-500">e-NACH Status</div>
          </div>
          <div>
            <div className="font-medium text-gray-800">20</div>
            <div className="text-xs text-gray-500">Premium Type</div>
          </div>
          <div>
            <div className="font-medium text-gray-800">1</div>
            <div className="text-xs text-gray-500">Policy Term</div>
          </div>
          <div>
            <div className="font-medium text-gray-800">29/07/2024</div>
            <div className="text-xs text-gray-500">Draft Date</div>
          </div>
          <div>
            <div className="font-medium text-gray-800">240000</div>
            <div className="text-xs text-gray-500">Premium Amount</div>
          </div>
        </div>
        {/* Footer action row */}
        <div className="flex items-center justify-between px-6 pb-4">
          <div>
            <div className="font-semibold text-yellow-600 text-sm">Pending</div>
            <div className="text-xs text-gray-400">Payment Status</div>
          </div>
          <button
            className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-8 py-2 rounded-lg font-medium text-sm transition"
          >
            <span>&#xbb; Resume</span>
          </button>
        </div>
      </div>
  );
};

export default DataViewCard;