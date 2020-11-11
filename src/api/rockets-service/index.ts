import gql from 'graphql-tag';

const GET_LAUNCHES = gql`
  {
    launchesPast {
      mission_name
      details
      links {
        flickr_images
      }
    }
  }
`;

export default {
  get() {
    return GET_LAUNCHES;
  },
};
