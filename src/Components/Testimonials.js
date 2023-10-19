import React from 'react';

const Testimonials = () => {
  // Создайте массив с отзывами
  const testimonials = [
    {
      id: 1,
      author: "John Doe",
      text: "Great service! I'm very satisfied with the results.",
    },
    {
      id: 2,
      author: "Jane Smith",
      text: "Excellent team! They exceeded my expectations.",
    },
    // Добавьте больше отзывов
  ];

  return (
    <section id="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-slider">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <p>{testimonial.text}</p>
            <p className="author">{testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
