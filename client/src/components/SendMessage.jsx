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
    //Whatsapp api to send messages
    // import twilio from "twilio"; 
    // try {
    //   // Initialize Twilio client with your Account SID and Auth Token
    //   const client = twilio(
    //     "YOUR_TWILIO_ACCOUNT_SID",
    //     "YOUR_TWILIO_AUTH_TOKEN"
    //   );

    //   // Send WhatsApp message
    //   const messageData = await client.messages.create({
    //     body: message,
    //     from: "whatsapp:+<YOUR_TWILIO_NUMBER>",
    //     to: "whatsapp:+<RECIPIENT PHONE NUMBER, SHOULD PULL FROM BACKEND>",
    //   });

    //   // Handle success
    //   alert("Message sent successfully!");
    //   console.log(messageData);
    // } catch (error) {
    //   // Handle error
    //   console.error("Error sending message:", error);
    //   alert("Failed to send message. Please try again later.");
    // }
    alert("Message sent successfully!");
  };

  const scheduleMessage = () => {
    alert("Message scheduled successfully!");
    //  API call to backend here schedule the message
  };

  return (
    <div className="container mx-auto px-4 max-w-lg">
      <div className="mb-5">
        <h2 className="text-2xl font-bold mb-2">Schedule WhatsApp Message</h2>
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

        {schedule === "specific" && (
          <>
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
          </>
        )}

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

        <div className="flex gap-4">
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
