interface SuspenderResponse {
  read(): any;
}

const getSuspender = (promise: Promise<any>) => {
  let status: 'pending' | 'success' | 'error' = 'pending';
  let response: any;

  const suspender = promise.then(
    (res) => {
      status = 'success';
      response = res;
    },
    (err) => {
      status = 'error';
      response = err;
    }
  );

  const read = () => {
    switch (status) {
      case 'pending':
        throw suspender;
      case 'error':
        throw response;
      default:
        return response;
    }
  };

  return { read } as SuspenderResponse;
};

export default getSuspender;
