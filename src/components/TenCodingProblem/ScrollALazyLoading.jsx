import { useState, useEffect } from "react";

const ScrollALazyLoading = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    setLoading(true);
    try {
      // use your client id by register developer account on unplash and create app.
      const response = await fetch(
        `https://api.unsplash.com/photos/?client_id=weJDI4C21OzgEkJD2ZSkb5yt1aBQwiuHh2tVK4tvS5w&page=${page}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const data = await response.json();
      if (Array.isArray(data)) {
        setImages((prevImages) => [...prevImages, ...data]);
        setPage((prevPage) => prevPage + 1);
      } else {
        console.error("Invalid data format:", data);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    )
      return;
    fetchImages();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div>
      <h1>Image Gallery</h1>
      <div className="image-gallery">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.urls.small}
            alt={image.alt_description}
          />
        ))}
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
};

export default ScrollALazyLoading;
