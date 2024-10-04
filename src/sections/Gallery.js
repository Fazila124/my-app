import React, { useState } from 'react';
import './Gallery.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

const galleryItems = [
  {
    imageUrl: 'car.jpg',
    title: 'CAB BOOKING',
    description: 'This is a cab booking project where users can book rides online. It includes features such as real-time cab tracking, fare estimates, and payment integration. Users can create accounts, view ride history, and provide feedback on drivers. Built with HTML, CSS, and JavaScript, the project also uses Firebase for real-time data syncing.',
    githubUrl: 'https://github.com/aloksingh3112/Book-My-cab',
  },
  {
    imageUrl: 'shipment.jpg',
    title: 'SHIPMENT TRACKING',
    description: 'A system to track the status of shipments in real-time. The platform provides features like package tracking, delivery notifications, and expected time of arrival. Integrated with third-party APIs for shipment data, it is built using Node.js and MongoDB for scalability. A dashboard is available for administrators to monitor delivery operations.',
    githubUrl: 'https://github.com/cyberwombat/shipmethod',
  },
  {
    imageUrl: 'shop.jpg',
    title: 'E-COMMERCE',
    description: 'An e-commerce platform for buying and selling products. The platform allows users to browse products, add them to the cart, and make payments. It includes product recommendations, user reviews, and order tracking. Developed using React for the frontend and Node.js for the backend, the database is managed using MongoDB.',
    githubUrl: 'https://github.com/dinushchathurya/e-commerce-site',
  },
  {
    imageUrl: 'hotel.jpg',
    title: 'RESTAURANT BOOKING',
    description: 'A project to book tables and manage restaurant reservations. The platform allows users to search for restaurants, view menus, and reserve tables. It includes an admin panel for restaurant owners to manage bookings and customer feedback. Built using PHP and MySQL, the project incorporates AJAX for smooth user experience.',
    githubUrl: 'https://github.com/harismuneer/Restaurant-Management-System',
  },
  {
    imageUrl: 'chatbot.jpg',
    title: 'CHATBOT',
    description: 'An AI-powered chatbot for customer support. This chatbot uses natural language processing (NLP) to understand and respond to user queries. It can handle basic customer service tasks like answering FAQs, providing information about products, and processing requests. The project is built using Python and integrated with the Rasa framework for NLP.',
    githubUrl: 'https://github.com/Bin-Huang/chatbox',
  },
  {
    imageUrl: 'hospital.jpg',
    title: 'HOSPITAL MANAGEMENT',
    description: 'A project for managing patient records and hospital operations. The system includes modules for patient registration, appointment scheduling, and billing. It also features a doctor portal to view patient history and manage prescriptions. The backend is powered by Django, and the frontend is built using Bootstrap.',
    githubUrl: 'https://github.com/your-username/hospital-management',
  },
  {
    imageUrl: 'ebook.jpg',
    title: 'E-BOOK STORE',
    description: 'A platform for buying and reading ebooks online. Users can browse through a wide range of categories, purchase ebooks, and read them within the application. It includes features like bookmarking, highlighting, and notes. Developed using PHP for backend operations and MySQL for database management.',
    githubUrl: 'https://github.com/your-username/ebook-store',
  },
  {
    imageUrl: 'diary.jpg',
    title: 'PERSONAL DIARY',
    description: 'A web application to create and manage a personal diary. The app allows users to write daily entries, categorize them, and attach images or links. It includes password protection and data encryption for privacy. Built using React.js for the frontend and Firebase for data storage.',
    githubUrl: 'https://github.com/your-username/personal-diary',
  },
  {
    imageUrl: 'floral.jpg',
    title: 'FLORAL SHOP',
    description: 'An online store for selling floral arrangements. Users can browse through different flower categories, customize bouquets, and place orders. The project also includes an admin panel for managing orders and inventory. It is developed using Laravel for the backend and Vue.js for the frontend.',
    githubUrl: 'https://github.com/your-username/floral-shop',
  },
];

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleShowModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <section className="w3l-gallery" id="gallery">
      <div className="destionation-innf py-5">
        <div className="container py-lg-5 py-md-4 py-2 HomePageGallery">
          <div className="title-content text-center">
            <h6 className="title-subw3hny">PROJECT</h6>
            <h3 className="title-w3l mb-5">GALLERY</h3>
          </div>
          <div className="row">
            {galleryItems.map((item, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
                <div className="w3_agile_portfolio_grid">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="img-fluid radius-image"
                  />
                  <div className="w3layouts_news_grid_pos">
                    <div className="wthree_text">
                      <h3>{item.title}</h3>
                      <p>{item.description.substring(0, 30)}...</p>
                      <div className="project-buttons mt-3">
                        {/* GitHub Repository Button */}
                        <Button
                          variant="primary"
                          onClick={() => window.open(item.githubUrl, '_blank')}
                          className="mr-2"
                        >
                          View Repository
                        </Button>
                        {/* More Details Button */}
                        <Button
                          variant="info"
                          onClick={() => handleShowModal(item)}
                        >
                          More Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal for More Details */}
          {/* Modal for More Details */}
<Modal show={showModal} onHide={handleCloseModal}>
  <Modal.Header closeButton>
    <Modal.Title>{selectedItem?.title}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    {selectedItem && (
      <>
        <img
          src={selectedItem.imageUrl}
          alt={selectedItem.title}
          className="img-fluid mb-3"
        />
        <h6 className="desc">{selectedItem.description}</h6>
      </>
    )}
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleCloseModal}>
      Close
    </Button>
  </Modal.Footer>
</Modal>
</div>
      </div>
    </section>
  );
};

export default Gallery;
