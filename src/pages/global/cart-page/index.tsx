import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import CupService from 'services/cup-service';

const CartPage: React.FC = () => {
  const { id } = useParams();
  const [item, setItem] = useState<Cup | null>(null);

  if (id === undefined) return <Navigate to="/page-not-found" />;

  React.useEffect(() => {
    (async () => {
      const fetchedItem = await CupService.fetchSingle(id);

      setItem(fetchedItem);
    })();
  }, []);

  return (
    <>
      <div>
        {JSON.stringify(item)}
      </div>
      {/* <div>{JSON.stringify(id)}</div> */}
    </>
  );
};
export default CartPage;
