import React from "react";

const AccessMap = () => {
  return (
    <div className="w-full">
      <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg mb-8">
        <iframe
          title="Kojun Coffee Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2111.5031372191634!2d130.20159491353692!3d33.55840810727727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3541e9a70dd3277f%3A0xd37c81b22e484d71!2skojun%20coffee!5e0!3m2!1sja!2sjp!4v1755099452460!5m2!1sja!2sjp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default AccessMap;
