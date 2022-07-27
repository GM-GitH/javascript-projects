class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
  static generatePassword(){
    return Math.floor(Math.random()*10000);
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  get certifications() {
    return this._certifications;
  }  
  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

class Doctor extends HospitalEmployee {
  constructor(name, insurance) {
    super(name);
    this._insurance = insurance;
  } 
  get insurance(){
    return this._insurance;
  }
}

const doctorWho = new Doctor('Who', 'No')
doctorWho.takeVacationDays(15);
console.log(`Dr. ${doctorWho.name} remaining vacation: ${doctorWho.remainingVacationDays} days. Have insurance? ${doctorWho.insurance}`);


const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(`Nurse ${nurseOlynyk.name} remaining vacation: ${nurseOlynyk.remainingVacationDays} days.`);
nurseOlynyk.addCertification('Genetics');
console.log(`Nurse ${nurseOlynyk.name} certifications: ${nurseOlynyk.certifications.join(', ')}`);
