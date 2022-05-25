import React from 'react';
import Products from '../components/Products';
import initialState from '../initialState';
import MetaHead from '../components/MetaHead';

const meta = (
  <MetaHead
    title="Productos"
    description="Encuentra todos tus productos favoritos"
    image="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
    url="https://platziConfMerch.xyz/"
  />
);

const Home = () => (
  <>
    {meta}
    <Products products={initialState.products} />
  </>
);
export default Home;
