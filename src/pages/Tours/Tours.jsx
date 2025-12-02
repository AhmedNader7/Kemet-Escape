import { useState, useEffect, useMemo } from "react";
import TourList from "../../components/TourList/TourList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { mockTours, categories } from "../../data/mockTours";

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [sortBy, setSortBy] = useState("featured");

  useEffect(() => {
    // Simulate API call
    const loadTours = () => {
      setTimeout(() => {
        setTours(mockTours);
        setLoading(false);
      }, 800);
    };

    loadTours();
  }, []);

  const filteredTours = useMemo(() => {
    let filtered = tours.filter((tour) => {
      const matchesSearch =
        tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tour.destination.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || tour.category === selectedCategory;
      const matchesPrice =
        tour.price >= priceRange[0] && tour.price <= priceRange[1];

      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort tours
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "duration":
        filtered.sort((a, b) => {
          const aDays = parseInt(a.duration.split(" ")[0]);
          const bDays = parseInt(b.duration.split(" ")[0]);
          return bDays - aDays;
        });
        break;
      default:
        // Keep original order for featured
        break;
    }

    return filtered;
  }, [tours, searchTerm, selectedCategory, priceRange, sortBy]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handlePriceChange = (range) => {
    setPriceRange(range);
  };

  const handleSortChange = (sort) => {
    setSortBy(sort);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Tours
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover amazing destinations and create unforgettable memories
              with our curated tourism programs.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <SearchBar
            onSearch={handleSearch}
            onCategoryChange={handleCategoryChange}
            onPriceChange={handlePriceChange}
            onSortChange={handleSortChange}
            categories={categories}
            selectedCategory={selectedCategory}
            priceRange={priceRange}
            sortBy={sortBy}
          />
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            {loading
              ? "Loading tours..."
              : `Showing ${filteredTours.length} of ${tours.length} tours`}
          </p>
        </div>

        <TourList tours={filteredTours} loading={loading} />
      </div>
    </div>
  );
};

export default Tours;
