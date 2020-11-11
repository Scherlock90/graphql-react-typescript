import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useAsyncEffect } from 'use-async-effect';

import ThumbRocketData from './thumb-rocket-data';

import { ServiceFactory } from '@api/ServiceFactory';

import * as S from './styles';

const rockets = ServiceFactory.get('rockets');

const RocketGrapqhl = () => {
  const [dataFromQuery, setDataFromQuery] = useState<[]>([]);
  const { loading, error, data } = useQuery(rockets.get());

  const updatedData = () => setDataFromQuery(data);

  useAsyncEffect(async () => {
    updatedData();

    return async () => updatedData();
  }, [data, loading]);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Something went wrong</p>;

  return (
    <S.Container>
      <ThumbRocketData {...{ dataFromQuery }} />
    </S.Container>
  );
};

export { RocketGrapqhl as default };
