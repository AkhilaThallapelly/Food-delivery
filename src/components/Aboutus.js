const AboutUs = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 bg-white shadow-lg rounded-2xl">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        About Us
      </h1>

      <p className="text-gray-600 text-lg mb-6 leading-relaxed">
        Welcome to <strong className="text-orange-600">FoodDelivery</strong>, 
        your trusted food delivery partner. We bring delicious meals from your favorite 
        restaurants right to your doorstep — fresh, hot, and on time.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
        Our Mission
      </h2>
      <p className="text-gray-600 text-lg mb-6 leading-relaxed">
        To connect people with great food effortlessly. Whether you’re craving 
        biryani at midnight or a healthy salad after work, we’ve got you covered.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
        Why Choose Us?
      </h2>
      <ul className="list-disc list-inside text-gray-600 text-lg space-y-2 mb-6">
        <li>⚡ Lightning-fast delivery</li>
        <li>🍔 Wide variety of cuisines</li>
        <li>💳 Secure and easy payments</li>
        <li>📍 Real-time order tracking</li>
      </ul>

      <p className="text-center text-gray-700 font-medium mt-10">
        Thank you for choosing{" "}
        <strong className="text-orange-600">FoodDelivery</strong>. 
        We’re here to serve you with love and flavor ❤️
      </p>
    </div>
  );
};

export default AboutUs;
