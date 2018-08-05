var dogs = [
    { name: 'Fluffy', isFluffy: true },
    { name: 'Fido', isFluffy: true },
    { name: 'Scooby', isFluffy: true },
    { name: 'Ralph', isFluffy: false },
  ]
  
  // Only return the fluffy ones:

  var onlyFluffy = dogs.filter(function(dog){
      if (dog.isFluffy) {
          return dog;
      }
  })

  console.log(onlyFluffy);

  var dogNames = dogs.map(function(dog){
    return dog.name;
  });

  console.log(dogNames);