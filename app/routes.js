const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (comMod) => (componentModule) => {
  comMod(null, componentModule.default);
};

export default function createRoutes() {

  return [
      {
       path: '/',
       name: 'home',
       getComponent(nextState, comMod) {
         import('containers/Home')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },
     {
       path: '/Products',
       name: 'products',
       getComponent(nextState, comMod) {
         import('containers/Products')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },
     {
        path: '/Gallery',
        name: 'Gallery',
        getComponent(nextState, comMod) {
          import('containers/Gallery')
            .then(loadModule(comMod))
            .catch(errorLoading);
        },
      },
      {
         path: '/About',
         name: 'about',
         getComponent(nextState, comMod) {
           import('containers/About')
             .then(loadModule(comMod))
             .catch(errorLoading);
         },
       },
       {
          path: '/Tents',
          name: 'tents',
          getComponent(nextState, comMod) {
            import('containers/Tents')
              .then(loadModule(comMod))
              .catch(errorLoading);
          },
        },
        {
           path: '/LedLanterns',
           name: 'ledLanterns',
           getComponent(nextState, comMod) {
             import('containers/LedLanterns')
               .then(loadModule(comMod))
               .catch(errorLoading);
           },
         },
         {
            path: '/Hammicks',
            name: 'Hammicks',
            getComponent(nextState, comMod) {
              import('containers/Hammicks')
                .then(loadModule(comMod))
                .catch(errorLoading);
            },
          },
    {
       path: '/Dashboard',
       name: 'dashboard',
       getComponent(nextState, comMod) {
         import('containers/Dashboard')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },
     {
        path: '/SignIn',
        name: 'signIn',
        getComponent(nextState, comMod) {
          import('containers/SignIn')
            .then(loadModule(comMod))
            .catch(errorLoading);
        },
      },
      {
         path: '/SignUp',
         name: 'signUp',
         getComponent(nextState, comMod) {
           import('containers/SignUp')
             .then(loadModule(comMod))
             .catch(errorLoading);
         },
       },



     {
      path: '*',
      name: 'notfound',
      getComponent(nextState, comMod) {
        import('containers/NotFoundPage')
          .then(loadModule(comMod))
          .catch(errorLoading);
      },
    },
  ];
}
