import { useState, useEffect } from 'react';
import axios from 'axios';
import axiosInstance from '../axios';

const useAPI = (url,body,type) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  
  useEffect(() => {
    if(!url) return 
    const fetchData = async () => {
      try {
        if(type==="post"){
          const response = await axiosInstance.post(url,{body});
          console.log(response)
          setData(response.data.data);
        }else{
          const response = await axiosInstance.get(url);
          console.log(response)
          setData(response.data.data);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, [url,body,type]);

  return { data, loading, error };
};


export default useAPI