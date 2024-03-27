// export const SearchMovie = async () => {
//   const movieTitle = new FormData(event.target);
//   console.log(movieTitle);
//   const convertMovieTitle = movieTitle.trim().split(" ").join("+");

//   const res = await fetch(
//     `http://www.omdbapi.com/?t=${convertMovieTitle}&apikey=b615f6f4`
//   );

//   return res.json();
// };

// const getMovie = async (movie) => {
//   const res = await fetch(`http://www.omdbapi.com/?t=${movie}&apikey=b615f6f4`);
//   const data = await res.json();

//   console.log(data);
// };

export const Movie = ({ movieData }) => {
  console.log("moviedata", movieData);

  return (
    <div>
      <h1>{movieData.Title ?? "N/A"}</h1>
      <p>{movieData.Plot ?? "N/A"}</p>
      <img
        src={
          movieData.Poster === "N/A"
            ? "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
            : movieData.Poster
        }
        width={500}
        height={500}
      />
    </div>
  );
};
