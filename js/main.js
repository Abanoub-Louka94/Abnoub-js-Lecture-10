
let hospital = {
    name: 'cairo hospital',

    patients: {
        patient_1: {

            id: 1,

            name: 'john',

            diseases: {

                disease_1: {
                    name: 'one'
                },

                disease_2: {
                    name: 'two'
                },

                disease_3: {
                    name: 'three'
                },

                disease_4: {
                    name: 'four'
                }
            }
        },

        patient_2: {

            id: 2,

            name: 'doe',

            diseases: {

                disease_1: {
                    name: 'one'
                },

                disease_2: {
                    name: 'two'
                },

                disease_3: {
                    name: 'three'
                },

                disease_4: {
                    name: 'four'
                }
            }
        },

        patient_3: {

            id: 3,

            name: 'ahmed',

            diseases: {

                disease_1: {
                    name: 'one'
                },

                disease_2: {
                    name: 'two'
                },

                disease_3: {
                    name: 'three'
                },

                disease_4: {
                    name: 'four'
                }
            }
        }
    },

    doctors: {

        doctor_1: {
            id: 1,
            name: 'xx'
        },

        doctor_2: {
            id: 2,
            name: 'zz'
        },

        doctor_3: {
            id: 3,
            name: 'ii'
        },
    },

    // add patient
    addPatients(id, name) {
        return this.patients[`patient_${id}`] = {
            id,
            name,
        }
    },

    // add diseases
    addDiseases(id, name) {
        return this.patients.patient_1.diseases[`disease_${id}`] = {
            name,
        }
    },

    // remove spisiphic diseases from spisiphic patient
    removeDiseases(patient_id, disease_id) {
        delete this.patients[`patient_${patient_id}`].diseases[`disease_${disease_id}`]
    },

    // remove spisiphic patient
    removePatient(id) {
        delete this.patients[`patient_${id}`]
    },

    // add doctor
    addDoctors(id, name) {
        return this.doctors[`doctor_${id}`] = {
            id,
            name
        }
    },

    // remove spisiphic doctor
    removeDoctor(id) {
        delete this.doctors[`doctor_${id}`]
    },

    // assign spisiphic doctor to spisiphic patient 
    assignDoctorToPatient(doctor_id, patient_id) {
        Object.assign(this.patients[`patient_${patient_id}`], this.doctors[`doctor_${doctor_id}`])
    },

    // update a spisiphic doctor's name
    updateDoctorName(doctor_id, name) {
        return this.doctors[`doctor_${doctor_id}`] = {
            name
        };
        
    }
};

hospital.addPatients(4, 'mahmmoud');
hospital.addDoctors(4, 'mm');
hospital.addDiseases(5, 'five');
hospital.removePatient(2);
hospital.removeDiseases(1, 2);
hospital.removeDoctor(1);
hospital.assignDoctorToPatient(3, 1);
hospital.updateDoctorName(2, 'gg')  // if doctor does not exist the method adds a new doctor  ??
console.log(hospital);

// method to get the doctor of a spisiphic patient ?? 


