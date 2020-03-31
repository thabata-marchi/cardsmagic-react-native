import {useEffect, useCallback, useState} from 'react';
import api from './api';

const useDataApi = () => {
  const [deckCard, setDeckCard] = useState([]);

  useEffect(() => {
    connect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const connect = useCallback(async () => {
    try {
      const response = await api.get('cards');
      setDeckCard(response.data.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return deckCard;
};

export default useDataApi;
