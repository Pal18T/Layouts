// src/configs/paginationConfig.js
const paginationConfig = {
  showFirstLastButtons: true,
  showPrevNextButtons: true,
  maxVisibleButtons: 5,
  buttonLabels: {
    first: "Previous",
    previous: "Previous",
    next: "Next",
    last: "Next"
  },
  responsive: {
    mobile: {
      maxVisibleButtons: 3,
      showFirstLastButtons: false
    }
  }
};

export default paginationConfig;
