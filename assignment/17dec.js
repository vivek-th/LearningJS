// mixin.js
 const dataFetcherMixin = {
    data() {
      return {
        fetchedData: null,
        loading: false,
      };
    },
    methods: {
      fetchData(url) {
        this.loading = true;
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(`Data from ${url}`);
          }, 1000);
        }).then((response) => {
          console.log(response);
          this.fetchedData = response;
          this.loading = false;
        });
      },
    },
  };
  