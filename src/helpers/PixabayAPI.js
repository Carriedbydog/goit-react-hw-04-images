import axios from 'axios';

export const getGallery = async params => {
  return await axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '39010552-8e1294040e1d3b982f9767e41',
        ...params,
      },
    })
    .then(({ status, message, data }) => {
      if (status !== 200) {
        throw new Error(message);
      }
      return data;
    });
};
