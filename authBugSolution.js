let unsubscribe;

const auth = getAuth();

const authCheck = () => {
  unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      console.log('User is signed in');
    } else {
      // User is signed out
      console.log('User is signed out');
    }
  });
};

// Call authCheck when needed, for example in a component's useEffect hook
// Clean up the listener in the component's cleanup function

const cleanUp = () => {
  if (unsubscribe) {
    unsubscribe();
  }
};

// Example of usage in a React component:
// useEffect(() => {
//  authCheck();
//  return cleanUp;
// }, []);