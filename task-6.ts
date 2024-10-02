function logMessage(message: string): void {
    console.log(message);
  }
  
  function throwError(errorMessage: string): never {
    throw new Error(errorMessage);
  }
  
  function infinityLoop(): never {
    while (true) {
      console.log("Infinity loop");
    }
  }
  
  logMessage("Simple message");
  throwError("Error message");
  logMessage("Simple message two");
  