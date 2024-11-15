import { toast } from 'react-toastify';

export const showError = (msg: string) => {
  toast.error(msg, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
    theme: 'light',
  });
};

export const showSuccess = (msg: string) => {
  toast.success(msg, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
    theme: 'light',
  });
};
