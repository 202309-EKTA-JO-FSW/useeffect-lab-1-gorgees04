import { useEffect, useState } from "react";
import DogList from "../Components/DogList/DogList";
import Form from "../Components/Form/Form";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // You will need to put a state here to save all the dogs data into
  const [dogs, setDogs] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  // And you will fetch the data with useEffect
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((response) => response.json())
      .then((data) => {
        setDogs(data);
        setIsLoaded(true);
      });
  }, []);

  if (!isLoaded) return <h3>Loading...</h3>;

  const handleNumberOfDogs = (dog) => {
    setDogs(dog);
  };

  return (
    <div className="card">
      {/* When the button is clicked in the form, it should fetch the information. 
          How can we do that by utilizing useState?
          
      */}
      {/* <Form /> Uncomment <Form /> if you are going after the bonus */}
      {/* This page should receive the images array */}
      <Form setNumberOfDogs={handleNumberOfDogs} />
      <DogList dogsList={dogs.message} />
    </div>
  );
}
