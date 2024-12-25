import React, { useState } from "react";
import"./histry.css"

// List of historical events and landmarks of Bangladesh
const historyEvents = [
  {
    year: "1947",
    title: "Independence of India",
    introduction: "In 1947, India gained independence from British rule.",
    fullText: "In 1947, India gained independence from the British Empire. This was a momentous event in South Asia, and it also marked the end of the British Raj. It led to the partition of India, resulting in the creation of two separate nations: India and Pakistan. This event laid the groundwork for future historical developments in the region.",
  },
  {
    year: "1971",
    title: "Bangladesh Liberation War",
    introduction: "In 1971, Bangladesh fought a war of independence from Pakistan.",
    fullText: "The Bangladesh Liberation War of 1971 was a result of political tensions between East and West Pakistan. After months of political unrest, the Pakistani military launched an operation in East Pakistan, sparking a full-scale war. With support from India, Bangladesh declared its independence and fought for freedom, which ultimately led to the creation of Bangladesh.",
  },
  {
    year: "1678",
    title: "Lalbagh Fort Construction",
    introduction: "The Lalbagh Fort in Dhaka was started in 1678 during the Mughal era.",
    fullText: "The Lalbagh Fort, located in the heart of Dhaka, is a Mughal-era fort complex. It was built by Prince Mohammad Azam, the son of Emperor Aurangzeb. Although construction was never completed, it remains a significant historical site, showcasing the Mughal architectural style. The fort houses several important structures, including the tomb of Pari Bibi, and is a popular tourist attraction.",
  },
  {
    year: "300 BCE",
    title: "Mahasthangarh",
    introduction: "Mahasthangarh is an ancient archaeological site in Bogura, dating back to the 3rd century BCE.",
    fullText: "Mahasthangarh is the oldest archaeological site in Bangladesh, and it was the capital of the ancient Bengal region. The site includes ruins of temples, fortifications, and other buildings from the Maurya and Gupta periods. Mahasthangarh is a significant location for historians and archaeologists, offering insights into the early civilizations of Bengal.",
  },
  {
    year: "1859",
    title: "Ahsan Manzil Construction",
    introduction: "Ahsan Manzil, a historical palace in Dhaka, was built in 1859 and served as the residence of the Nawabs of Dhaka.",
    fullText: "Ahsan Manzil, located on the banks of the Buriganga River in Dhaka, was constructed in the 19th century. It is one of the most iconic examples of Indo-Saracenic architecture in Bangladesh. The building served as the residence of the Nawabs of Dhaka and later became a museum, showcasing the rich cultural heritage of the region.",
  },
  {
    year: "1500s",
    title: "Sixty Dome Mosque",
    introduction: "The Sixty Dome Mosque, located in Bagerhat, was built in the 15th century.",
    fullText: "The Sixty Dome Mosque, also known as Shat Gombuj Masjid, is a UNESCO World Heritage Site in the Bagerhat District of Bangladesh. Built during the Bengal Sultanate, this mosque is famous for its impressive structure with 60 domes and 77 vaulted arches. It is considered one of the greatest architectural achievements of the Sultanate period.",
  },
  {
    year: "1947",
    title: "Shaheed Minar",
    introduction: "The Shaheed Minar was established in 1952 to honor the Language Movement Martyrs.",
    fullText: "The Shaheed Minar, located in Dhaka, is a symbol of the Language Movement of 1952, where students and activists protested against the government's decision to impose Urdu as the state language. The monument, dedicated to the martyrs who lost their lives in this movement, is a significant landmark in the cultural and political history of Bangladesh.",
  },
  {
    year: "2000s",
    title: "Terracotta Art in Bangladesh",
    introduction: "Terracotta art has a rich history in Bangladesh, especially from ancient Bengal.",
    fullText: "Terracotta art in Bangladesh dates back to ancient times and is prominently featured in temples, monuments, and statues. This art form was particularly prevalent in the Bengal region and is often associated with the Mauryan, Gupta, and Pala periods. Terracotta figurines, tiles, and sculptures are key elements of Bangladeshi heritage, seen in various historical sites like Paharpur and Mahasthangarh.",
  },
  // Add more historical events and landmarks here as needed
];

const AllHistoryOfBd = () => {
  // State to manage which history event is currently expanded
  const [expandedEvent, setExpandedEvent] = useState(null);

  // Function to toggle the visibility of the full event text
  const toggleEvent = (index) => {
    if (expandedEvent === index) {
      setExpandedEvent(null); // If the event is already expanded, collapse it
    } else {
      setExpandedEvent(index); // Otherwise, expand the selected event
    }
  };

  return (
    <div className="w-11/12 mx-auto py-5 md:py-10 lg:py-16 ">
      <h1 className="text-3xl font-bold dark:text-white">Historical History of Bangladesh</h1>

      <div className="faq-section">
        {historyEvents.map((event, index) => (
          <div key={index} className="faq-item">
            <div className="faq-title" onClick={() => toggleEvent(index)}>
              <h3>{event.year} - {event.title}</h3>
            </div>
            {expandedEvent === index && (
              <div className="faq-content">
                <p><strong>Introduction:</strong> {event.introduction}</p>
                <p><strong>Full Description:</strong> {event.fullText}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllHistoryOfBd;
