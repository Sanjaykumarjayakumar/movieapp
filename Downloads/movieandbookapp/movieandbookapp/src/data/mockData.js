// Mock movie data
export const movies = [
  {
    id: 1,
    title: "Inception",
    image: "https://images.unsplash.com/photo-1489599735186-5f0e1b1b4b7b?w=300&h=450&fit=crop",
    rating: 8.8,
    year: 2010,
    genre: "Sci-Fi, Action",
    duration: "148 min",
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Marion Cotillard", "Tom Hardy", "Elliot Page"],
    description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    whereToWatch: ["Netflix", "Amazon Prime", "HBO Max"]
  },
  {
    id: 2,
    title: "The Dark Knight",
    image: "https://images.unsplash.com/photo-1489599735186-5f0e1b1b4b7b?w=300&h=450&fit=crop",
    rating: 9.0,
    year: 2008,
    genre: "Action, Crime",
    duration: "152 min",
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine"],
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    whereToWatch: ["HBO Max", "Amazon Prime"]
  },
  {
    id: 3,
    title: "Pulp Fiction",
    image: "https://images.unsplash.com/photo-1489599735186-5f0e1b1b4b7b?w=300&h=450&fit=crop",
    rating: 8.9,
    year: 1994,
    genre: "Crime, Drama",
    duration: "154 min",
    director: "Quentin Tarantino",
    cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson", "Bruce Willis"],
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    whereToWatch: ["Netflix", "Amazon Prime"]
  },
  {
    id: 4,
    title: "The Shawshank Redemption",
    image: "https://images.unsplash.com/photo-1489599735186-5f0e1b1b4b7b?w=300&h=450&fit=crop",
    rating: 9.3,
    year: 1994,
    genre: "Drama",
    duration: "142 min",
    director: "Frank Darabont",
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler"],
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    whereToWatch: ["Netflix", "Amazon Prime"]
  },
  {
    id: 5,
    title: "Forrest Gump",
    image: "https://images.unsplash.com/photo-1489599735186-5f0e1b1b4b7b?w=300&h=450&fit=crop",
    rating: 8.8,
    year: 1994,
    genre: "Drama, Romance",
    duration: "142 min",
    director: "Robert Zemeckis",
    cast: ["Tom Hanks", "Robin Wright", "Gary Sinise", "Sally Field"],
    description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
    whereToWatch: ["Netflix", "Amazon Prime"]
  },
  {
    id: 6,
    title: "The Matrix",
    image: "https://images.unsplash.com/photo-1489599735186-5f0e1b1b4b7b?w=300&h=450&fit=crop",
    rating: 8.7,
    year: 1999,
    genre: "Action, Sci-Fi",
    duration: "136 min",
    director: "Lana Wachowski, Lilly Wachowski",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving"],
    description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    whereToWatch: ["Netflix", "HBO Max"]
  }
];

// Mock book data
export const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=450&fit=crop",
    author: "Harper Lee",
    rating: 4.8,
    year: 1960,
    genre: "Fiction, Classics",
    pages: 281,
    description: "The story of young Scout Finch, whose father, a principled lawyer, defends a Black man falsely accused of rape.",
    whereToBuy: ["Amazon", "Barnes & Noble", "Local Bookstores"]
  },
  {
    id: 2,
    title: "1984",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=450&fit=crop",
    author: "George Orwell",
    rating: 4.7,
    year: 1949,
    genre: "Dystopian Fiction",
    pages: 328,
    description: "A dystopian social science fiction novel about totalitarian control and mass surveillance.",
    whereToBuy: ["Amazon", "Barnes & Noble", "Local Bookstores"]
  },
  {
    id: 3,
    title: "The Great Gatsby",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=450&fit=crop",
    author: "F. Scott Fitzgerald",
    rating: 4.5,
    year: 1925,
    genre: "Fiction, Classics",
    pages: 180,
    description: "A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.",
    whereToBuy: ["Amazon", "Barnes & Noble"]
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=450&fit=crop",
    author: "Jane Austen",
    rating: 4.6,
    year: 1813,
    genre: "Romance, Classics",
    pages: 432,
    description: "A romantic novel that follows the character development of Elizabeth Bennet, the dynamic protagonist.",
    whereToBuy: ["Amazon", "Barnes & Noble", "Local Bookstores"]
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=450&fit=crop",
    author: "J.D. Salinger",
    rating: 4.4,
    year: 1951,
    genre: "Fiction, Coming-of-age",
    pages: 234,
    description: "The story of Holden Caulfield and his experiences in New York City after being expelled from prep school.",
    whereToBuy: ["Amazon", "Barnes & Noble"]
  },
  {
    id: 6,
    title: "Harry Potter and the Sorcerer's Stone",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=450&fit=crop",
    author: "J.K. Rowling",
    rating: 4.9,
    year: 1997,
    genre: "Fantasy, Young Adult",
    pages: 309,
    description: "The first novel in the Harry Potter series, following Harry Potter's first year at Hogwarts School of Witchcraft and Wizardry.",
    whereToBuy: ["Amazon", "Barnes & Noble", "Local Bookstores"]
  }
];
