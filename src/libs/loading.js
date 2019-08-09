let loadingCount = 0;
const startLoading = () => {
  document.getElementById('loading').style.display = 'flex';
};

const endLoading = () => {
  document.getElementById('loading').style.display = 'none';
};

export const showLoading = () => {
  if (loadingCount === 0) {
    startLoading();
  }
  loadingCount += 1;
};

export const hideLoading = () => {
  if (loadingCount <= 0) {
    return;
  }
  loadingCount -= 1;
  if (loadingCount === 0) {
    endLoading();
  }
};
