export type RegisterPatient = { 
    id: string
    name: string
    caretaker: string
    email: string
    date: Date
    symptoms: string
}

export type DraftPatient = Omit<RegisterPatient , 'id'>