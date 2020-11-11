import React from 'react';

import * as S from './styles';

const ThumbRocketData = ({ dataFromQuery }) =>
  [undefined].includes(dataFromQuery) || dataFromQuery.length <= 0
    ? 'Loading...'
    : dataFromQuery.launchesPast.map(({ mission_name, details, links }) => (
        <div key={mission_name}>
          <S.Header>🛰 {mission_name}</S.Header>
          <p>{details}</p>
          {[null, undefined].includes(links.flickr_images) ? (
            'Dont have image'
          ) : (
            <img src={links.flickr_images} width={'200'} />
          )}
        </div>
      ));

export { ThumbRocketData as default };
