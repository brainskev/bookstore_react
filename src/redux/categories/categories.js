const STATUS_CHECK = 'bookstore/status/CHECK_STATUS';

const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case STATUS_CHECK:
      return 'Under construction';
    default:
      return state;
  }
};

export const checkStatus = () => ({ type: STATUS_CHECK });

export default categoryReducer;
