import React, { useState } from "react";

export default function SendMessage() {
  const [trigger, setTrigger] = useState("after-purchase");
  const [message, setMessage] = useState("");
  const [schedule, setSchedule] = useState("immediate");
  const [dateTime, setDateTime] = useState("");
  const [customerSegment, setCustomerSegment] = useState("all");

  const handleScheduleChange = (event) => {
    setSchedule(event.target.value);
  };

  const sentMessage = async () => {
    alert("Message sent successfully!");
    // Twilio API integration here
  };

  const scheduleMessage = () => {
    alert("Message scheduled successfully!");
    // API call to backend to schedule the message
  };

  return (
    <div className="container mx-auto px-4 max-w-lg">
      <div className="mb-5">
        <h2 className="text-2xl font-bold mb-2 text-center md:text-left">Schedule WhatsApp Message</h2>
        <div className="mb-4">
          <label htmlFor="trigger" className="block mb-1">
            Message Trigger:
          </label>
          <select
            id="trigger"
            value={trigger}
            onChange={(e) => setTrigger(e.target.value)}
            className="w-full p-2 mb-3 border border-gray-300 rounded"
          >
            <option value="after-purchase">After Purchase</option>
            <option value="abandoned-cart">After Abandoned Cart</option>
            <option value="follow-up">Follow-up After Purchase</option>
            <option value="custom">Custom Trigger</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-1">
            Message Content:
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 mb-3 border border-gray-300 rounded"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="schedule" className="block mb-1">
            Schedule:
          </label>
          <select
            id="schedule"
            value={schedule}
            onChange={handleScheduleChange}
            className="w-full p-2 mb-3 border border-gray-300 rounded"
          >
            <option value="immediate">Immediate</option>
            <option value="delayed">Delayed</option>
            <option value="specific">Specific Date/Time</option>
          </select>
        </div>

        {schedule === "specific" && (
          <div className="mb-4">
            <label htmlFor="date-time" className="block mb-1">
              Date/Time:
            </label>
            <input
              type="text"
              id="date-time"
              placeholder="YYYY-MM-DD HH:MM"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              className="w-full p-2 mb-3 border border-gray-300 rounded"
            />
          </div>
        )}

        <div className="mb-4">
          <label htmlFor="customer-segment" className="block mb-1">
            Customer Segment:
          </label>
          <select
            id="customer-segment"
            value={customerSegment}
            onChange={(e) => setCustomerSegment(e.target.value)}
            className="w-full p-2 mb-3 border border-gray-300 rounded"
          >
            <option value="all">All Customers</option>
            <option value="group">Customer Groups</option>
            <option value="individual">Individual Customers</option>
          </select>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <button
            onClick={sentMessage}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 w-full md:w-auto"
          >
            Send Message
          </button>
          {schedule === "specific" && (
            <button
              onClick={scheduleMessage}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 w-full md:w-auto"
            >
              Schedule Message
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
