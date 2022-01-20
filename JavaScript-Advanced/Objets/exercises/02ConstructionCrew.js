function solve(object){
    // if dizziness is true then needed water is 0.1ml per kilogram per year of experience

    if(object.dizziness==true){
          object.levelOfHydrated += (object.weight *0.1)*object.experience
          object.dizziness = false
          return object


    }else{return object}




}solve({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  );
  solve({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  )
  solve({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  );