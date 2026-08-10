// Mock Firebase implementation using localStorage
// Replace with actual Firebase code when ready

const STORAGE_KEY = 'mock_firebase_testimonials';

// Initialize with empty array if nothing exists
if (!localStorage.getItem(STORAGE_KEY)) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
}

let listeners = [];

const notifyListeners = () => {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  listeners.forEach(listener => listener(data));
};

export const addTestimonial = async (testimonial) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      const newTestimonial = { ...testimonial, id: Date.now().toString() };
      data.push(newTestimonial);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      notifyListeners();
      resolve(newTestimonial);
    }, 500); // simulate network delay
  });
};

export const deleteTestimonial = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      const updatedData = data.filter(t => t.id !== id);
      if (data.length === updatedData.length) {
        reject(new Error("Testimonial not found"));
        return;
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
      notifyListeners();
      resolve(true);
    }, 500);
  });
};

export const subscribeToTestimonials = (callback) => {
  // Initial callback
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  callback(data);
  
  // Add to listeners
  listeners.push(callback);
  
  // Return unsubscribe function
  return () => {
    listeners = listeners.filter(l => l !== callback);
  };
};
