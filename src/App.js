import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
   const [loading, setLoading] = useState(true);
   const [tours, setTours] = useState([]);

   //function to fetch tours
   const fetchTours = async () => {
      //an extra precaution to ensure that loading is truw while fetching data
      setLoading(true);

      try {
         const response = await fetch(url);
         const tours = await response.json();
         //console.log(tours);
         setLoading(false);
         setTours(tours);
      } catch (error) {
         setLoading(false);
         console.log(error);
      }
   };

   //calling fetchTours function when page loads
   useEffect(() => {
      fetchTours();
   }, []);

   if (loading) {
      return (
         <main>
            <Loading />
         </main>
      );
   }

   return (
      <main>
         <Tours />
      </main>
   );
}

export default App;